---
title: Place Owner-only Constants in the Owner `_constant` Folder
titleKo: 한 소유자의 여러 파일이 쓰는 상수는 소유자 `_constant` 폴더에 둡니다
impact: HIGH
impactDescription: 소유자 전용 상수를 함께 관리하고 파일 이름과 상수 이름에서 소유자 표현을 반복하지 않습니다
appliesWhen:
  - 한 소유자의 상수나 선언형 계약을 추가하거나 옮길 때
  - 파일 위쪽, 소유자 `_constant`, 루트 `constant` 사이에서 상수 위치를 바꿀 때
requiresSelected: naming-use-consistent-file-and-symbol-naming
reviewWith: naming-place-project-constants-in-the-root-constant-folder
tags: naming, constant
---

## Place Owner-only Constants in the Owner `_constant` Folder

**Impact: HIGH (소유자 전용 상수를 함께 관리하고 파일 이름과 상수 이름에서 소유자 표현을 반복하지 않습니다)**

한 소유자 안의 파일 둘 이상이 쓰는 상수는 그 소유자 아래 `_constant`에 둡니다.
한 파일만 쓰는 상수는 `_constant`로 떼지 않고 그 파일 위쪽에 둡니다.
루트와 소유자를 구분하는 기준은 `naming-place-project-constants-in-the-root-constant-folder`를 따릅니다.

| 대상 | 배치, 이름 |
| --- | --- |
| 한 파일만 쓰는 상수 | 그 파일 위쪽에 `<주제>_` 접두사로 선언하고 내보내지 않습니다 |
| 같은 소유자의 파일 둘 이상이 쓰는 상수 | `_constant/<주제>.ts`에 `<주제>_` 접두사로 선언합니다. 두 번째 파일이 쓰게 될 때 옮깁니다 |
| 소유자 문맥 | 폴더 경로가 이미 드러내므로 이름에 반복하지 않습니다. `page/product-detail/_constant/legend.ts`에는 `legend_hit_tolerance_px`를 둡니다 |
| 파서 묶음, 스키마 등 함수를 담은 계약 | 한 파일만 쓰면 그 파일 위쪽에 두고 둘 이상이 쓰면 같은 `_constant`에 계약별 파일로 둡니다 |
| 소유자를 지워도 남는 값 | 루트 상수 규칙에 따라 옮깁니다 |

계약 파일의 이름은 `naming-use-consistent-file-and-symbol-naming`을 따릅니다.
소유자 아래에 `config`, `constants`, `common` 폴더는 만들지 않습니다.

**Incorrect 1 (한 파일만 쓰는 상수를 `_constant` 파일로 뗍니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/01-incorrect.ts

**Correct 1 (한 파일만 쓰는 상수는 쓰는 파일 위쪽에 둡니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/02-correct.ts

**Incorrect 2 (한 소유자의 파일 둘이 쓰는 상수를 루트로 올립니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/03-incorrect.ts

**Correct 2 (두 번째 파일이 쓰게 된 상수는 소유자 아래 주제 파일로 옮깁니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/04-correct.ts

**Incorrect 3 (소유자 이름으로 지은 파일 하나에 주제가 다른 상수를 모읍니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/05-incorrect.ts

**Correct 3 (주제마다 파일을 나눕니다):**

<<< ../examples/naming-place-owner-constants-in-the-owner-constant-folder/06-correct.ts
