//JS Big O Notation
// Time Complexity in javascript
// O(1): Constant time algorithm
//Run time is independent of the input size of the problem.
//An algorithm is said to run in constant time. It means that as you increase the size of the input to the function. The execution time remains the same.
var function_01 = function (arr1) {
    console.log("its return first element of the array " + arr1[0]);
    return null;
};
function_01([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 34, 55, 66, 23]);
//O(n)Linear time algorithm
//it requires a small amount of proccessing time for each element in the input
//The execution time of the function is directly proportional to the input size. the run time of the function grows as the input grows, and we mark it as O(n).
var function_On = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return null;
};
function_On([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 34, 55, 66, 23]);
//Quadratic algorithm
//O(n²): The problem process all the pairs of the element. Quadratic.
//The number of steps required by the quadratic algorithms is the square root of input size. If the input size is 2, then the required steps are 4. If the input is size 8, it will take 64, and so on. and we mark it as O(n²).
var Quadratic = function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    var time = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            time += 1;
            console.log("time" + time);
        }
    }
};
Quadratic();
//Logarithmic algorithm
//An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size, and we mark it as O(log n).
//An example of an O(log n) algorithm would be a binary search algorithm.
//O(n) value search
var isValueAvailable_On = function (arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var time = 0;
    while (start <= end) {
        time += 1;
        console.log(time, 'time');
        if (arr[start] == val) {
            return true;
        }
        start++;
    }
    return false;
};
console.log(isValueAvailable_On(["ashok", "bejo", "arun", "virat", "ajith", "vihay", "amma", "appa", "jithu", 2, 3], 3));
//O(log n) binary search;
var isValueAvailable_Ologn = function (arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var time = 0;
    while (start <= end) {
        time += 1;
        var mid = Math.floor((start + end) / 2);
        console.log(time, 'time');
        if (arr[mid] == val) {
            return true;
        }
        else if (mid < arr.indexOf(val)) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return false;
};
console.log(isValueAvailable_Ologn(["ashok", "bejo", "arun", "virat", "ajith", "vihay", "amma", "appa", "jithu", 2, 3], 3));
