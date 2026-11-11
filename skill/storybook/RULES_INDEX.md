# Storybook 컨벤션 Rule Index

- Skill: `storybook`
- Routing digest: `sha256:0a5180af33963842c96b843e042184193b9831e5fa2eb635eb74dfc3544b55e5`

## Direct Companions

- `css` (`conditional`) · Applies when: story 문맥 CSS, 전역 스타일시트, 클래스 계약을 추가하거나 수정한다. · [SKILL.md](../css/SKILL.md) · [RULES_INDEX.md](../css/RULES_INDEX.md)
- `react` (`conditional`) · Applies when: 데코레이터, \`render\` 함수, preview처럼 story가 렌더하는 JSX를 추가하거나 수정한다. · [SKILL.md](../react/SKILL.md) · [RULES_INDEX.md](../react/RULES_INDEX.md)
- `testing` (`conditional`) · Applies when: \`play\` 단언, 접근성 검사 설정, Vitest의 \`storybook\` project를 추가하거나 수정한다. · [SKILL.md](../testing/SKILL.md) · [RULES_INDEX.md](../testing/RULES_INDEX.md)
- `typescript` (`required`) · [SKILL.md](../typescript/SKILL.md) · [RULES_INDEX.md](../typescript/RULES_INDEX.md)

## Local Rules

- S01-01 | setup-collect-only-component-stories | \`.storybook/main.ts\`의 \`stories\`, \`addons\`, \`framework\`, \`core\`를 추가하거나 바꿀 때. Storybook 패키지나 addon을 설치, 업그레이드하거나 \`storybook init\`, \`storybook add\`를 실행할 때. | reviewWith: testing/component-fail-stories-on-accessibility-violations
- S01-02 | setup-wrap-every-story-in-the-app-providers | \`.storybook/preview.tsx\`의 데코레이터, 전역 CSS, \`parameters.layout\`을 추가하거나 바꿀 때. story나 meta에 provider를 감싸는 데코레이터를 넣으려 할 때.
- S01-03 | setup-keep-env-and-api-addresses-out-of-the-build | \`.storybook/vite.config.ts\`, \`viteFinal\`, \`framework.options.builder\` 설정을 추가하거나 바꿀 때. \`.storybook/preview.tsx\`에서 모듈을 대체하거나 story에 env 값, API 주소를 넘기려 할 때.
- S01-04 | setup-sort-the-sidebar-like-the-figma-file | \`.storybook/preview.tsx\`의 \`parameters.options.storySort\`를 추가하거나 바꿀 때. story 파일 안에서 story export의 차례를 바꾸거나 새 story를 끼워 넣을 때.
- S02-01 | file-keep-one-story-file-next-to-each-component | \`\*.stories.tsx\` 파일을 새로 만들거나 옮기거나 이름을 바꿀 때. story 파일에 다른 부품의 story나 다른 파일과 함께 쓰는 story 도우미를 넣으려 할 때.
- S02-02 | file-title-stories-with-the-figma-page-name | meta의 \`title\`을 쓰거나 바꿀 때. 부품 폴더 이름이나 Figma 부품 페이지 이름을 바꿀 때.
- S02-03 | file-name-stories-after-figma-property-values | story export를 추가하거나 이름을 바꿀 때. Figma 속성 값이나 \`examples\` 칸 이름이 바뀌었을 때.
- S03-01 | story-type-meta-with-satisfies-and-put-defaults-in-args | story 파일의 meta, \`Story\` 타입, meta나 story의 \`args\`를 추가하거나 바꿀 때. 콜백 프롭에 넘길 함수를 story에 둘 때.
- S03-02 | story-reach-states-through-args-then-before-each-then-play | story의 상태를 \`args\`, \`beforeEach\`, \`play\`, \`loaders\`, 네트워크 mock 가운데 무엇으로 만들지 정하거나 바꿀 때. 프롭으로 열 수 없는 상태\(열린 팝업, 입력 뒤 모습\)를 story로 재현할 때. | reviewWith: testing/component-assert-the-state-each-play-reaches, testing/data-control-time-randomness-and-environment
- S03-03 | story-cover-every-figma-value-once | 부품에 프롭이나 상태를 더하거나 Figma 부품에 속성 값이 생겼을 때. story를 새로 쓰거나 조합 story를 더하거나 지울 때.
- S03-04 | story-reproduce-parent-context-with-copied-values | story에 폭, 여백, 배경을 주는 데코레이터나 story 문맥 CSS를 추가하거나 바꿀 때. 부모 폭을 채우거나 부모 CSS에 따라 모양이 바뀌는 부품의 story를 쓸 때.
- S04-01 | design-link-each-story-to-its-figma-node | story를 추가하거나 story가 보여 주는 Figma 노드가 바뀌었을 때. story나 meta의 \`parameters.design\`을 추가하거나 바꿀 때.
- S04-02 | design-regenerate-links-from-the-library-build | Figma 라이브러리 publish로 variant나 \`examples\` 칸 노드가 바뀌었을 때. story export 이름이나 \`title\`을 바꾸거나 story 파일의 \`parameters.design\` URL을 고치려 할 때.
- S04-03 | design-map-figma-properties-to-props-in-the-meta-box | Figma 속성 이름이나 값과 다른 프롭으로 story를 쓸 때. 부품 프롭이나 Figma 속성의 이름, 값을 바꿀 때.
- S05-01 | docs-leave-usage-guidance-to-the-figma-library | MDX 문서, \`autodocs\` 태그, \`parameters.docs\`를 추가하거나 바꿀 때. story 파일에 사용 지침이나 디자인 의도를 적으려 할 때.
- S05-02 | docs-show-the-applied-library-version | Figma 라이브러리의 새 버전을 코드와 story에 반영할 때. \`.storybook/manager.ts\`를 추가하거나 바꾸거나 Storybook 빌드를 공유할 때.
- S06-01 | verify-build-storybook-and-run-story-tests | story, \`.storybook/\` 설정, design 링크 작업을 마무리하거나 완료로 보고할 때. | completionGate | reviewWith: testing/component-fail-stories-on-accessibility-violations, testing/component-run-every-story-as-a-test