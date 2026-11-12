import type {Stats} from "node:fs";
import {lstat, readFile, readdir, rm, writeFile} from "node:fs/promises";
import path from "node:path";

// ----------------------------------------------------------------------------------------
// 생성 파일 하나의 쓰기 또는 삭제 계획
//
//   targetPath
//      절대 경로다.
//
//   content
//      새 UTF-8 본문이고 undefined면 기존 생성 파일을 삭제한다.
// ----------------------------------------------------------------------------------------
export interface GeneratedFileMutation {
	targetPath: string;
	content?: string;
}

// ----------------------------------------------------------------------------------------
// 생성 파일 쓰기 결과
//
//   deletedPaths
//      있던 파일을 실제로 지운 경로만 담는다.
// ----------------------------------------------------------------------------------------
export interface GeneratedFileWriteResult {
	deletedPaths: string[];
}

const readTargetStats = async (targetPath: string): Promise<Stats | undefined> => {
	try {
		return await lstat(targetPath);
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;

		throw error;
	}
};

export const readGeneratedDirectoryFileNames = async (directoryPath: string): Promise<string[]> => {
	const directoryStats = await readTargetStats(directoryPath);

	if (directoryStats === undefined) return [];

	if (!directoryStats.isDirectory()) {
		throw new Error(`Generated file path must be a real directory: ${directoryPath}`);
	}

	const entries = await readdir(directoryPath, {withFileTypes: true});

	for (const entry of entries) {
		if (!entry.isFile()) {
			throw new Error(`Generated directory entry must be a regular file: ${path.join(directoryPath, entry.name)}`);
		}
	}

	return entries.map((entry) => entry.name).sort((left, right) => left.localeCompare(right, "en-US"));
};

export const readGeneratedRegularFile = async (targetPath: string): Promise<string> => {
	const stats = await lstat(targetPath);

	if (!stats.isFile()) {
		throw new Error(`Generated file must be a regular file, not a symlink or directory: ${targetPath}`);
	}

	return await readFile(targetPath, "utf8");
};

// ----------------------------------------------------------------------------------------
// 생성 파일 집합 쓰기와 삭제
//
// 대상이 전부 일반 파일인지 먼저 확인하고 디렉터리나 링크 위에는 쓰지 않는다.
//
// 본문은 호출하는 쪽이 전부 그린 뒤에 넘기므로 렌더링이 실패하면 아무것도 바뀌지 않는다.
// ----------------------------------------------------------------------------------------
export const replaceGeneratedFiles = async (mutations: GeneratedFileMutation[]): Promise<GeneratedFileWriteResult> => {
	const targetPaths = mutations.map((mutation) => path.resolve(mutation.targetPath));

	if (new Set(targetPaths).size !== targetPaths.length) {
		throw new Error("Generated file transaction must not contain duplicate target paths.");
	}

	const statsByPath = new Map<string, Stats | undefined>();

	for (const targetPath of targetPaths) {
		const stats = await readTargetStats(targetPath);

		if (stats && !stats.isFile()) {
			throw new Error(`Generated file target must be a regular file when it already exists: ${targetPath}`);
		}

		statsByPath.set(targetPath, stats);
	}

	const deletedPaths: string[] = [];

	for (const [index, mutation] of mutations.entries()) {
		const targetPath = targetPaths[index] ?? mutation.targetPath;

		if (mutation.content === undefined) {
			if (statsByPath.get(targetPath) !== undefined) {
				await rm(targetPath, {force: true});
				deletedPaths.push(targetPath);
			}

			continue;
		}

		await writeFile(targetPath, mutation.content, "utf8");
	}

	return {deletedPaths};
};
