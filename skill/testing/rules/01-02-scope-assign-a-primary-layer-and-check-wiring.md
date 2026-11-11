---
title: Assign a Primary Layer and Check Wiring
titleKo: 상세한 경우의 수와 상위 연결 검증을 나눕니다
impact: HIGH
impactDescription: 중복 비용을 줄이면서 함수와 화면 사이의 연결 누락을 검출합니다
appliesWhen:
  - 같은 기능의 unit, component, integration, E2E 테스트 책임을 나누거나 중복을 정리할 때
tags: testing, scope
---

## Assign a Primary Layer and Check Wiring

**Impact: HIGH (중복 비용을 줄이면서 함수와 화면 사이의 연결 누락을 검출합니다)**

상세한 입력 조합은 주된 책임을 가진 층에서 검증하고 상위 층에는 실제 연결을 확인하는 대표 사례를 둡니다.
같은 입력을 쓴다는 이유만으로 서로 다른 계약의 테스트를 삭제하지 않습니다.

날짜 보정 함수는 보정 결과를, 화면 integration 테스트는 URL의 날짜가 실제 입력란에 반영되는 연결을 확인합니다.
함수가 맞아도 바인딩이 틀릴 수 있으므로 두 사례를 유지합니다.
상위 층에서 함수의 전체 경우의 수를 다시 순회하는 대신 연결이 끊겼을 때 실패할 사례를 고릅니다.

| 계약 | 주된 층 |
| --- | --- |
| 부품 하나의 props에 따른 모양, 입력, 키보드와 마우스 조작, 접근성 | component |
| 화면 구역의 응답, URL, 이동 | integration |

같은 상태를 두 층에서 보지 않습니다.
부품의 선택, 열림, 오류 표시는 component에서 단언하고 integration은 구역이 그 부품에 값을 연결했는지만 확인합니다.

참고: [Ham Vocke: 테스트 피라미드의 테스트 중복 피하기](https://martinfowler.com/articles/practical-test-pyramid.html),
[Kent C. Dodds: 테스트 층별 비용과 신뢰](https://kentcdodds.com/blog/write-tests).

**Incorrect 1 (화면에서 함수의 입력 조합을 모두 반복합니다):**

<<< ../examples/scope-assign-a-primary-layer-and-check-wiring/01-incorrect.test.ts

**Correct 1 (화면에서는 URL과 입력란의 연결을 대표 사례로 확인합니다):**

<<< ../examples/scope-assign-a-primary-layer-and-check-wiring/02-correct.test.ts
