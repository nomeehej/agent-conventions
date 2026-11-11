// .storybook/preview.tsx
import { sb } from "storybook/test";

// [!code ++]
sb.mock(import("@/util/date/get-today"), { spy: true });
