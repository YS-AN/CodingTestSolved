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

//03.올바른 괄호
function sol_RightMatch(s) {
    if (s.charAt(0) != "(" || s.charAt(s.length - 1) != ")")
        return false;

    var cnt = 0;
    for (let x of s) {
        cnt = cnt + (x === "(" ? 1 : -1)

        if (cnt < 0)
            break;
    }
    return (cnt == 0);
}

//04.점프와 순간 이동
function solution(n) {
    var ans = 0;

    while (n > 0) {
        if (n % 2 != 0) {
            ans++;
        }
        n = Math.floor(n / 2);
    }
    return ans;
}

//05.숫자의 표현
function solution(n) {
    if (n < 5) {
        return n > 2 ? 2 : 1;
    }

    let maxN = Math.floor(n / 2)
    let min = 1;
    let cnt = 1;

    for (let i = maxN; i > 1; i--) {
        let doubleI = i + i;
        console.log(i, doubleI);
        if (chkConsecutiveNum(i, doubleI + 1, n)) {
            cnt += 1;
            console.log("");
            continue;
        }
        if (chkConsecutiveNum(i, doubleI, n - i)) {
            cnt += 1;
        }

        console.log("");
    }

    return cnt;
}


function chkConsecutiveNum(num, addNum, retNum) {
    let rN = retNum % addNum;

    if (rN == 0) {
        let qN = Math.round(retNum / addNum);
        if (num - qN > 0) {
            console.log(addNum, retNum, rN, qN, addNum * qN, (addNum * qN == retNum))
            return (addNum * qN == retNum);
        }
        return false;
    }

    console.log(addNum, retNum, rN, Math.round(retNum / addNum), "false")
    return false;
}


//06.영어 끝말잇기
function solution(n, words) {
    let len = words.length;
    let num1 = len, num2;

    var duplicatedArr = words.filter((item, index) => words.indexOf(item) != index);

    if (duplicatedArr.length > 0) {
        num1 = words.lastIndexOf(duplicatedArr[0]);
        num1 < 0 ? len : num1;
    }

    for (let i = 0; i < len;) {
        if (words[i].slice(-1) != words[(++i) % len].charAt(0)) {
            num2 = i;
            break;
        }
    }

    var num = num1 > num2 ? num2 : num1;
    var time = num == len ? 0 : Math.round((num + 1) / n) + ((num + 1) % n == 0 ? 0 : 1);
    var player = num % n + 1;
    console.log(num1, num2, num)
    return (num == len ? [0, 0] : [player, time]);
}



//str.charAt(str.length - 1);
solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
