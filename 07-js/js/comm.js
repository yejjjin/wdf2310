// 오류 개발자 모드 console창
// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6이전 사용하던 변수라 현재는 잘 사용하지 않음

// 변수 선언
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// let 변수 (변수값 변경 가능)
let c = 10;
console.log(c);

// 재할당: let 없이 바로 변수이름과 값
c = 20;
console.log(c);

// const 변수 (변수값 변경 불가능)

// 변수 선언
const d = 5;
console.log(d);

// d = 10; 에러 발생

// zero base numbering
// js는 배열의 index가 0부터 시작함

// 배열 선언
const animals = ["dog", "cat", "fish"];

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

// 데이터 종류

// 문자열(string)
// 문자열은 작은따옴표('') 또는 큰따옴표("")로 감싸서 표현

let myName = "허예진";
let age = "26";

console.log(myName);
console.log(age);
// 허예진 나이는 26살 입니다.
console.log(`${myName} 나이는 ${age}살 입니다.`);

// boolean (true, false)

let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);

// object (객체)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// {key: value}

let user = {
  name: "허예진",
  age: "26",
  hungry: "true",
};

console.log(user);
console.log(user.name);
console.log("${user.name} 나이는 ${user.age}살 입니다.");
// console.log('${user.name}은 ${user.hungry ? '배고파요' : '배고프지 않아요'}');
