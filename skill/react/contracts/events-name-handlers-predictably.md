# Name Handlers Predictably

**Impact: MEDIUM (이벤트 흐름을 이름으로 검색할 수 있습니다)**

이벤트 핸들러는 `handle` 접두사에 대상과 역할을 붙입니다.

| 상황 | 이름 |
| --- | --- |
| `on*` 프롭에 연결하는 핸들러 | `handle` + 대상 + 프롭 이름에서 `on`을 뗀 부분. 대상은 프롭을 가진 요소나 컴포넌트 또는 그 동작이 다루는 도메인 대상입니다 (`handleTableRowSelect`, `handleProductSave`) |

`on*`은 프롭 이름에만 씁니다.
`onClick`을 처리하는 구현은 `handleRowClick`처럼 이름 짓습니다.
같은 컴포넌트에서 이름이 겹치지 않도록 대상이 다르면 대상 이름을 넣습니다.

**Incorrect 1 (구현에 `on*`을 쓰고 대상이 이름에 없어 같은 이름이 겹칩니다):**

```ts
import type {MouseEventHandler} from "react";

// 목록 항목과 저장 버튼 둘 다 클릭을 받는데 이름에 대상이 없어 뒤에 번호가 붙음
/**
 * 이미 고른 항목을 다시 누르면 선택 해제
 */
const onClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	toggleSelection();
};

/**
 * 폼 기본 제출 차단. 저장은 mutation 콜백이 이어서 처리
 */
const onClick2: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
};
```

**Correct 1 (`handle` 접두사와 대상, 이벤트가 드러나는 이름을 씁니다):**

```ts
import type {MouseEventHandler} from "react";

/**
 * 이미 고른 항목을 다시 누르면 선택 해제
 */
const handleListItemClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	toggleSelection();
};

/**
 * 폼 기본 제출 차단. 저장은 mutation 콜백이 이어서 처리
 */
const handleSaveButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
};
```

> 나머지 예시와 예외는 [full rule](../rules/09-01-events-name-handlers-predictably.md)에 있습니다.
