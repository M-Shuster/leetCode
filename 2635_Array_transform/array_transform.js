// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns a number

const initialArray = [1, 2, 3];

const increaseByOne = (array) => {
  if (array.length < 0 || array.length > 1000) {
    throw new Error("Array length out of bounds");
  }

  const increasedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < -109 || array[i] > 109) {
      throw new Error("Element value out of bounds");
    }
    increasedArray.push(array[i] + 1);
  }
  return increasedArray;
};

const result = increaseByOne(initialArray);
if (Array.isArray(result) && result.every(Number.isInteger)) {
  console.log(result);
} else {
  console.log(
    "Function did not return an array of integers,  try again but better"
  );
}

const increaseByI = (array) => {
  if (array.length < 0 || array.length > 1000) {
    throw new Error("Array length out of bounds");
  }
  const increasedArray2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < -109 || array[i] > 109) {
      throw new Error("Element value out of bounds");
    }
    increasedArray2.push(array[i] + i);
  }
  return increasedArray2;
};

const result2 = increaseByI(initialArray);
if (Array.isArray(result2) && result2.every(Number.isInteger)) {
  console.log(result2);
} else {
  console.log(
    "Function did not return an array of integers,  try again but better"
  );
}
