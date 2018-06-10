'use strict';


const arr = [[1, 2, 3], [4, 5, 6]];


console.log('E');
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    console.log(arr[i][j]);
  }
}
console.log('W');
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[0].length - 1; j >= 0; j--) {
    console.log(arr[i][j]);
  }
}

console.log('N');
for (let j = 0; j < arr[0].length; j++) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i][j]);
  }
}
console.log('S');
for (let j = 0; j < arr[0].length; j++) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][j]);
  }
}

console.log('NE');
for (let i = 0; i < arr.length * 2; i++) {
  for (let j = 0; j <= i; j++) {
    const row = i - j;
    if (row < arr.length && j < arr[0].length) {
      console.log(arr[row][j]);
    }
  }
}
console.log('SW');
for (let i = arr.length * 2; i >= 0; i--) {
  for (let j = i; j >= 0; j--) {
    const row = i - j;
    if (row < arr.length && j < arr[0].length) {
      console.log(arr[row][j]);
    }
  }
}

console.log('SE');
for (let i = arr.length * 2; i >= 0; i--) {
  for (let j = 0; j <= (arr.length * 2) - i; j++) {
    const row = j + i - arr.length;
    if (row >= 0 && j >= 0 && row < arr.length && j < arr[0].length) {
      console.log(arr[row][j]);
    }
  }
}
console.log('NW');
for (let i = 0; i <= arr.length * 2; i++) {
  for (let j = (arr.length * 2) - i; j >= 0; j--) {
    const row = j + i - arr.length;
    if (row >= 0 && j >= 0 && row < arr.length && j < arr[0].length) {
      console.log(arr[row][j]);
    }
  }
}
