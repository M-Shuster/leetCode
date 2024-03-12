// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {};

const filteredArray = (arr, fn) => {
  let from = 0,
    to = 0;
  while (from < arr.length) {
    if (fn(arr[from])) {
      arr[to] = arr[from];
      to++;
    }
    from++;
  }
  arr.length = to;
};

var arr = [0, 10, 20, 30];

const greaterThan10 = (n) => n > 10;

filteredArray(arr, greaterThan10);
console.log("example 1 arr", arr);

// had to create a new array for the results to be pushed into as the original array was being mutated during the while loop, this is safer
const filteredArray2 = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

var arr2 = [1, 2, 3];

const firstIndex = (n, i) => {
  return i === 1; // change this between 0 and 2 to return different values from the array, or any integer -1 for the length of the array
};

filteredArray2(arr2, firstIndex);
console.log("example 2 arr", arr2);

var arr3 = [-2, -1, 0, 1, 2];

// this returns [-2,0,1,2] which is wrong as it should return [-1,0,1,2,3] but the filteredArray function is designed to filter elements based on a condition (fn(arr[from])), not to transform them so does what is expected by leetcode
const plusOne = (n) => {
  return n + 1;
};

filteredArray(arr3, plusOne);
console.log("example 3 arr", arr3);

// a proper way of doing this would be to rewrite the filteredArray function like so

const filteredArray3 = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]); // Apply transformation function to each element
  }
};

var arr4 = [-2, -1, 0, 1, 2];

filteredArray3(arr4, plusOne);
console.log("example 3 arr but correct", arr4);
