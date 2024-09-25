function solution(names) {
    // 5명씩 묶는 그룹이기때문에 filter 를 사용하여 제거 
    return names.filter((v, idx) => idx % 5 === 0);
}