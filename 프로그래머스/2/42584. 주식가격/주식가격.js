function solution(prices) {
	const answer = prices.map((_, i) => {
		let count = 0;
		// 가격이 떨어지지 않은 기간을 저장할 변수
 
		// 현재 시점 i 이후의 가격들을 비교하기 위한 반복문
		for (let j = i + 1; j < prices.length; j++) {
			count++;
			// 가격이 떨어지지 않은 기간을 증가시킴
 
			// 현재 시점의 가격이 이후 시점의 가격보다 크면 (가격이 떨어지면)
			if (prices[i] > prices[j]) {
				break;
				// 반복문 종료
			}
		}
		return count;
		// 가격이 떨어지지 않은 기간을 반환
	});
 
	return answer;
	// 결과 배열 반환
}