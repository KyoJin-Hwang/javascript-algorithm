function solution(numbers) {
    numbers.sort((a, b) => a - b); // 오름차순 정렬

    const n = numbers.length;
    const max1 = numbers[n - 1] * numbers[n - 2]; // 가장 큰 수 2개
    const max2 = numbers[0] * numbers[1];         // 가장 작은 수 2개

    return Math.max(max1, max2);
}