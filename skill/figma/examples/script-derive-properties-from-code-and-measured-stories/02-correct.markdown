# select

## 코드

- `src/component/ui/select/select.tsx`, 프롭 `size`(small, medium), `value`, `options`
- 사용처 7곳, 모두 `size="medium"`

## 측정

| story | 높이 | 테두리 | 글자 |
| --- | --- | --- | --- |
| Placeholder | 34 | #ced4da | 14/400 #adb5bd |
| Filled | 34 | #ced4da | 14/400 #495057 |
| OpenWithManyOptions | 34 | #2e3f5e | 14/400 #495057, 메뉴 최대 높이 320 |

## 속성 설계

- 코드에 있는 것: Size(Small, Medium) × Value(Placeholder, Filled), State Default
- 제안: Size Large, State Hover, Focus, Disabled
- variant 3 × 2 × 4 = 24, 열린 메뉴는 예시 칸

## 토큰 대응

- #ced4da → border/control, #2e3f5e → border/primary-active, #495057 → text/normal, #adb5bd → text/placeholder
- NEW color/border/hover = cool-gray/20 [STROKE_COLOR] — 제안 Hover 테두리

## story → Figma

- Placeholder → Size=Medium, Value=Placeholder, State=Default
- OpenWithManyOptions → 예시 칸 OpenWithManyOptions
