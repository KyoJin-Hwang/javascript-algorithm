function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([a, b]) => {
    const [w, h] = a > b ? [a, b] : [b, a];
     
    maxWidth = Math.max(maxWidth, w);
    maxHeight = Math.max(maxHeight, h);
  });

  return maxWidth * maxHeight;
}