const solution = (angle) => angle <= 90 ? 
      angle === 90 ? 2 : 1 
        : 
      angle === 180 ? 4 : 3 

// 설명
// 1. 둔각보다 작은것을 생각해 angle <= 90 보다 낮은것을 삼항연산자 맨앞으로 해준다. 
// 1-1. 그리고 90과 같을때는 직각 2 , 그 이후로 나머지는 90 보다 아래인 89 아래의 숫자이기 때문에 
//    예각 1
// 2. 90 보다 큰 나머지는 둔각과 평각 
// 2-1. 평각을 true 값으로 4 false 값은 둔각 3 



// filter 이용방법
//  const solution = (angle) => {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }

