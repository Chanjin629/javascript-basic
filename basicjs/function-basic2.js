//3.29
//1
function doSomething(a, b, c) {
  return Math.max(a, b, c);
}
console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));

//2
function countNumber(a) {
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      count++;
    }
  }
  return count;
}
console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));

//3
let a = [];
function createArray(count, min, max) {
  for (let i = 0; i < count; ++i) {
    a[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return a;
}
console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));

//4
function sum(a) {
  let s = 0;
  for (i = 0; i < a.length; i++) {
    s = s + a[i];
  }
  return s;
}
console.log(sum([1, 2, 3, 4]));
console.log(sum([3, 4, 5]));
console.log(sum([20, 21]));

//5
function sum(a) {
  let s = 0;
  for (i = 0; i < a.length; i++) {
    s = s + parseInt(a[i]);
  }
  return s;
}
console.log(sum(["1", "2", "3", "4"]));
console.log(sum(["3", "4", "5"]));
console.log(sum(["20", "21"]));

//배열 제거
function remove(m, index) {
  m.splice(index, 1);
}
let m = [0, 1, 2, 3, 4];
remove(m, 2);
console.log(m);

//배열 삽입
function insert(n, index, value) {
  n.splice(index, 0, value);
}
let n = [0, 1, 3, 4];
insert(n, 2, 2);
console.log(n);

//
let c = [
  "c:/temp/guide.hwp",
  "c:/pj/frontend/chap05/substring1.js",
  "homework.docx",
];

for (i = 0; i < c.length; i++) {
  let s = c[i].lastIndexOf("/");
  console.log(c[i].substring(s + 1));
}

//객체 수
function countProperties(obj) {
  const count = Object.keys(obj).length;
  return count;
}
let person = { name: "홍길동", age: 16, height: 180 };
let count = countProperties(person);
console.log(count);

//
let personss = [
  { age: 16 },
  { name: "홍길동" },
  { age: 16 },
];

//
let persons = [];
for(i=0; i<10; i++){
  persons[i] = { name: '홍길동', age: 16+i } 
}

console.log(persons)