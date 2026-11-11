# Sign Dated Notes and Remove Them When Settled

**Impact: MEDIUM (노트가 진행 중인 소통만 담아 누가 언제 남겼는지 알고 끝난 일은 Changelog 한 줄로 남습니다)**

노란 노트에는 작성자와 날짜(`YYYY-MM-DD`)를 답니다. 작성자를 모르면 `unknown`으로 둡니다.
본문은 인사 없이 바로 시작하고 짧은 명사형으로 끝냅니다.
내용이 반영되거나 풀리면 노트를 지우고 `¶ Changelog`의 `다음` 칸에 한 줄을 남깁니다.

| 노트 상태 | 처리 |
| --- | --- |
| 진행 중 | 그대로 둡니다 |
| 반영됨. master나 코드가 바뀜 | 노트를 지우고 Changelog에 한 줄을 남깁니다 |
| 풀림. 바꾸지 않기로 함 | 노트를 지웁니다. 정한 것이 있으면 Changelog에 `Docs` 한 줄 |

Changelog 줄의 형식은 `release-log-changes-only-in-the-changelog-page`가 정합니다.

**Incorrect 1 (작성자와 날짜가 없고 반영된 뒤에도 노트가 남습니다):**

```markdown
❖ checkbox
  _note / dated   안녕하세요! checkbox-button을 checkbox에 합쳤어요. 확인 부탁드려요~
                  작성자 (비어 있음)  날짜 (비어 있음)

코드가 합쳐진 뒤에도 노트가 그대로 남음
```

**Correct 1 (작성자와 날짜를 달고 반영되면 노트를 지운 뒤 Changelog 한 줄로 남깁니다):**

```markdown
❖ checkbox
  _note / dated   checkbox-button을 Label 속성으로 합침. 코드도 하나로 합칠지 확인 요청
                  unknown 2026-11-06

코드가 합쳐진 뒤
  ❖ checkbox      노트 지움
  ¶ Changelog     다음  checkbox  Docs  checkbox-button 합침이 코드에 반영됨, 노트 지움
```

> 나머지 예시와 예외는 [full rule](../rules/05-02-note-sign-dated-notes-and-remove-them-when-settled.md)에 있습니다.
