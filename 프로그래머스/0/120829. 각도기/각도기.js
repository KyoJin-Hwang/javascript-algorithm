const solution = (angle) => angle <= 90 ? 
      angle === 90 ? 2 : 1 
        : 
      angle === 180 ? 4 : 3 

// filter 이용방법
//  const solution = (angle) => {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
