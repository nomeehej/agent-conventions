# Expose Only Compound Parts the Consumer Assembles

**Impact: MEDIUM (내부 구조를 공개 계약과 분리해 이후 변경 범위를 줄입니다)**

합성 컴포넌트의 공개 부품은 사용처가 직접 조립해야 하는 영역만 엽니다.

| 영역 | 공개 여부 |
| --- | --- |
| 사용처가 자기 내용을 끼우는 자리(틀, 머리, 본문처럼 위치와 의미가 있는 자리) | 부품 하나로 공개합니다. 부품 자신이 `className`을 얹는 얇은 래퍼여도 같습니다 |
| 공용 컨텍스트나 동작을 직접 쓰는 자리 | 공개합니다 |
| 부품 안쪽에서 자기 DOM을 꾸미기만 하는 래퍼, 사용처가 내용을 넣지 않는 내부 구조 | 공개하지 않습니다 |
| 여백 보정용 DOM | `css/composition-do-not-add-wrapper-elements-for-styling`에 따라 만들지 않습니다 |

공개 부품은 같은 폴더의 자기 파일에 두고 진입 파일이 묶음 객체 하나로 내보냅니다.
폴더 밖에서는 이 묶음 객체로만 부품을 쓰고 부품 파일을 직접 가져오지 않습니다.
가져오기 경계는 `ownership-keep-component-imports-flowing-downward`를 따릅니다.

참고: [Hyrum의 법칙](https://www.hyrumslaw.com/).

**Incorrect 1 (내부 구조를 전부 공개해 계약으로 굳힙니다):**

```tsx
// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/panel-body";
import {PanelHeader} from "@/component/ui/panel/panel-header";
import {PanelHeaderInner} from "@/component/ui/panel/panel-header-inner";
import {PanelRoot} from "@/component/ui/panel/panel-root";
import {PanelSpacer} from "@/component/ui/panel/panel-spacer";

// 사용처가 끼워 넣을 자리가 없는 래퍼와 여백 보정용 DOM까지 이름이 붙어 노출
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	HeaderInner: PanelHeaderInner,
	Spacer: PanelSpacer,
	Body: PanelBody,
} as const;
```

**Correct 1 (조립에 필요한 것만 공개합니다):**

```tsx
// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/panel-body";
import {PanelHeader} from "@/component/ui/panel/panel-header";
import {PanelRoot} from "@/component/ui/panel/panel-root";

// 사용처가 내용을 끼우는 Root, Header, Body만 공개, 안쪽 래퍼는 각 부품의 JSX로 둠
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Body: PanelBody,
} as const;
```

> 나머지 예시와 예외는 [full rule](../rules/04-02-strategy-expose-only-assembled-compound-parts.md)에 있습니다.
