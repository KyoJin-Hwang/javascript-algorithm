function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];

    if (cacheSize === 0) return cities.length * 5;

    for (let city of cities) {
        city = city.toLowerCase();

        const idx = cache.indexOf(city);
        if (idx !== -1) {
            // HIT
            cache.splice(idx, 1); // 기존 값 삭제
            answer += 1;
        } else {
            // MISS
            if (cache.length >= cacheSize) cache.shift();
            answer += 5;
        }

        cache.push(city); // 최신 사용으로 캐시 뒤에 추가
    }

    return answer;
}