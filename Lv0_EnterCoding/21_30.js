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

//26.편지
function sol_GetLetterLen(message) {
    return [...message].length * 2;
}

//27.옹알이
function sol_SpeckCount(babbling) {
    let cnt = 0;
    let spks = ["aya", "ye", "woo", "ma"]
    babbling.forEach((item) => {
        spks.map(x => item = item.replace(x, ' '));
        cnt += (item.replaceAll(' ', '').length == 0 ? 1 : 0);
    });

    return cnt;
}

//28.OX퀴즈
//eval() 함수를 쓰면 수식 그대로 계산을 해주긴 하는데 지양해야 함
function sol_OXGame(quiz) {
    let arr = [];

    quiz.forEach(item => {
        var val = item.split(' ').map((item, index) => index % 2 == 0 ? parseInt(item) : item);

        (val[1] == '-') ?
            arr.push((val[0] - val[2] == val[4]) ? "O" : "X") :
            arr.push((val[0] + val[2] == val[4]) ? "O" : "X")
    });
    return arr;
}