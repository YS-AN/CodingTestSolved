//41.직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    //입력받은 값 처리
    input = line.split(' ');
}).on('close', function () {
    //결과 값 출력
    print(Number(input[0]));
});

function print(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
}

//42.순서쌍의 개수
function sol_GetFactors(n) {
    var factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }

    var len = factors.length;
    return factors[len - 1] * factors[len - 1] == n ? (len - 1) * 2 + 1 : len * 2;
}

//43.숨어있는 숫자의 덧셈 (1)
function sol_HideAdd1(my_string) {
    var answer = 0;
    [...my_string].map(item => isNaN(item) ? answer += 0 : answer += parseInt(item));
    return answer;
}



//44.숨어있는 숫자의 덧셈 (2)
function sol_HideAdd2(my_string) {
    var answer = 0;
    [...my_string.replace(/[a-zA-Z]/g, ' ').split(' ')].map(x =>
        answer += (x != '' ? parseInt(x) : 0));

    return answer;
}