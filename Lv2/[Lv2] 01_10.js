//01.최댓값과 최솟값
function sol_MaxMin(s) {
    var arr = s.split(' ');
    return Math.min(...arr) + " " + Math.max(...arr);
}

//02.JadenCase 문자열 만들기
function sol_MakeJadenCase(s) {
    return s.split(' ').map(item => [...item].map((item, index) => chkCharCase(item, index)).join('')).join(' ');

    //한줄로 깔끔하게 정리 가능하네..! 
    //return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
function chkCharCase(val, index) {
    return index == 0 ? val.toUpperCase() : val.toLowerCase();
}


