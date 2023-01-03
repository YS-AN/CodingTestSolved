//나머지 구하기
function sol_GetRemain(num1, num2) {
    return num1 % num2
}

//중앙값 구하기
function GetMiddleValue(array) {
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
console.log(GetMiddleValue([3, 0, 1, 8, 7, 2, 5, 4]));
