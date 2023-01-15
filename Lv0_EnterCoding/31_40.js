//31.배열 자르기
function sol_CutArray(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}

//32.삼각형의 완성조건(1)
function sol_MakeTriangle1(sides) {
    sides = sides.sort((a, b) => b - a);
    return (sides[0] < sides[1] + sides[2] ? 1 : 2);
}

//33.삼각형의 완성조건(2)
function sol_MakeTriangle2(sides) {
    let cnt1 = Math.min(...sides);
    let cnt2 = (sides.reduce((sum, val) => sum + val) - Math.max(...sides) - 1);
    return cnt1 + cnt2;
}

//33_1.삼각형의 완성조건(2)
function sol_MakeTriangle2(sides) {
    return Math.min(...sides) * 2 - 1;
}

//34.영어가 싫어요
function sol_HateEng(numbers) {
    let engNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    engNums.map((item, i) => { numbers = numbers.replaceAll(item, i); })
    return Number(numbers);
}

//35.공던지기
function solution(numbers, k) {
    let len = numbers.length;
    let curIndex = (len % k == 0 ? len : len % k) - 1;
    return len % 2 == 0 ? numbers[curIndex] : 0;
}