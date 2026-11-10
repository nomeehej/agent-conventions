---
title: Keep Five Document Kinds
titleKo: 문서는 다섯 종류만 둡니다
impact: HIGH
impactDescription: 문서 종류가 늘어 같은 정보가 여러 문서에 흩어지거나 증분 문서가 쌓이는 일을 막습니다
appliesWhen:
  - 설계 문서를 새로 만들 때
  - 설계 문서를 나누거나 합치려 할 때
tags: structure, documents, for-humanity
---

## Keep Five Document Kinds

**Impact: HIGH (문서 종류가 늘어 같은 정보가 여러 문서에 흩어지거나 증분 문서가 쌓이는 일을 막습니다)**

설계 문서는 for-humanity의 `content/public/` 아래 다섯 종류만 둡니다. 그림은 `img/<화면>/`에 둡니다.

| 문서 | 역할 | 사이드바 `group` |
| --- | --- | --- |
| `overview.md` | 프로젝트 지도. 라우트, 계층, API 정답, 재료 정답표, 규약 링크 | `Project` |
| `shared.md` | 두 화면 이상이 같이 쓰는 동작. 규칙, 글, 부품 | `Project` |
| `questions.md` | 화면별 질문 목록과 화면에 묶이지 않는 질문 카드 | `Project` |
| `screen/<화면>.md` | 화면 문서. 계획, 그 화면의 질문 카드, 늘 지금의 정답 | `Screen` |
| `change/<YYMMDD>-<주제>.md` | 변경 문서. 전달, Figma 수정, spec 갱신 한 건 | `Change` |

화면 하나는 문서 하나입니다. 증분 기능도 그 화면 문서 안에서 지금의 정답으로 고쳐 씁니다.
남은 일감 문서, 증분 문서, 화면별 질문 문서는 만들지 않습니다.
그 정보는 화면 문서의 `Plan`, `Questions` 절과 변경 문서에 둡니다.
frontmatter는 `name`, `label`, `group`, `order`에 `created`를 더합니다.
`revised`는 화면 문서만 더합니다.
`label`은 무슨 문서인지 한 줄입니다. 주제 뒤에 마침표를 찍고 핵심 항목을 쉼표로 잇습니다.
for-humanity 0.29.0부터 제목 아래 글머리와 사이드바 설명으로 나갑니다.
홈 `README.md`는 문서 지도만 적고 지금 단계는 overview를 가리킵니다.
아이콘 `img/figma.svg`와 추천 별 `img/star.svg`는 `img/` 바로 아래에 둡니다.

새 프로젝트는 아래 순서로 시작합니다.

| 순서 | 일 | 정하는 규칙 |
| --- | --- | --- |
| 1 | `npx for-humanity init`으로 `content/`와 `for-humanity.config.ts`를 만듦 | — |
| 2 | config의 `status`, `refs`를 고정 어휘로 채움 | `writing-label-in-english-and-explain-in-korean` |
| 3 | `README.md`, `overview.md`, `questions.md` 틀 | `structure-write-overview-as-the-project-map`, `question-keep-cards-in-the-screen-doc` |
| 4 | 첫 화면 문서 | `structure-order-screen-docs-for-two-readers` |
| 5 | 두 번째 화면이 같은 동작을 쓰면 `shared.md` | `structure-define-shared-behavior-once` |

참고: [Design Docs at Google: 구현 중 갱신](https://www.industrialempathy.com/posts/design-docs-at-google/),
[Google 문서 가이드: 최소한의 문서](https://google.github.io/styleguide/docguide/best_practices.html).

**Incorrect 1 (증분 문서와 남은 일감 문서를 따로 만들어 같은 화면의 정답이 세 곳에 흩어집니다):**

<<< ../examples/structure-keep-five-document-kinds/01-incorrect.markdown

**Correct 1 (다섯 종류와 그림 폴더만 두고 증분은 화면 문서 안에서 고쳐 씁니다):**

<<< ../examples/structure-keep-five-document-kinds/02-correct.markdown
