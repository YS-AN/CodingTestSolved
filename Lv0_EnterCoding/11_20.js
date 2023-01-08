//11.피자 나눠먹기(3)
function sol_DividePizza3(slice, n) {
    return Math.ceil(n / slice);
}

//12.배열의 평균값
function sol_GetArrAvg(numbers) {
    let sum = numbers.reduce((sum, val) => (sum + val));
    return (sum / numbers.length);
}

//13.나이출력
function sol_GetAge(age) {
    return 2022 - age + 1;
}

//14.각도기
function sol_Protractor(angle) {
    return parseInt((angle / 90)) + (angle <= 90 ? 1 : 2)
}


