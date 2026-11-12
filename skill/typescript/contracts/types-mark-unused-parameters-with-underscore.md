# Mark Unused Parameters With an Underscore Prefix

**Impact: MEDIUM (계약에 있는 매개변수를 유지하면서 사용하지 않는 매개변수를 표시합니다)**

기존 콜백, 프레임워크 계약의 매개변수는 쓰지 않아도 생략하지 않고 `_` 접두사로 남깁니다.
커링한 핸들러의 마지막 콜백과 매개변수를 하나도 쓰지 않는 구현에도 똑같이 적용합니다.
`MouseEventHandler`의 이벤트를 쓰지 않으면 `() =>` 대신 `(_event) =>`로 받습니다.
호출 자리에 바로 적는 인라인 콜백도 계약의 매개변수를 모두 적고 쓰지 않는 것에 `_`를 붙입니다.
TanStack Query의 `onSuccess`는 `() =>` 대신 `(_data, _variables, _onMutateResult, _context) =>`로 받습니다.
어떤 매개변수가 있는지 읽는 자리에서 보이게 하려는 것입니다.

참고: [tsconfig 문서: noUnusedParameters](https://www.typescriptlang.org/tsconfig/#noUnusedParameters),
[Biome 문서: noUnusedFunctionParameters](https://biomejs.dev/linter/rules/no-unused-function-parameters/javascript/).

**Incorrect 1 (계약의 일부인 콜백 매개변수를 생략합니다):**

```ts
type LogSink = (message: string, level: "info" | "error") => void;

const noopLog: LogSink = () => {
	// 아무 일도 하지 않는 싱크다.
};
```

**Correct 1 (계약은 유지하고 쓰지 않는 매개변수만 `_`로 표시합니다):**

```ts
type LogSink = (message: string, level: "info" | "error") => void;

// ----------------------------------------------------------------------------------------
// 아무것도 남기지 않는 로그 싱크
//
// 테스트의 출력을 끄는 데 쓴다.
// ----------------------------------------------------------------------------------------
const noopLog: LogSink = (_message, _level) => {};
```

> 나머지 예시와 예외는 [full rule](../rules/01-05-types-mark-unused-parameters-with-underscore.md)에 있습니다.
