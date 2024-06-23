function solution(array) {
    array.sort((a, b) => a - b);
    
    return array[Math.floor(array.length / 2)];
}

// 설명 
// 1. sort a-b로 오름차순 정렬 
// 2. 정렬된 배열에 대괄호 안에서 배열의 길이를 2로 나눈 후 소수점 이하를 버리고 배열의 중간 인덱스를 계산한다.

// ex) 1. array -> sort로 오름차순 된 array 
//     2. array[] idx 접근 
//     3. array[Math.floor(array.length / 2)]
//     3-1. [1,2,3][Math.floor(3/2)]
//     3-2. [1,2,3][1]
//     3-3. return 2