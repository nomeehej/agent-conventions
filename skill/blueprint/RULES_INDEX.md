# Blueprint 설계 문서 컨벤션 Rule Index

- Skill: `blueprint`
- Routing digest: `sha256:587929fbf0f6fea5c0ce7e4f385399536e6e4d7b99ec191fff24c43218f3c082`

## Direct Companions

- `figma` (`conditional`) · Applies when: Figma 파일이나 노드를 설계 문서의 재료로 읽는다. · [SKILL.md](../figma/SKILL.md) · [RULES_INDEX.md](../figma/RULES_INDEX.md)
- `testing` (`conditional`) · Applies when: 설계 문서의 상태 표나 Scenarios 표에서 테스트 케이스나 story를 뽑거나 Scenarios 표를 쓰거나 고치거나 Plan 표의 Check를 케이스 ID로 채운다. · [SKILL.md](../testing/SKILL.md) · [RULES_INDEX.md](../testing/RULES_INDEX.md)

## Local Rules

- B01-01 | material-build-the-truth-table-first | 새 프로젝트의 overview 문서를 쓸 때. Figma, 기획 데모, API spec이 새 판으로 왔을 때.
- B01-02 | material-compare-sources-item-by-item | 전달문, 기획 데모, Figma가 둘 이상 있는 화면 문서나 변경 문서를 쓸 때. 새 판의 데모나 Figma를 옛 판과 견줄 때.
- B01-03 | material-read-figma-as-ux-not-pixels | Figma 파일이나 노드를 설계 문서의 재료로 읽을 때. Figma의 폭, 간격, 줄 높이를 문서에 적으려 할 때. 제외: 설계 문서 없이 Figma를 보고 코드를 구현하는 경우.
- B01-04 | material-confirm-response-shapes-with-captures | 화면 문서에 API 응답 필드나 값 규칙을 적을 때. spec에 없는 필드나 빈 배열 처리를 문서에 넣으려 할 때.
- B02-01 | question-keep-cards-in-the-screen-doc | 설계 중에 결정이나 질문이 생겨 번호를 붙일 때. 화면 문서 본문에서 결정이나 질문을 가리킬 때. \`questions.md\` 목록을 쓰거나 고칠 때.
- B02-02 | question-write-cards-with-options-and-one-pick | 화면 문서나 \`questions.md\`에 카드를 추가하거나 고칠 때. 사용자가 질문을 읽고 답을 못 고르겠다고 할 때.
- B02-03 | question-filter-what-needs-another-person | 화면 문서나 \`questions.md\`에 Q, B, D 카드를 새로 더할 때. Plan 표의 \`Depends on\` 칸을 채우거나 고칠 때.
- B02-04 | question-give-be-cards-a-figure | B 카드를 쓸 때. 사용자가 B 카드의 뜻을 모르겠다고 할 때.
- B02-05 | question-close-cards-in-place-with-the-result | 답이 와서 질문을 닫을 때. 질문 없이 정한 갈림길을 화면 문서에 남길 때. 새 재료가 사용자가 앞서 답한 것과 어긋날 때.
- B03-01 | structure-keep-five-document-kinds | 설계 문서를 새로 만들 때. 설계 문서를 나누거나 합치려 할 때.
- B03-02 | structure-order-screen-docs-for-two-readers | 화면 문서를 쓰거나 절을 옮길 때. 화면 문서에 새 절을 더할 때.
- B03-03 | structure-keep-code-owned-values-out | 화면 문서에 구현용 정보를 넣을 때. 화면 문서에 \`:::details\` 접기를 더하려 할 때. 구현이 끝난 화면 문서를 정리할 때.
- B03-04 | structure-keep-the-body-current-and-log-changes-apart | 전달문, Figma 수정, spec 갱신을 받아 설계 문서를 고칠 때. 화면 문서에 날짜가 붙은 절이나 소제목을 더하려 할 때.
- B03-05 | structure-write-overview-as-the-project-map | overview 문서를 쓸 때. 화면 문서에 프로젝트 전체의 라우트, 계층, 규약을 적으려 할 때.
- B03-06 | structure-define-shared-behavior-once | 두 화면 이상이 쓰는 규칙, 글, 부품을 설계 문서에 적을 때. 화면 문서의 Rules, Reuse, Copy 표에 다른 화면과 같은 줄을 적으려 할 때. \`shared.md\`를 쓰거나 고칠 때.
- B04-01 | writing-use-noun-phrases-one-fact-per-line | 설계 문서의 본문, 표, 캡션을 쓸 때. 설계 문서의 긴 문장을 고칠 때.
- B04-02 | writing-label-in-english-and-explain-in-korean | 설계 문서의 표 머리, 상태, 카드 항목 이름을 정할 때. 새 상태 말이나 카드 항목 이름을 만들려 할 때.
- B04-03 | writing-cite-at-the-end-and-link-figma-nodes | 설계 문서에 출처, Figma 노드, 파일 위치를 적을 때. 본문에 노드 id나 파일 경로가 글자로 드러날 때.
- B04-04 | writing-draw-flows-with-mermaid-and-trees-as-text | 설계 문서에서 흐름, 구조, 순서를 그림으로 그릴 때. 설계 문서에 폴더나 라우트 나무를 그릴 때. 설계 문서에 ASCII 상자로 흐름이나 구조를 그리려 할 때. 제외: 화면 모양을 보여 주는 경우.
- B04-05 | writing-show-regions-as-marked-figma-figures | 설계 문서에서 화면 모양이나 질문 자리를 그림으로 보여 줄 때. 화면 목업을 HTML이나 표로 손수 그리려 할 때. Figma 판이 바뀌어 문서의 그림을 다시 뜰 때.
- B05-01 | stage-split-work-into-gated-stages | 화면 문서의 Plan 절을 쓸 때. 구현 순서를 정하거나 바꿀 때. 제외: 설계 문서의 단계 표가 없는 작업 계획인 경우.
- B05-02 | stage-report-done-with-the-check-command | 설계 문서의 단계 구현을 끝내고 보고할 때. Plan 표의 상태를 Done으로 바꿀 때. | completionGate
- B05-03 | stage-derive-checks-from-state-tables | 설계 문서의 상태 표나 흐름도에서 테스트 케이스나 story를 뽑을 때. 화면 문서의 Scenarios 표를 쓰거나 고칠 때. Plan 표의 \`Check\` 칸을 케이스 ID로 채울 때.
- B06-01 | verify-build-the-site-before-handing-over | 설계 문서 작업을 마무리하거나 넘길 때. 설계 문서를 고친 뒤 완료로 보고할 때. | completionGate
- B06-02 | verify-diff-facts-when-restyling-or-moving | 설계 문서의 문체를 바꾸거나 절을 옮길 때. 설계 문서의 절 번호나 제목을 바꿀 때.