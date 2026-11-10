## 옮기기

- 절을 줄째 옮김. 옛 줄 41, 새 판에서 41 전부 한 번씩

## 고치기

```sh
pattern='[a-z-]+\.tsx?:[0-9]+|[0-9a-f]{8}|node-id=[0-9-]+|[DQBR][0-9]+|[0-9]+(급|열|건)|"[^"]+"'
git show HEAD:content/public/screen/orders.md | grep -oE "$pattern" | sort -u > old.txt
grep -oE "$pattern" content/public/screen/orders.md | sort -u > new.txt
comm -23 old.txt new.txt
```

- 빠진 것: `"Index B 익년"` 하나. 10-07 결정으로 일부러 뺌
