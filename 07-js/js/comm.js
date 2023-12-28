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

// 배열
// 여러 데이터를 순서대로 저장하기 위해 사용

let fruits = ["사과", "바나나", "딸기"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 함수 (function)
// 특정 기능을 수행하는 코드의 집합

// 함수 선언
function sayHello() {
  // 함수 내용
  console.log("안녕하세요");
}

// 함수 호출
sayHello();

// 함수의 재사용
// 국어, 수학 점수를 전달하면 총점을 계산해주는 함수

// 함수 선언
// 총점을 계산해주는 함수
function sum(a, b) {
  return a + b;
}

// 함수 호출
console.log(sum(80, 90));
console.log(sum(70, 80));

let e = sum(20, 30);
console.log(e);

// 기명 함수 (named function)

function hello() {
  console.log("hello");
}

hello();

// 익명 함수 (anonymous function)

let hello2 = function () {
  console.log("hello2");
};

hello2();

// 화살표 함수 (arrow function) - 웹디기능사

let hello3 = () => {
  console.log("hello3");
};

hello3();

// 조건문 (if, else if, else)
// 특정 조건에 따라 다른 코드를 실행할 떄 사용

// if (조건) {참일 경우 실행문} else {거짓일 경우 실행문}
if (false) {
  console.log("true");
} else {
  console.log("false");
}

// DOM API (Document Object Model)
// html 문서의 요소를 제어하는 방법

// html 요소(element) 검색

// document.querySelector라는 이름을 변수 설정
const boxEL = document.querySelector(".box");

// boxEL를 클릭했을 때, 할 일을 함수로 정의
boxEL.addEventListener("click", function () {
  console.log("click");
  // boxEL 요소에 active 클래스 추가
  boxEL.classList.add("active");
});

const tabELs = document.querySelectorAll(".tab");
console.log(tabELs);

tabELs.forEach(function (tabEL, index) {
  console.log(tabEL, index);
  tabEL.classList.add(`tab${index + 1}`);
});
