// 1) Write a code to print the numbers in the array

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i]
}
console.log(new_string);    //1234567891011

//......................................................................


// 2) Write a code to print the numbers in the array


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i] + ",";
}
console.log(new_string);       //Output: 1,2,3,4,5,6,7,8,9,10,11,

//..........................................................................


// 3) Write a code to print from last to first with 
// spaces (Make sure there is no space after the last element 1)

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = (numsArr.length - 1); i >= 0; i--) {
    new_string += numsArr[i] + " ";
}
console.log(new_string);     //Output: 11 10 9 8 7 6 5 4 3 2 1

//......................................................................
// 4) Write a code to replace the array value — If the number is even, replace it with ‘even’.

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var newarr = [];

for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 != 0) {
        newarr.push(numsArr[i]);
    }
    if (numsArr[i] % 2 == 0) {
        newarr.push("even");
    }
}
console.log(newarr);        // output   [1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]


//..............................................................................
// 5) Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var newarr = [];

for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 != 0) {
        newarr.push("even");
    }
    if (numsArr[i] % 2 == 0) {
        newarr.push(numsArr[i]);
    }
}
console.log(newarr);            // output  ['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']

//...............................................................................

// 6)   Write a code to add all the numbers in the array

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
    sum = sum + numsArr[i]
}
console.log(sum);   // output 66

//.......................................................................

// 7)  Write a code to add the even numbers only

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
        sum += numsArr[i]
    }
}
console.log(sum);             //Output: 30

//...............................................................

//8) Write a code to add the even numbers and subract the odd numbers

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
var even = 0;
var odd = 0;


for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 != 0) {
        even += numsArr[i]
    }
    else {
        odd += numsArr[i]
    }
}
let ans = (sum - (even - odd));
console.log(ans);                     //Output: 94

//.............................................................................

