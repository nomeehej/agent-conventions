# Describe Masters with Purpose and Code Path

**Impact: MEDIUM (화면 디자이너는 부품을 고를 때 용도를, 개발은 Dev Mode에서 코드 위치를 바로 읽습니다)**

master 설명은 용도 한 줄과 코드 경로 한 줄로 씁니다.
속성 뜻, 크기, 변경 이력은 설명에 쓰지 않습니다.
코드에 없는 상태는 그 variant 설명을 `코드에 없는 제안.`으로 시작합니다.

| 목차 카드 | 상태 말 |
| --- | --- |
| master 하나 | `N variants` |
| master 둘 이상 | `master N` |
| 다른 master에 합친 코드 부품 | `합침 → <부품>` |
| 예시로 옮긴 코드 부품 | `예시 → ❖ <부품>` |
| 그릴 화면이 없는 코드 부품 | `코드만` |
| 아직 그리지 않은 부품 | `준비 중` |

**Incorrect 1 (설명에 구현 세부와 이력을 늘어놓고 코드 경로가 없습니다):**

```markdown
date-picker 설명
  날짜를 고르는 컴포넌트입니다. MUI DatePicker를 감싸며 value는 YYYY-MM-DD 문자열이고
  minDate, maxDate를 받습니다. 11-05 Error 추가, 11-06 Size 정리.

# ui 목차 카드
  date-picker      완료!
```

**Correct 1 (용도와 코드 경로만 쓰고 제안 variant와 목차 카드에 정해진 말을 씁니다):**

```markdown
date-picker 설명
  날짜 하나를 고르는 입력
  src/component/ui/date-picker/date-picker.tsx

date-picker / Size=Medium, Value=Filled, State=Hover 설명
  코드에 없는 제안. select :hover 테두리와 같은 border/hover

# ui 목차 카드
  date-picker      30 variants
  checkbox-button  합침 → checkbox
```

> 나머지 예시와 예외는 [full rule](../rules/05-03-note-describe-masters-with-purpose-and-code-path.md)에 있습니다.
