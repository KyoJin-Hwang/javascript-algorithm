function solution(num_list) {
    let even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc+cur, '');
    let odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc+cur, '');
    return Number(even) + Number(odd);
}