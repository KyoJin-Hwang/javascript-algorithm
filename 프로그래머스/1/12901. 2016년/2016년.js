function solution(a, b) {
    var day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date('2016-' + a + '-' + b);
    return day[date.getDay()];
}