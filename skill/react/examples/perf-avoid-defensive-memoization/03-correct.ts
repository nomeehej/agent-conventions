// 예외: 열 2,000개 변환이 입력마다 45ms로 측정되어 같은 columns의 반복 계산을 생략한다.
const columns = useMemo(() => buildTableColumns(props.columns), [props.columns]);
