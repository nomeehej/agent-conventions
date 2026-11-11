# Keep Placeholder Copy in UI Masters

**Impact: MEDIUM (범용 부품에 업무 문구가 박히지 않아 어느 화면에 놓아도 바꿀 글자가 바로 보입니다)**

`ui` master 안 글자는 더미로 둡니다. `버튼`, `옵션 1`, `입력하세요`, `제목`, `본문 텍스트`.
`닫기`, `취소`, `적용`처럼 어디서나 쓰는 동작 이름은 그대로 둡니다.
업무 문구는 `widget` master와 예시 frame에만 씁니다.
`widget`은 제품 화면의 조각이라 문구가 곧 기획 내용입니다.

**Incorrect 1 (`ui` master에 주문 화면의 업무 문구가 들어갑니다):**

```markdown
button          Label  "주문 취소"
select          옵션   "배송 준비", "배송 중", "배송 완료"
text-field      Value  "홍길동"
```

**Correct 1 (`ui` master는 더미 글자, `widget` master는 업무 문구를 씁니다):**

```markdown
button          Label  "버튼"
select          옵션   "옵션 1", "옵션 2", "옵션 3"
text-field      Value  "입력값"
profile-dialog  제목   "프로필 수정", 버튼 "취소", "저장"
```

> 나머지 예시와 예외는 [full rule](../rules/03-05-property-keep-placeholder-copy-in-ui-masters.md)에 있습니다.
