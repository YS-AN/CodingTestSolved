//71. 저주의 숫자3
function sol_CursedNumber3(n) {
    var answer = 0;
    while (n > 0) {
        answer += 1;
        if (answer % 3 == 0 || answer.toString().indexOf("3") >= 0)
            continue;
        n -= 1;
    }
    return answer;
}

//72. 특이한 정렬
function sol_UniqueSort(numlist, n) {
    //Map을 활용하여 내가 품
    var numMap = numlist.sort((a, b) => (b - a)).reduce((map, val) => {
        map.set(val, Math.abs(n - val));
        return map;
    }, new Map);
    console.log(Array.from(new Map([...numMap].sort((a, b) => a[1] - b[1])).keys()));

    //sort만으로 훨씬 간단하게 풀 수 있는 문제였음...! 
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

//73. 등수 매기기
function sol_Ranks(score) {
    var arr = Array(score.length).fill(0).map((item, i) => (score[i].reduce((val, acc) => val + acc)) / 2);
    var ranks = arr.slice().sort((a, b) => b - a);

    return arr.map(item => ranks.indexOf(item) + 1);
}

//74. 대문자와 소문자
function sol_UpperAndLower(my_string) {
    return [...my_string].map(x => x.match(/[a-z]/g) == null ? x.toLowerCase() : x.toUpperCase()).join('');
}


/* 미완
function solution(numbers, direction) {
    console.log("asf");
    var dirI = direction == "right" ? -1 : 1;
    var answer = [];
    //return answer.map((num, i) => numbers[])
    Array(numbers.length).fill(0).map(() => console.log(numbers.splice(0, 1)));
    console.log(numbers);
}

solution([1, 2, 3], "right");
//[3, 1, 2]


0 1 2
R => 2 0 1
L => 1 2 0
*/