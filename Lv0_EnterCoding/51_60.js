//51.문자열안에 문자열
function sol_StrInStr(str1, str2) {
    return str1.indexOf(str2) < 0 ? 2 : 1;
}

//52.제곱수 판별하기
function sol_IsSquare(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

//53.모음 제거
function sol_RemoveVowel(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

//54.세균 증식
function sol_Power(n, t) {
    //return n * (2 ** t);
    return n << t;
}

//55.n의 배수 고르기
function sol_MutipleOfN(n, numlist) {
    return numlist.filter(item => item % n == 0);
}

//56.암호해독
function sol_Decryption(cipher, code) {
    return [...cipher].filter((item, index) => (index + 1) % code == 0).join('');
}

//57.문자열 정렬하기 (1)
function sol_SortString1(my_string) {
    return [...my_string].filter(x => !isNaN(x)).map(x => parseInt(x)).sort((a, b) => a - b);
}

//58.문자열 정렬하기 (2)
function sol_SortString2(my_string) {
    return [...(my_string.toLowerCase())].sort().join('');
}

//59.369게임
function sol_369Game(order) {
    return Array.from(String(order), Number).filter(x => x > 0 && x % 3 == 0).length;
}

//60.A로 B 만들기
function sol_AtoB(before, after) {
    return [...before].sort().join('') == [...after].sort().join('') ? 1 : 0;
}