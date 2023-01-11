//21.양꼬치
function sol_CalculatePrice(n, k) {
    return (n * 12000) + (k - Math.floor(n / 10)) * 2000;
}

//22.중복된 숫자
function sol_DuplicateNums(array, n) {
    return array.filter((x) => x == n).length;
}

//23.점의 위치 구하기
function sol_GetPointLocation(dot) {
    return (dot[0] * dot[1]) > 0 ? (dot[0] > 0 ? 1 : 3) : (dot[0] > 0 ? 4 : 2);
}

//24.배열 원소의 길이
function sol_GetElementalLength(strlist) {
    return strlist.map((x) => x.length);
}

//25.짝수 홀수 개수
function sol_CountEvenOdd_1(num_list) {
    let evenCnt = num_list.filter((item) => item % 2 == 0).length;
    return [evenCnt, (num_list.length - evenCnt)];
}

//25_1.짝수 홀수 개수
function sol_CountEvenOdd_2(num_list) {
    var answer = [0, 0];
    num_list.forEach(x => answer[x % 2] += 1);
    return answer;
}