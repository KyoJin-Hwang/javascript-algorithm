const solution = (array, height) => {

 return array.filter(tall => tall > height).length
}

// 설명
// filter 배열함수로 배열을 순회하며 머쓱이의 키보다 큰것들만 배열에서 반환하여 길이를 return 해준다. 