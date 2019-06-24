'use strict';

console.log('Hello world!');
/*
var limit = 30;
var a = 0;
var b = 1;
console.log(a);
console.log(b);

if (limit > 0) {
  console.log(b);
}

while (a + b <= limit) {
  // code 
  var temp = b;
  b = a + b;
  a = temp;
  console.log(b)
} 
*/

var limit = 30;
var a = 0;
var b = 1;

for (var a = 0; a <= limit; ) {
  console.log(a);
  var temp = a + b;
  a = b;
  b = temp;
}

