//01.둘만의 암호
//https://school.programmers.co.kr/learn/courses/30/lessons/155652
function chkRange(skips, val) {
    addVal = (val.charCodeAt() - 97 + 5) % 26 + 97

    val += skips.filter(x => x >= val && add).length;

    if (val <= maxVal) {
        return val;
    }

    val = maxVal < val ? val - maxVal + minVal : val;


    return chkRange(skips, val, val);
}

function solution(s, skip, index) {

    let maxVal = 'z'.charCodeAt();

    var skips = [...skip].map(x => x.charCodeAt());


    var strs = [...s].map(x => (x.charCodeAt() - 97 + 5) % 26 + 97);
    console.log(strs)

    return strs.map(x => String.fromCharCode(x));
}

