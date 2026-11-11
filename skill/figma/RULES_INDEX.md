# Figma 컨벤션 Rule Index

- Skill: `figma`
- Routing digest: `sha256:c292f1021b831d9a376ab07c2fb4231ffdf9e8fc37243eba3ac66063acb81a6e`

## Direct Companions

- `css` (`conditional`) · Applies when: 스타일시트, \`className\`, 토큰 값을 추가하거나 수정한다. · [SKILL.md](../css/SKILL.md) · [RULES_INDEX.md](../css/RULES_INDEX.md)
- `react` (`conditional`) · Applies when: TSX 화면이나 컴포넌트를 추가하거나 수정한다. · [SKILL.md](../react/SKILL.md) · [RULES_INDEX.md](../react/RULES_INDEX.md)

## Local Rules

- F01-01 | file-keep-the-library-apart-from-screen-files | 화면 파일에 master를 만들거나 라이브러리 master를 복사하려 할 때. 화면 파일에서 라이브러리 인스턴스를 떼어 내 고치려 할 때. 라이브러리 변경을 화면 파일이나 코드에 전할 때.
- F01-02 | file-mark-each-page-kind-with-one-symbol | 라이브러리 파일에 페이지를 만들거나 이름을 바꿀 때. 페이지 묶음 사이에 구분선을 넣거나 뺄 때.
- F01-03 | file-name-component-pages-after-code-components | ❖ 페이지나 master를 만들거나 이름을 바꿀 때. 라이브러리 파일의 페이지 순서를 정하거나 바꿀 때.
- F01-04 | file-merge-same-role-parts-into-one-master | 같은 역할의 코드 부품 둘 이상을 Figma에 그릴 때. 목차의 \`코드에만 있음\` 카드를 만들거나 고치거나 지울 때.
- F02-01 | layer-use-sections-only-for-master-groups | ❖ 페이지에 섹션이나 frame을 만들 때. 예시, 목차, 안내, 토큰 견본을 페이지에 놓을 때.
- F02-02 | layer-put-masters-directly-under-the-section | ❖ 페이지 섹션 안에 master, 이름표, 노트, \`\_header\`를 놓을 때. master를 frame이나 group으로 감싸려 할 때.
- F02-03 | layer-prefix-doc-parts-and-private-masters | 문서용 부품이나 다른 master 안에서만 쓰는 부품을 만들 때. master나 레이어 이름 앞의 \`\_\`, \`.\`을 붙이거나 뗄 때.
- F02-04 | layer-name-layers-by-role | master 안에 레이어를 만들거나 이름을 바꿀 때. master 안에 다른 부품의 인스턴스를 넣을 때.
- F02-05 | layer-lay-variants-out-as-a-labeled-matrix | set 안 variant를 배치하거나 다시 배치할 때. 행렬 이름표, 괄호선, 칸을 그리거나 고칠 때.
- F02-06 | layer-show-compositions-in-the-examples-frame | ❖ 페이지에 예시 frame이나 예시 칸을 만들 때. story를 Figma variant나 예시 칸에 대응시킬 때.
- F02-07 | layer-grow-masters-downward-for-attached-text | 오류, 도움말 글이 붙는 입력 master를 만들거나 고칠 때. 입력칸 옆에 이름, 단위 글자를 둘 때.
- F03-01 | property-share-axis-names-values-and-order | master에 variant 속성을 만들거나 속성 이름, 값, 순서를 바꿀 때. variant 이름을 짓거나 바꿀 때.
- F03-02 | property-choose-the-type-by-what-changes | master에 속성을 더하거나 속성 종류를 바꿀 때. 아이콘이나 다른 부품이 들어갈 자리를 master에 만들 때.
- F03-03 | property-draw-missing-states-as-marked-proposals | 코드에서 master를 그리며 코드가 정하지 않은 hover, focus, disabled 모양을 만날 때. 지금 화면이 쓰지 않는 크기나 상태를 master에 그릴 때.
- F03-04 | property-split-states-that-break-the-grid | set에 상태나 속성 값을 더할 때. variant 수가 많아 set을 나눌지 정할 때.
- F03-05 | property-keep-placeholder-copy-in-ui-masters | \`ui\` master나 예시 frame에 글자를 넣을 때. \`widget\` master에 업무 문구를 넣을 때.
- F04-01 | variable-bind-visual-values-to-variables-and-styles | master의 칠하기, 테두리, 간격, 모서리, 글자, 효과를 정할 때. master에 묶인 변수나 스타일을 바꾸거나 풀 때.
- F04-02 | variable-name-variables-after-code-tokens | 라이브러리 파일에 변수를 만들거나 이름, 값, scope를 바꿀 때. 변수의 Web 코드 문법을 정하거나 바꿀 때.
- F05-01 | note-write-only-what-the-canvas-cannot-show | 라이브러리 파일에 노트를 달거나 고치거나 정리할 때. 부품 구조, 속성 뜻, 코드 이야기를 Figma에 적으려 할 때.
- F05-02 | note-sign-dated-notes-and-remove-them-when-settled | 노란 노트를 새로 달 때. 노란 노트의 내용이 반영되거나 풀렸을 때.
- F05-03 | note-describe-masters-with-purpose-and-code-path | master나 variant의 설명을 쓰거나 고칠 때. 목차 카드의 상태 말을 정하거나 바꿀 때.
- F06-01 | release-version-the-whole-library-with-one-number | Changelog 줄의 변경 종류나 릴리스 번호를 정할 때. 부품마다 버전 번호를 붙이려 할 때.
- F06-02 | release-log-changes-only-in-the-changelog-page | master를 고친 뒤 Changelog에 줄을 더할 때. 릴리스 칸을 닫거나 새 \`다음\` 칸을 열 때. 부품 페이지에 이력이나 변경 메모를 두려 할 때.
- F06-03 | release-edit-masters-in-place-to-keep-node-ids | 기존 master나 variant를 고치거나 상태, 값을 더할 때. master를 지우거나 합치거나 이름을 바꿀 때. 릴리스 전에 바뀐 master의 node id가 그대로인지 확인할 때.
- F06-04 | release-publish-with-the-version-and-record-it-in-code | 라이브러리를 publish하거나 릴리스 칸을 닫을 때. 라이브러리 변경을 코드에 반영하고 PR을 올릴 때.
- F07-01 | script-read-the-official-skills-and-keep-these-names | \`use\_figma\`로 라이브러리 파일에 쓰기 시작할 때. 공식 \`figma-use\`, \`figma-generate-library\`의 기본값과 이 skill이 부딪힐 때.
- F07-02 | script-write-one-script-at-a-time-from-one-owner | 여러 부품을 나눠 분석하거나 그릴 때. 부품을 그리다 새 변수나 스타일이 필요해질 때.
- F07-03 | script-check-plugin-api-pitfalls-before-writing | Plugin API로 variant를 복제하거나 속성 값, 속성 순서를 바꿀 때. 변수를 칠하기에 묶거나 인스턴스, 슬롯 안 노드를 스크립트로 읽을 때. 같은 \`use\_figma\` 호출에서 만든 노드의 크기를 읽거나 글자 레이어 이름을 붙일 때.
- F07-04 | script-derive-properties-from-code-and-measured-stories | 코드 부품을 Figma master로 그릴 때. 코드와 master의 차이를 맞추려고 코드를 다시 읽을 때.
- F08-01 | read-start-with-screenshot-and-metadata | 요청에 Figma URL이나 노드 id가 있어 MCP로 디자인을 읽을 때. 같은 Figma 화면을 다시 읽거나 읽을 노드를 늘릴 때.
- F08-02 | read-choose-the-node-each-tool-reads | MCP 도구에 넘길 노드 id를 URL이나 메타데이터에서 고를 때. URL에 \`node-id\`가 없거나 \`/branch/\` 경로가 들어 있을 때.
- F08-03 | read-call-design-context-only-on-small-unmatched-nodes | 스크린샷과 메타데이터에서 본 요소의 저장소 대응물을 찾을 때. \`get\_design\_context\`를 부르거나 그 대상 노드를 고를 때. \`get\_design\_context\` 응답이 코드 대신 메타데이터로 오거나 성기다고 알릴 때.
- F08-04 | read-take-copy-from-the-render-not-layer-names | Figma 화면의 문구, 컬럼 이름을 JSX에 옮기거나 컴포넌트 종류를 고를 때. 스크린샷과 레이어 이름이 서로 다른 글자를 보여 줄 때. 설계 문서에 Figma 화면의 문구나 열 이름을 적을 때.
- F08-05 | read-collect-hidden-layers-and-annotations | Figma 메타데이터에 \`hidden="true"\` 노드가 있을 때. 화면 프레임 밖에 메모, 변경 이력, 상태 설명 프레임이 있을 때.
- F09-01 | intent-ask-when-ux-notes-and-gui-disagree | Figma 메모, 변경 이력, 와이어프레임이 GUI 화면과 다른 조건, 순서, 문구를 말할 때. 같은 화면이 UX 파일과 GUI 파일에 다르게 그려져 있을 때.
- F09-02 | intent-fill-undrawn-states-with-project-parts | 서버 데이터 목록, 입력, 비동기 동작이 있는 Figma 화면을 구현하거나 설계 문서로 옮길 때. 제외: 서버 데이터, 입력, 비동기 동작이 없는 정적 화면인 경우.
- F09-03 | intent-treat-frame-sizes-and-sample-text-as-samples | Figma 노드의 \`width\`, \`height\`, 좌표를 CSS 값으로 옮길 때. 샘플 문구 길이에 맞춰 칸 폭이나 줄 수를 정할 때. | reviewWith: css/layout-keep-layout-intent-explicit, css/layout-reach-for-intrinsic-sizing-before-breakpoints
- F09-04 | intent-implement-interactions-the-design-implies | Figma에 정렬 아이콘, 펼침 화살표, 정보 아이콘, 링크 색 문구가 있을 때. 행, 카드, 탭처럼 누를 수 있어 보이는 요소를 구현할 때.
- F10-01 | source-map-figma-values-to-project-tokens | Figma에서 읽은 간격, 모서리 반경, 색, 글꼴 값을 스타일에 넣을 때. \`get\_variable\_defs\`를 부르거나 그 응답과 \`get\_design\_context\`가 준 변수 이름을 코드에 옮길 때. | reviewWith: css/values-fall-back-only-outside-core-tokens, css/values-tokenize-repeated-visual-values
- F10-02 | source-separate-static-copy-from-server-data | Figma 텍스트 노드의 글자를 JSX나 문구 리소스에 넣을 때. 화면의 숫자, 이름, 날짜가 샘플인지 고정 문구인지 가려야 할 때.
- F11-01 | transcription-reuse-project-components-before-new-markup | Figma 화면의 표, 탭, 페이지네이션, 입력, 버튼, 배지를 마크업으로 새로 만들 때. \`get\_design\_context\`가 준 JSX를 화면 파일에 옮길 때. | reviewWith: css/ownership-change-other-owners-through-their-api, react/strategy-avoid-boolean-prop-proliferation
- F11-02 | transcription-do-not-copy-layer-structure | \`get\_design\_context\` 출력의 JSX, \`className\`, 인라인 SVG를 파일에 옮길 때. \`get\_design\_context\` 출력의 절대 좌표, \`rotate\`를 옮길 때. | reviewWith: css/composition-do-not-add-wrapper-elements-for-styling, css/composition-do-not-style-through-the-style-attribute
- F11-03 | transcription-use-existing-icons-or-downloaded-assets | Figma의 아이콘, 로고, 이미지를 코드에 넣을 때. 코드에 \`figma.com/api/mcp/asset\` URL이나 손으로 쓴 SVG \`path\`가 들어갈 때.
- F11-04 | transcription-carry-library-properties-into-props-and-stories | 라이브러리 master를 기준으로 \`ui\`, \`widget\` 부품을 구현하거나 고칠 때. 부품의 프롭이나 story 이름을 Figma 속성에 맞출 때.
- F12-01 | verify-measure-rendered-values-before-claiming-parity | Figma 기준 구현이나 수정을 마무리하거나 완료로 보고할 때. Figma 라이브러리 파일을 고친 작업을 마무리하거나 완료로 보고할 때. | completionGate
- F12-02 | verify-report-reads-decisions-and-gaps | Figma 기준 작업의 결과를 보고하거나 넘겨줄 때. | completionGate