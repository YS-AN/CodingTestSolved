//두 수의 나눗셈
function sol_Division(num1, num2) {
    return parseInt((num1 / num2) * 1000);
}

//숫자 비교
function sol_CompareNumbers(num1, num2) {
    return num1 == num2 ? 1 : -1;
}

//분수의 덧셈
function sol_FractionalAddition(denum1, num1, denum2, num2) {
    let num = num1 * num2;
    let denum = (num1 * denum2) + (num2 * denum1);

    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let gcdNum = gcd(Math.max(denum, num), Math.min(denum, num));

    var answer = [(denum / gcdNum), (num / gcdNum)];
    return answer;
}

//배열 두 배 만들기
function sol_DoubleTheArrayData(numbers) {
    return numbers.map(x => x * 2);
}