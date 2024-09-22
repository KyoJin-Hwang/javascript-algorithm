function solution(n, numlist) {
    let answer = [];
    answer = numlist.filter((item)=> item % n === 0)
    return answer;
}

// 설명 
// filter 함수를 활용하여 numlist 를 순회하여 나눈 나머지가 0 인것만 
// answer 빈배열에 넣어 return 한다.
