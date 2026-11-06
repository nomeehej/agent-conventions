# Figma 구현 컨벤션 Rule Index

- Skill: `figma`
- Routing digest: `sha256:355452a0ae019c715b906c7db894b90e302968ee4391b4c54d4b59b4f0b1ff1d`

## Direct Companions

- `css` (`conditional`) · Applies when: 스타일시트, \`className\`, 토큰 값을 추가하거나 수정한다. · [SKILL.md](../css/SKILL.md) · [RULES_INDEX.md](../css/RULES_INDEX.md)
- `react` (`conditional`) · Applies when: TSX 화면이나 컴포넌트를 추가하거나 수정한다. · [SKILL.md](../react/SKILL.md) · [RULES_INDEX.md](../react/RULES_INDEX.md)

## Local Rules

- F01-01 | read-start-with-screenshot-and-metadata | 요청에 Figma URL이나 노드 id가 있어 MCP로 디자인을 읽을 때. 같은 Figma 화면을 다시 읽거나 읽을 노드를 늘릴 때.
- F01-02 | read-choose-the-node-each-tool-reads | MCP 도구에 넘길 노드 id를 URL이나 메타데이터에서 고를 때. URL에 \`node-id\`가 없거나 \`/branch/\` 경로가 들어 있을 때.
- F01-03 | read-call-design-context-only-on-small-unmatched-nodes | 스크린샷과 메타데이터에서 본 요소의 저장소 대응물을 찾을 때. \`get\_design\_context\`를 부르거나 그 대상 노드를 고를 때. \`get\_design\_context\` 응답이 코드 대신 메타데이터로 오거나 성기다고 알릴 때.
- F01-04 | read-take-copy-from-the-render-not-layer-names | Figma 화면의 문구, 컬럼 이름을 JSX에 옮기거나 컴포넌트 종류를 고를 때. 스크린샷과 레이어 이름이 서로 다른 글자를 보여 줄 때. 설계 문서에 Figma 화면의 문구나 열 이름을 적을 때.
- F01-05 | read-collect-hidden-layers-and-annotations | Figma 메타데이터에 \`hidden="true"\` 노드가 있을 때. 화면 프레임 밖에 메모, 변경 이력, 상태 설명 프레임이 있을 때.
- F02-01 | intent-ask-when-ux-notes-and-gui-disagree | Figma 메모, 변경 이력, 와이어프레임이 GUI 화면과 다른 조건, 순서, 문구를 말할 때. 같은 화면이 UX 파일과 GUI 파일에 다르게 그려져 있을 때.
- F02-02 | intent-fill-undrawn-states-with-project-parts | 서버 데이터 목록, 입력, 비동기 동작이 있는 Figma 화면을 구현하거나 설계 문서로 옮길 때. 제외: 서버 데이터, 입력, 비동기 동작이 없는 정적 화면인 경우.
- F02-03 | intent-treat-frame-sizes-and-sample-text-as-samples | Figma 노드의 \`width\`, \`height\`, 좌표를 CSS 값으로 옮길 때. 샘플 문구 길이에 맞춰 칸 폭이나 줄 수를 정할 때. | reviewWith: css/layout-keep-layout-intent-explicit, css/layout-reach-for-intrinsic-sizing-before-breakpoints
- F02-04 | intent-implement-interactions-the-design-implies | Figma에 정렬 아이콘, 펼침 화살표, 정보 아이콘, 링크 색 문구가 있을 때. 행, 카드, 탭처럼 누를 수 있어 보이는 요소를 구현할 때.
- F03-01 | source-map-figma-values-to-project-tokens | Figma에서 읽은 간격, 모서리 반경, 색, 글꼴 값을 스타일에 넣을 때. \`get\_variable\_defs\`를 부르거나 그 응답과 \`get\_design\_context\`가 준 변수 이름을 코드에 옮길 때. | reviewWith: css/values-fall-back-only-outside-core-tokens, css/values-tokenize-repeated-visual-values
- F03-02 | source-separate-static-copy-from-server-data | Figma 텍스트 노드의 글자를 JSX나 문구 리소스에 넣을 때. 화면의 숫자, 이름, 날짜가 샘플인지 고정 문구인지 가려야 할 때.
- F04-01 | transcription-reuse-project-components-before-new-markup | Figma 화면의 표, 탭, 페이지네이션, 입력, 버튼, 배지를 마크업으로 새로 만들 때. \`get\_design\_context\`가 준 JSX를 화면 파일에 옮길 때. | reviewWith: css/ownership-change-other-owners-through-their-api, react/strategy-avoid-boolean-prop-proliferation
- F04-02 | transcription-do-not-copy-layer-structure | \`get\_design\_context\` 출력의 JSX, \`className\`, 인라인 SVG를 파일에 옮길 때. \`get\_design\_context\` 출력의 절대 좌표, \`rotate\`를 옮길 때. | reviewWith: css/composition-do-not-add-wrapper-elements-for-styling, css/composition-do-not-style-through-the-style-attribute
- F04-03 | transcription-use-existing-icons-or-downloaded-assets | Figma의 아이콘, 로고, 이미지를 코드에 넣을 때. 코드에 \`figma.com/api/mcp/asset\` URL이나 손으로 쓴 SVG \`path\`가 들어갈 때.
- F05-01 | verify-measure-rendered-values-before-claiming-parity | Figma 기준 구현이나 수정을 마무리하거나 완료로 보고할 때. | completionGate
- F05-02 | verify-report-reads-decisions-and-gaps | Figma 기준 작업의 결과를 보고하거나 넘겨줄 때. | completionGate