function solution(wallpaper) {
    // x1, y1, x2, y2 : 작은x,y 가장큰x,y
    let [x1, y1, x2, y2] = new Array(4).fill(0);
    
    // 가장 큰값들을 기준으로 min 값을 구하기 위해서
    x1 = wallpaper.length; 
    y1 = wallpaper[0].length; 
    

    wallpaper.forEach((paper, i) => {
        if (paper.includes('#')) {
            x1 = Math.min(x1, i); 
            y1 = Math.min(y1, paper.indexOf('#')); 
            x2 = Math.max(x2, i);
            y2 = Math.max(y2, paper.lastIndexOf('#'));
        }
    });

    // 인덱스 0부터시작해서 우측이랑 아래쪽에 한개 더추가해줘야함 그래야 직사각형
    return [x1, y1, x2 + 1, y2 + 1];
}