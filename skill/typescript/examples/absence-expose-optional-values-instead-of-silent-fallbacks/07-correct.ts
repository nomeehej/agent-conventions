// 주문이 없는 상태는 Map에 키가 없고 그 건수는 0이다.
const statusCounts = editable_order_statuses.map((status) => ({status, count: orderCountByStatus.get(status) ?? 0}));
