---
title: Define Shared Behavior Once
titleKo: 여러 화면이 쓰는 동작은 Shared에 한 번만 적습니다
impact: HIGH
impactDescription: 같은 규칙과 글이 화면마다 따로 적혀 다르게 늙는 일과 공용 꼬리표로 읽기가 끊기는 일을 막습니다
appliesWhen:
  - 두 화면 이상이 쓰는 규칙, 글, 부품을 설계 문서에 적을 때
  - 화면 문서의 Rules, Reuse, Copy 표에 다른 화면과 같은 줄을 적으려 할 때
  - `shared.md`를 쓰거나 고칠 때
tags: structure, shared, reuse, link
---

## Define Shared Behavior Once

**Impact: HIGH (같은 규칙과 글이 화면마다 따로 적혀 다르게 늙는 일과 공용 꼬리표로 읽기가 끊기는 일을 막습니다)**

두 화면 이상이 같은 동작을 쓰면 `shared.md`에 한 번만 정합니다. 한 화면만 쓰면 그 화면 문서에 둡니다.
구현 전에는 "같은 동작은 한 번만 만든다"는 약속이고, 구현 뒤에는 그 약속이 사는 코드 이름표입니다.

| 자리 | 쓰는 법 |
| --- | --- |
| `shared.md` 첫머리 | 묶음 표 `Group`, `같이 쓰는 화면`, `무엇` |
| 묶음 | 동작 단위. 목록 표, 조건, 진입과 청산, 화면 사이 이동처럼. 코드 층(constant, widget)으로 묶지 않음 |
| 묶음의 표 | `What`, `Rule`, `Code`. `What` = 사람 말, `Code` = 코드 이름을 맨 뒤 |
| 행 앵커 | 짧은 첫 칸 맨 앞에 `<a id="코드이름"></a>`. 긴 글 칸에는 달지 않음 |
| 화면 문서의 규칙, 글 | 내용을 그대로 쓰고 그 글자에 `../shared.md#코드이름` 링크. 링크가 곧 공용 표시 |
| 화면 문서의 `Code` 칸 | 코드 이름만 |
| 화면 문서의 `Reuse` | 공용 부품은 이름 대신 그 부품의 규칙 문장에 링크. `ui/` 경로는 그대로 |
| 안내 | 화면 문서 `Overview` 목록에 한 줄 "링크 걸린 글, 규칙, 부품은 여러 화면이 같이 씀. 정의는 Shared" |

| 쓰지 않음 | 대신 |
| --- | --- |
| `- 공용 = 정렬, 페이지, 행 누름` 나열 | 각 규칙을 Rules 표의 한 줄로, 내용에 링크 |
| "공용 글", "Shared 정렬" 같은 링크 꼬리표 | 실제 글이나 규칙 문장을 링크 글자로 |
| 절마다 "여러 화면이 같이 쓰는 것은 Shared" 문장 | `Overview` 목록의 한 줄 |
| 코드 경로와 상수 이름만 늘어놓은 `shared.md` | 동작 묶음과 사람 말 `What`, 코드는 뒤 칸 |

화면 문서는 공용 규칙도 그 화면의 쓰임과 함께 한 줄로 적습니다.
예를 들어 "13열 중 11열" 같은 이 화면의 사정 뒤에 공용 규칙 문장을 링크로 잇습니다.
모달 입력란처럼 긴 명세는 그 부품을 처음 여는 화면 문서 한 곳에 두고 `shared.md`의 행이 그 절을 가리킵니다.

**Incorrect 1 (공용 나열 줄과 Shared 꼬리표만 있어 화면 문서에서 무슨 규칙인지 알 수 없습니다):**

<<< ../examples/structure-define-shared-behavior-once/01-incorrect.markdown [screen/orders.md]

**Correct 1 (shared.md는 동작 묶음과 사람 말로, 화면 문서는 규칙 문장을 링크 글자로 씁니다):**

<<< ../examples/structure-define-shared-behavior-once/02-correct-1.markdown [shared.md]

<<< ../examples/structure-define-shared-behavior-once/02-correct-2.markdown [screen/orders.md]
