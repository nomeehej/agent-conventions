## Checks

```sh
# scripts/check-docs.sh
npm run docs:build
grep -ohE "^### [DQBR][0-9]+$|^\| [DQBR][0-9]+ \|" content/public/questions.md | grep -oE "[DQBR][0-9]+" | sort | uniq -d
awk '/^### /{if (opt && n != 1) print id; id = $2; opt = 0; n = 0} /^\| [A-C]/{opt = 1} /★/{n++} END{if (opt && n != 1) print id}' content/public/questions.md
grep -rnE "[가-힣]+다\.?$" content/public --include="*.md"
grep -c "^### [QBR][0-9]" content/public/questions.md
grep -h "^열린 카드" content/public/screen/*.md
```

- build: 29 files, 경고 0
- 번호 중복: 없음
- 추천 하나: 위반 없음
- 서술 어미: 0
- 열린 카드 수: `questions.md` 4, 화면 문서 합 4
- 눈 확인: Capture 절 밝음, 어두움, 390 캡처 셋
