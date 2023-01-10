//21.양꼬치
function sol_CalculatePrice(n, k) {
    return (n * 12000) + (k - Math.floor(n / 10)) * 2000;
}

//22.중복된 숫자
function sol_DuplicateNums(array, n) {
    return array.filter((x) => x == n).length;
}
