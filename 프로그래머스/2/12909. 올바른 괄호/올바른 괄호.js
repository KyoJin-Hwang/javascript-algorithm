function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === '(') {
      stack.push(char); // 여는 괄호면 스택에 넣기
    } else { // char === ')'
      if (stack.length === 0) {
        // 닫는 괄호인데 스택이 비어있으면 올바르지 않음
        return false;
      }
      stack.pop(); // 짝 맞춰서 여는 괄호 하나 빼기
    }
  }

  // 모든 문자열을 다 처리한 후 스택이 비어 있어야 올바른 괄호
  return stack.length === 0;
}