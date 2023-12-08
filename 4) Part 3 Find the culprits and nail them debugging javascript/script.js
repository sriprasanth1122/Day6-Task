// 1)  Fix the code to get the largest of three.

aa = (f, s, t) => {

    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);         // output: 3

//..........................................................

// 2)  Fix the code to Sum of the digits present in the number

function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
        sum += +n[i]
    }
    return sum;
}
let n = String(123).split("");
console.log(add(n));


//...................................................................

// 3) Fix the code to Sum of all numbers using IIFE function

const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function (arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})(arr);            // output:38

//.............................................................................


//4) Fix the code to gen Title caps.

var rr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(rr);


// Guvi
// Geek
// Zen
// Fullstack

//.......................................................................................

// 5)  Fix the code to return the Prime numbers

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            return true;
        }
    }
    return num == 1;
});
console.log(myPrime);

//.................................................................

// 6) Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const sum = (a, b) =>
    a + b
const x = num.reduce(sum)
console.log(x);  // 550


//.............................................

// 7)  Fix the code to rotate an array by k times and return rotated array using IIFE function

var array = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];


(function (a) {
    var k = 3;
    var res = [];
    var n = a.length;
    k = k % n;
    for (i = 0; i < a.length; i++) {
        if (i < k) {
            res[i] = a[n - k + i]
        }
        else {
            res[i] = a[i - k]
        }
    }
    console.log(res);


})(array); //  output: [10, 12, 13, 1, 2, 3, 6, 8, 6, 1, 9]

//.......................................................

// 8) Fix the code to gen Title caps.

var rr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(rr);


// Guvi
// Geek
// Zen
// Fullstack

//...........................................................

// 9)  print all odd numbers in an array using IIFE function




var a = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
})();

// 1
// 3
// 5
// 7
// 79
// 7
// 9

//................................................


// 10) Fix the code to reverse.


(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd");                  // output:dcba

//.............................................


// 11) Fix the code to remove duplicates.


var res = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        newArr = [];
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]); // ['guvi','geek',duplicate','geeK']

//.....................................................




