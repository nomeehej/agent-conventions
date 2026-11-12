import {copyFile} from "node:fs/promises";

// ----------------------------------------------------------------------------------------
// 탭 아이콘 동기화
//
// 문서 개발과 배포에 같은 탭 아이콘을 적용한다.
//
// for-humanity 0.17은 파비콘 설정을 지원하지 않으므로 설치 패키지의 내장 자원만 교체한다.
// ----------------------------------------------------------------------------------------
await copyFile(
	new URL("../content/asset/favicon.svg", import.meta.url),
	new URL(import.meta.resolve("for-humanity/src/asset/favicon.svg")),
);
