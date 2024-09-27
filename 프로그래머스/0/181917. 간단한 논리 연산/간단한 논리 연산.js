// ∨ : 양쪽 다 F일 경우에만 F이므로 논리연산자(OR) ||
// ∧ : 양쪽 다 T일 경우에만 T이므로 논리연산자(AND) &&

function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4)
}