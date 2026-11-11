# Write Only What the Canvas Cannot Show

**Impact: MEDIUM (노트가 드물어 남은 노트는 읽히고 그림이 바뀌어도 노트와 그림이 어긋나지 않습니다)**

노트는 Figma만 봐서는 모르는 기획 변경, 서로 알릴 것, 고민에만 답니다.
구조, 속성 뜻, 크기, 색처럼 캔버스에 보이는 것은 쓰지 않습니다. 그림이 바뀌면 노트만 남아 어긋납니다.
코드 이야기와 Dev Mode 주석도 쓰지 않습니다. 코드의 지금 모습은 Storybook이 보여 줍니다.

| 노트 | 쓰는 때 | 모양 |
| --- | --- | --- |
| 노란 노트 `_note / dated` | 시점이 있는 소통. 기획 변경, 알릴 것, 고민 | 본문, 작성자, 날짜 |
| 회색 노트 `_note` | 날짜 없이 오래 가는 약속. 드물게 씁니다 | 본문 |

노트는 부품 오른쪽에 두고 story마다 달지 않습니다.
고민은 오래 두지 않고 정해서 master에 반영합니다.

**Incorrect 1 (캔버스에 보이는 구조와 코드 이야기를 노트로 적습니다):**

```markdown
❖ select
  _note   select는 Size 셋, State 여섯입니다. 높이는 34이고 테두리는 border/control입니다.
  _note   코드: src/component/ui/select/select.tsx. MUI Select를 감싸고 value는 string입니다.
```

**Correct 1 (Figma만 봐서는 모르는 기획 변경 하나만 노트로 남깁니다):**

```markdown
❖ select
  _note / dated   주문 목록 2차에서 상태 필터가 여러 개 선택으로 바뀜. 다중 선택 모양 정하기 전
                  기획팀 2026-11-10
```

> 나머지 예시와 예외는 [full rule](../rules/05-01-note-write-only-what-the-canvas-cannot-show.md)에 있습니다.
