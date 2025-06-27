function solution(clothes) {
    const map = new Map();

    // 종류별 의상 개수 세기
    for (const [item, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }

    // 각 종류별로 (입는 개수 + 1) 하고, 곱셈 누적
    let combinations = 1;
    for (const count of map.values()) {
        console.log(count)
        combinations *= (count + 1); // 입지 않는 경우 포함
    }

    return combinations - 1; // 아무것도 안 입는 경우 제외
}