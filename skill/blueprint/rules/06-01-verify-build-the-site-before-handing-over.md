---
title: Build the Site Before Handing Over
titleKo: 넘기기 전에 사이트를 빌드합니다
impact: HIGH
impactDescription: 깨진 링크, 겹친 번호, 추천 없는 카드, 서술 어미가 남은 문서를 사람에게 넘기지 않게 합니다
appliesWhen:
  - 설계 문서 작업을 마무리하거나 넘길 때
  - 설계 문서를 고친 뒤 완료로 보고할 때
requiredOnCompletion: true
tags: verify, build, links
---

## Build the Site Before Handing Over

**Impact: HIGH (깨진 링크, 겹친 번호, 추천 없는 카드, 서술 어미가 남은 문서를 사람에게 넘기지 않게 합니다)**

문서를 넘기기 전에 아래 검사를 전부 돌리고 결과를 보고에 싣습니다.

| 검사 | 기준 |
| --- | --- |
| `for-humanity build` | 부품 오류 0, 없는 문서와 없는 제목 경고 0 |
| 번호 유일 | 모든 문서의 `:::details[번호 …]` 카드를 합쳐 번호가 겹치지 않음 |
| 추천 하나 | `Option` 표가 있는 카드마다 `img/star.svg` 정확히 하나 |
| 서술 어미 | 표 밖에서 `다`로 끝나는 줄 0. 흐름도 라벨 포함. `Copy`, `Scenarios` 표의 원문은 표 안이라 제외 |
| 열린 카드 수 | 화면 문서 `Questions` 첫 줄의 열린 수 = 그 문서의 열린 카드 수 = `questions.md` 목록 표의 열린 번호 |
| 표 칸 수 | 머리와 칸 수가 다른 행 0 |
| 시나리오 | 화면마다 `check-scenarios.mjs <문서> <테스트 폴더>` 통과 |
| 눈 확인 | 바꾼 절을 밝은 테마, 어두운 테마, 390 폭으로 열어 봄. 브라우저를 쓸 수 없는 실행이면 `눈 확인 못 함`과 사람이 열 절 이름을 보고에 남김 |

빌드 통과는 링크와 부품이 멀쩡하다는 뜻이지 사실이 맞다는 근거가 아닙니다. 사실 대조는 따로 합니다.
앞의 여섯 검사는 `script/blueprint/check-docs.mjs` 한 번으로 돌립니다.
시나리오는 `stage-derive-checks-from-state-tables`의 스크립트로, 눈 확인은 브라우저로 직접 합니다.

참고: [Write the Docs: 코드로서의 문서](https://www.writethedocs.org/guide/docs-as-code/).

**Incorrect 1 (빌드와 검사 없이 정리했다고 넘깁니다):**

<<< ../examples/verify-build-the-site-before-handing-over/01-incorrect.markdown

**Correct 1 (검사 명령과 출력으로 넘깁니다):**

<<< ../examples/verify-build-the-site-before-handing-over/02-correct.markdown

**Correct (여섯 검사를 한 번에 돌리는 스크립트입니다. 프로젝트의 `script/blueprint/`에 복사합니다):**

<<< ../examples/verify-build-the-site-before-handing-over/03-correct.mjs
