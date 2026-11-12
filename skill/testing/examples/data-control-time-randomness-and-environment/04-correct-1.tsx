// .storybook/preview.tsx
import { sb } from "storybook/test";

// 값을 정하지 않은 story는 원래 구현을 쓴다.
// [!code ++]
sb.mock("../src/util/date/get-today.ts", { spy: true });
