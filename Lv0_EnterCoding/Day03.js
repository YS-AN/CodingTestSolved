//나머지 구하기
function sol_GetRemain(num1, num2) {
    return num1 % num2
}

//중앙값 구하기



function solution(array) {
    let len = array.length;
    let sortedArr = quickSort(0, len - 1, array);

    return sortedArr[parseInt(len / 2)];
}

function quickSort(l, r, arr) {
    if (l < r) {
        let p = partition(l, r, arr, "P");
        console.log("=============== " + p + " ==============")
        quickSort(l, p - 1, arr, "L");
        quickSort(p + 1, r, arr, "R")
    }

    return arr;
}

function partition(l, r, arr, tpye) {
    console.log("==========[ " + tpye + " partition=]==========");
    console.log("=============" + l + " / " + r + "=============");

    let p = l;

    while (l < r) {
        if (arr[p] > arr[r]) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;

            l += 1;
        }
        else {
            r -= 1;
        }
    }

    var str = "";
    arr.forEach((item) => { str += "  " + item });
    console.log(str);
    return r - 1;
}

solution([3, 0, 1, 8, 7, 2, 5, 4]);

//2 0 1 8 7 3 5 4