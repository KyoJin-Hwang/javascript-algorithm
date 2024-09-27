function solution(arr) {
    // 2의 정수 거듭제곱에 1도 포함되므로 길이가 1일때는 그냥 반환 할 것 
    if(arr.length === 1) return arr
    
    // 배열의 길이와 2의 정수 거듭제곱 조건을 더해 0을 추가해줄 것
    for(let i = 1; i < arr.length; i++){
        let num = 2 ** i;
        if(num >= arr.length){
            for(let j = arr.length; j < num; j++){
                arr.push(0)
            }
            return arr
        }  
    }
}