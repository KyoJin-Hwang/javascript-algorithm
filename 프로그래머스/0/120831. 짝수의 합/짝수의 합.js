const solution = (n) => {
    let sum = 0
    for(let i=0; i<=n; i+=2) {
        sum += i
    }
        
    return sum
}

// 설명
// 1. sum 이라는 0을 선언해준다.
// 2. for문으로 i = 0 부터 +=2 로 짝수 가 될 수 있게 2씩 더해준다. 
// 3. sum += i ( 이전의 sum 값과 +=2 된 수를 더해준다.)
// 4. 마지막 for 문끝나고 sum return 해준다. 
