// 결제 위젯은 마운트 때 금액을 한 번만 읽어 재조회 중에 그리면 옛 금액으로 초기화된다.
if (responseOrderAmountSuspense.isFetching) return <OrderAmountLoadingScreen />;

return <PaymentWidgetSection amount={responseOrderAmountSuspense.data.confirmedAmount} />;
