// 결제 위젯은 마운트 시 금액을 한 번만 조회. 재조회 중 렌더하면 옛 금액으로 초기화
if (responseOrderAmountSuspense.isFetching) {
	return <OrderAmountLoadingScreen />;
}

return <PaymentWidgetSection amount={responseOrderAmountSuspense.data.confirmedAmount} />;
