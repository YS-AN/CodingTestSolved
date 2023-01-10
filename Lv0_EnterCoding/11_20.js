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

//15.짝수의 합
function sol_GetEvenSum(n) {
    let num = n % 2 == 0 ? n : n - 1;
    let rptCnt = Math.floor(n / 4);
    let mid = n % 4 > 0 ? (num / 2) % 2 == 0 ? (num / 2) : (num / 2) + 1 : 0;


    return (num + 2) * rptCnt + mid;
}

//16.옷가게 할인
function sol_GetDiscount(price) {
    let payPer = 0.0;
    if (price >= 500000)
        payPer = 0.8;
    else if (price >= 300000)
        payPer = 0.9;
    else if (price >= 100000)
        payPer = 0.95;
    else
        payPer = 1;

    return Math.floor(price * payPer);
}

//17.아이스 아메리카노
function sol_BuyCoffee(money) {
    let buyCnt = ~~(money / 5500);
    return [buyCnt, (money - buyCnt * 5500)]
}

//18.배열 뒤집기
function sol_Reverse(num_list) {
    /* //내가 푼거
    let len = num_list.length;
    return Array(len).fill(0).map((v, i) => v + num_list[--len]);
    */
    //배열 뒤집어주는 메소드 : reverse
    return num_list.reverse();
}

//19.문자열 뒤집기
function sol_ReverseString(my_string) {
    return [...my_string].reverse().join('');
}

//20.머쓱이보다 키 큰 사람
function sol_MoreTall(array, height) {
    var index = array.sort((a, b) => b - a).findIndex((x) => x <= height);
    return index == -1 ? array.length : index;
}