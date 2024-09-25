function solution(names) {
    return names.filter((v, idx) => idx % 5 === 0);
}