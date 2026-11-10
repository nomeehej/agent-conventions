---
title: Keep Body Comments for Intent and Steps
titleKo: 본문 주석은 의도를 `//` 한 줄로 적고 긴 본문은 구획 상자로 나눕니다
impact: MEDIUM
impactDescription: 코드를 옮겨 적은 주석은 막고 읽는 데 필요한 설명은 남깁니다
appliesWhen:
  - 함수, 컴포넌트 본문의 주석을 추가, 수정, 유지할 때
  - 도메인 규칙, 예외 방어, 외부 제약, 부수효과 순서, 긴 본문의 구획을 주석으로 설명할 때
reviewWith: >-
  docs-write-korean-comments-about-purpose-and-constraints,
  docs-justify-convention-exceptions-with-a-reason-comment
tags: docs, comments
---

## Keep Body Comments for Intent and Steps

**Impact: MEDIUM (코드를 옮겨 적은 주석은 막고 읽는 데 필요한 설명은 남깁니다)**

함수와 컴포넌트 본문의 주석에는 코드가 말하지 못하는 의도와 긴 본문의 구획만 적습니다.
도메인 규칙, 예외 방어, 외부 API 제약, 부수효과 순서는 그 줄 바로 위에 `//` 한 줄로 적습니다.
여러 구획을 한 본문에 둔 긴 함수, 컴포넌트는 구획마다 상자를 둡니다.
빈 줄로 나눈 단계만으로 흐름이 읽히는 짧은 본문에는 구획 상자를 두지 않습니다.

| 자리 | 주석 형태 |
| --- | --- |
| 코드 한 줄의 이유 | 그 줄 바로 위 `//` 한 줄. 사실 하나만 적습니다 |
| 긴 본문의 구획 | 구획 첫 줄 바로 위 상자. 제목 한 줄에 필요하면 설명을 더합니다. 대시 개수는 헤더 상자와 같고 들여쓴 만큼 오른쪽으로 길어집니다 |
| 번호 붙인 단계 주석(`// 1. …`) | 쓰지 않습니다. 긴 본문이면 구획 상자로, 짧은 본문이면 이유만 남긴 `//` 한 줄로 바꿉니다 |
| 주석 앞 | 앞 줄이 코드면 빈 줄 하나를 둡니다. 블록, 객체, 배열의 첫 줄, JSX 여는 태그 안, 앞 줄이 주석인 줄은 예외 |
| `docs-require-header-boxes-on-key-declarations`가 정한 선언 | 선언 바로 위 헤더 상자 |
| 그 밖의 지역 선언 | 별도 주석을 달지 않습니다. 필요한 줄의 의도만 `//`로 적습니다 |
| 테스트 사례의 준비, 실행, 검증 구간 | 테스트 규칙이 정한 한 줄 구간 주석을 따릅니다. 구획 상자를 두지 않습니다 |
| JSX 자식 | `//`를 쓸 수 없으므로 프레임워크 규칙을 따릅니다 |

내용과 상자 모양은 `docs-write-korean-comments-about-purpose-and-constraints`가 정합니다.
허용된 예외의 이유는 `docs-justify-convention-exceptions-with-a-reason-comment`가 정합니다.

참고: [Google 코드 리뷰 가이드: 주석](https://google.github.io/eng-practices/review/reviewer/looking-for.html#comments),
[Google TypeScript 가이드: JSDoc과 주석](https://google.github.io/styleguide/tsguide.html#jsdoc-versus-comments).

**Incorrect 1 (지역 선언에 코드를 옮겨 적은 주석을 답니다):**

<<< ../examples/docs-keep-body-comments-for-intent-and-steps/01-incorrect.ts

**Correct 1 (선언 이름이 이미 드러내는 내용만 적은 주석은 지웁니다):**

<<< ../examples/docs-keep-body-comments-for-intent-and-steps/02-correct.ts

**Incorrect 2 (지켜야 할 순서와 제약을 주석 없이 코드에만 둡니다):**

<<< ../examples/docs-keep-body-comments-for-intent-and-steps/03-incorrect.ts

**Correct 2 (짧은 본문에서는 제약과 순서의 이유를 그 줄 위 `//` 한 줄로 적습니다):**

<<< ../examples/docs-keep-body-comments-for-intent-and-steps/04-correct.ts
