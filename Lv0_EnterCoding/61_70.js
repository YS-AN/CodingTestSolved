//61.가장 큰 수 찾기
function sol_FindMaxNum(array) {
    var answer = [];
    answer.push(Math.max(...array));
    answer.push(array.findIndex(x => x == answer[0]));
    return answer;
}

//62.숫자 찾기
function sol_FindNum(num, k) {
    var answer = [...num.toString()].findIndex(x => x == k);
    return answer == -1 ? answer : answer + 1;
}

//63.2차원으로 만들기
function sol_Make2D(num_list, n) {
    //내 풀이
    //return Array.from({ length: (num_list.length/n) }, () => new Array(n).fill(0)).map((arr, i) => arr.map((x, j) => num_list[i*n+j]));

    //다른 사람 풀이 : 훨씬 간단
    //1.굳이 모든 배열의 길이를 선언해줄 필요는 없음 - 하위는 선언필요 없음
    //2.배열 메소드 활용 방식 확인하기
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));
}

//64.잘라서 배열로 저장하기
function sol_CutArr(my_str, n) {
    var arr = [...my_str];
    return Array(Math.ceil(arr.length / n)).fill("").map(x => arr.splice(0, n).join(''))
}

//65.컨트롤 제트
function sol_CtrlZ(s) {
    var arr = s.split(' ');
    return arr.map((x, i) => (i > 0 && x == "Z") ? arr[i - 1] * -1 : Number(x)).reduce((acc, val) => acc + val);
}

//66.이진수 더하기
function sol_AddBinary(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

//67.한 번만 등장한 문자
function sol_JustOne(s) {
    return [...s].filter(item => [...s.matchAll(new RegExp(item, 'g'))].length == 1).sort().join('');
}

//68.7의 개수
function sol_count7(array) {
    return ([...array.join('')].filter(x => x == 7)).length
}
