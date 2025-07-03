function solution(phone_number) {
  const lastFour = phone_number.slice(-4); 
  const stars = '*'.repeat(phone_number.length - 4);
  return stars + lastFour;
}