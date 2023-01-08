//01.두 수의 나눗셈
function sol_Division(num1, num2) {
    return parseInt((num1 / num2) * 1000);
}

//02.숫자 비교
function sol_CompareNumbers(num1, num2) {
    return num1 == num2 ? 1 : -1;
}

//03.분수의 덧셈
function sol_FractionalAddition(denum1, num1, denum2, num2) {
    let num = num1 * num2;
    let denum = (num1 * denum2) + (num2 * denum1);

    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let gcdNum = gcd(Math.max(denum, num), Math.min(denum, num));

    var answer = [(denum / gcdNum), (num / gcdNum)];
    return answer;
}

//04.배열 두 배 만들기
function sol_DoubleTheArrayData(numbers) {
    return numbers.map(x => x * 2);
}

//05.나머지 구하기
function sol_GetRemain(num1, num2) {
    return num1 % num2
}

//06.중앙값 구하기
function sol_GetMiddleValue(array) {
    let len = array.length - 1;
    //let sortedArr = quickSort(0, len, array);
    //return sortedArr[parseInt(len / 2)];
    //Quick Sort는 시간 제한으로 빠꾸당함

    array.sort((a, b) => a - b); //a-b는 오름차순 b-a는 내림차순
    return array[parseInt(len / 2)];
}

function quickSort(l, r, arr) {
    if (l < r) {
        let p = partition(l, r, arr);

        quickSort(l, p - 1, arr);
        quickSort(p + 1, r, arr);
    }
    return arr;
}

function partition(l, r, arr) {
    let pivot = arr[l];

    while (l < r) {
        while (pivot < arr[r]) {
            r -= 1;
        }
        while (pivot > arr[l] && r > l) {
            l += 1;
        }

        let tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
    }
    return l;
}
//console.log(GetMiddleValue([3, 0, 1, 8, 7, 2, 5, 4]));

//07.최빈값 구하기 
function sol_GetMode(array) {
    let cntMap = new Map();

    array.map((v, i) => {
        if (cntMap.has(v))
            cntMap.set(v, cntMap.get(v) + 1);
        else
            cntMap.set(v, 1);
    });

    cntMap = [...cntMap].sort((a, b) => b[1] - a[1]);
    return cntMap.length === 1 || cntMap[0][1] > cntMap[1][1] ? cntMap[0][0] : -1;
}

//08.짝수는 싫어요
function sol_HateEven(n) {
    let max = Math.ceil(n / 2);
    return Array(max).fill(1).map((v, i) => (i + 1) * 2 - v);
}

//09.피자 나눠먹기(1)
function sol_DividePizza1(n) {
    return Math.ceil(n / 7);
}

//10.피자 나눠먹기(2)
function sol_DividePizza2(n) {
    let a = n < 6 ? n : 6;
    let b = n > 6 ? n : 6;

    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let gcdNum = gcd(Math.max(a, b), Math.min(a, b));

    return ((a * b) / gcdNum) / 6;
}