---
title: Keep Owner Folders Flat with Role Folders
titleKo: 폴더는 라우트와 컴포넌트마다 하나이고 안은 평평하게 두며 `_`는 역할 폴더에만 씁니다
impact: HIGH
impactDescription: 파일 자리와 이름 앞 `_`를 따지지 않고 경로만 보고 소유자와 역할을 압니다
appliesWhen:
  - '`page`, `component` 아래 폴더나 `_constant`, `_function`, `_hook`, `_type` 폴더를 만들거나 옮길 때'
  - 새 컴포넌트, 함수, 타입 파일의 자리나 이름을 정할 때
  - 제외: 기존 파일 내부 구현만 바꾸는 경우
reviewWith: ownership-keep-component-imports-flowing-downward, ownership-group-route-frames-with-outlets
tags: ownership
---

## Keep Owner Folders Flat with Role Folders

**Impact: HIGH (파일 자리와 이름 앞 `_`를 따지지 않고 경로만 보고 소유자와 역할을 압니다)**

폴더로 컴포넌트 계층을 나타내지 않습니다.
화면 안의 호출 계층은 진입 파일의 조립과 가져오기로 드러납니다.
라우트 그룹과 `Outlet` 프레임의 자리는 `ownership-group-route-frames-with-outlets`가 정합니다.

### 폴더와 파일 배치

| 대상 | 배치 |
| --- | --- |
| `page` 아래 폴더 | 라우트만 만듭니다. 폴더 트리는 라우트 선언과 같습니다 |
| `component/ui`, `component/widget` 아래 폴더 | 컴포넌트 하나가 폴더 하나입니다 |
| 폴더 안 | 컴포넌트 파일을 폴더 바로 아래에 나열합니다. 컴포넌트를 위한 하위 폴더는 만들지 않습니다 |
| 진입 파일 | 폴더와 이름이 같습니다. 화면은 `<folder>-page`이고 같은 지원 코드를 쓰는 라우트가 한 폴더에 여럿이면 나머지는 `<folder>-<변형>-page`입니다 |
| 이름 앞 `_` | 역할 폴더 네 개에만 씁니다. 컴포넌트, 함수, CSS 파일에는 붙이지 않습니다 |
| 역할 폴더 안 | 하위 폴더 없이 파일을 나열합니다 |
| 폴더 밖에서 가져오기 | 진입 파일과 역할 폴더만 가져옵니다 |

라우트 폴더와 `ui`, `widget`의 컴포넌트 폴더가 소유자입니다.
전용 지원 코드가 없는 화면은 `page/not-found-page.tsx`처럼 `page`나 라우트 그룹 바로 아래에 파일로 둘 수 있습니다.
동반 CSS만 있어도 폴더는 필요하지 않습니다.
폴더 안에 둘 컴포넌트는 `composition-create-components-only-when-required`가 정합니다.
가져오기 경계는 `ownership-keep-component-imports-flowing-downward`를 따릅니다.
검사는 `tooling-enable-the-biome-react-domain`이 정합니다.

### 역할 폴더

| 역할 폴더 | 담는 것 |
| --- | --- |
| `_constant` | 입력을 받지 않는 상수, 기본값, 기준값, 파서 묶음 등 선언형 계약 |
| `_function` | 이름 붙여 내보낸 도메인 계산 |
| `_hook` | 실제 상태, 이펙트, 컨텍스트를 소유한 커스텀 훅 |
| `_type` | 여러 파일이 공유하는 계약. 개별 컴포넌트의 프롭스는 해당 TSX에 둡니다 |

지원 코드는 쓰는 파일 안에 둡니다.
다른 파일이 가져가야 할 때만 역할 폴더로 빼고 테스트 파일도 다른 파일로 셉니다.
가져가는 파일이 하나로 줄면 쓰는 파일 안으로 되돌립니다.
함수 안 보조는 테스트하려고 빼지 않습니다(`typescript/functions-give-each-function-its-own-file`).
역할 폴더는 필요한 것만 만들고 외부에서도 가져올 수 있는 공개 영역입니다.

### 폴더 이름 기준

폴더 이름은 단수로 쓰되 프레임워크가 강제하는 이름과 라우트 그룹 표기는 예외입니다.
화면 폴더는 URL 구간 이름을 그대로 따르므로 `orders`처럼 복수여도 됩니다.
소유자 아래에 `component`, `util`, `helper`, `config`, `constants`, `common`, `shared` 폴더를 만들지 않습니다.
루트의 `constant`, `type`, `hook`은 프로젝트가 소유하는 역할 폴더이므로 같은 규칙을 따르되 `_`를 붙이지 않습니다.

| 함께 판단할 내용       | 기준                                                                  |
|------------------------|-----------------------------------------------------------------------|
| 컴포넌트를 만들 조건   | `composition-create-components-only-when-required`                    |
| 보조 함수 추출         | `typescript/functions-extract-helpers-only-when-the-boundary-is-real` |
| 보조 함수의 자리       | `typescript/functions-give-each-function-its-own-file`                |
| 파일 이름과 심볼       | `ownership-name-component-files-after-their-symbols`                  |
| 루트에만 두는 `util`   | `typescript/functions-promote-owner-free-functions-to-root-util`      |
| 루트에만 두는 `config` | `typescript/naming-read-environment-values-through-config-env`        |

참고: [Next.js 문서: 비공개 폴더
`_folder`](https://nextjs.org/docs/app/getting-started/project-structure#private-folders),
[Kent C. Dodds: 코로케이션](https://kentcdodds.com/blog/colocation).

**Incorrect 1 (단순 컴포넌트에 역할 폴더를 미리 다 만듭니다):**

<<< ../examples/ownership-place-owner-files-in-role-folders/01-incorrect.txt

**Correct 1 (역할 폴더를 미리 만들지 않습니다):**

<<< ../examples/ownership-place-owner-files-in-role-folders/02-correct.txt

**Incorrect 2 (컴포넌트마다 하위 폴더를 만들고 범용 이름 폴더와 `_` 파일을 섞습니다):**

<<< ../examples/ownership-place-owner-files-in-role-folders/03-incorrect.txt

**Correct 2 (컴포넌트 파일은 폴더 바로 아래에 두고 역할 폴더만 만듭니다):**

<<< ../examples/ownership-place-owner-files-in-role-folders/04-correct.txt
