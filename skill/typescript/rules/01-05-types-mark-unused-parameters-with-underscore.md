---
title: Mark Unused Parameters With an Underscore Prefix
titleKo: 쓰지 않는 매개변수도 밑줄을 붙여 남깁니다
impact: MEDIUM
impactDescription: 계약에 있는 매개변수를 유지하면서 사용하지 않는 매개변수를 표시합니다
appliesWhen:
  - 기존 콜백이나 프레임워크 계약을 구현하면서 매개변수를 빼거나 쓰지 않을 때
  - 커링한 핸들러가 마지막에 돌려주는 콜백에서 매개변수를 뺄 때
tags: types, callbacks, naming
---

## Mark Unused Parameters With an Underscore Prefix

**Impact: MEDIUM (계약에 있는 매개변수를 유지하면서 사용하지 않는 매개변수를 표시합니다)**

기존 콜백, 프레임워크 계약의 매개변수는 쓰지 않아도 생략하지 않고 `_` 접두사로 남깁니다.
커링한 핸들러의 마지막 콜백과 매개변수를 하나도 쓰지 않는 구현에도 똑같이 적용합니다.
`MouseEventHandler`의 이벤트를 쓰지 않으면 `() =>` 대신 `(_event) =>`로 받습니다.
호출 자리에 바로 적는 인라인 콜백도 계약의 매개변수를 모두 적고 쓰지 않는 것에 `_`를 붙입니다.
TanStack Query의 `onSuccess`는 `() =>` 대신 `(_data, _variables, _onMutateResult, _context) =>`로 받습니다.
어떤 매개변수가 있는지 읽는 자리에서 보이게 하려는 것입니다.

**Incorrect 1 (계약의 일부인 콜백 매개변수를 생략합니다):**

<<< ../examples/types-mark-unused-parameters-with-underscore/01-incorrect.ts

**Correct 1 (계약은 유지하고 쓰지 않는 매개변수만 `_`로 표시합니다):**

<<< ../examples/types-mark-unused-parameters-with-underscore/02-correct.ts

**Incorrect 2 (인라인 콜백이 계약의 매개변수를 모두 생략합니다):**

<<< ../examples/types-mark-unused-parameters-with-underscore/03-incorrect.ts

**Correct 2 (인라인 콜백도 매개변수를 모두 적고 쓰지 않는 것에 `_`를 붙입니다):**

<<< ../examples/types-mark-unused-parameters-with-underscore/04-correct.ts
