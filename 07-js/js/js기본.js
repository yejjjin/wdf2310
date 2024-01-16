// js기본
// string(문자)

console.log("Hello World");

// 변수

const a = "winter";
console.log(a);
console.log(`안녕 ${a}`);
// 리터럴 방식
// 백틱을 이용하면 문자열 안에 변수를 넣을 수 있다.

// number (숫자)
// 따옴표를 붙이지 않으면 숫자로 인식한다.

console.log(123);
console.log(1 + 2);
console.log("1" + 2);
console.log("1" + "2");

const b = -123;
const c = 1.23;

console.log(b + 100, c * 2);

// 숫자로 변환

const d = 0.1;
const e = 0.2;

console.log(typeof (d + e).toFixed(1));
console.log(Number((d + e).toFixed(1)));

// boolean (참 & 거짓)

const f = true;
const g = false;

if (g) {
  console.log("참");
}

// null & undefined (값 없음)
// null : 값이 없다
// undefined : 값이 할당되지 않았다

let age = null;
console.log(age);

age = 20;
console.log(age);

// undefined
let height;
console.log(height);

height = 180;
console.log(height);

// array (배열)
// 여러개의 값을 순차적으로 나열한 자료형
// ["값","값","값"]

const animals = ["강아지", "고양이", "토끼"];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals.length);
// 배열의 마지막 요소를 가져온다
console.log(animals[animals.length]);

// Object (객체)
// 여러개의 값을 {key: value} 형태로 저장한 자료형
// {이름 : 값, 이름 : 값}

const user = {
  name: "yejin",
  age: 27,
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(`${user.name}의 나이는 ${user.age}살입니다.`);
console.log(user.name + "의 나이는" + user.age + "살입니다.");

// 점 표기법
console.log(user.name, user.age);

// 대괄호 표기법
console.log(user["name"], user["age"]);

// ex
const userA = {
  name: "baby",
  age: 27,
};
const userB = {
  name: "dalbee",
  age: 2,
  parent: userA,
};

console.log(userB);
console.log(userB.parent.name);

console.log(userB["parent"]["name"]);

// 배열에 객체 넣기
const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0].name);

// function(함수)
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형
// function 함수이름(매개변수) {코드}

function printHello() {
  console.log("hello");
}

printHello();

function getNumber() {
  return 123;
}

console.log(getNumber, typeof getNumber);
console.log(getNumber());

// Type Conversion (형 변환)
const h = 1;
const i = "1";

// 동등 연산자
console.log(h == i);
// 일치 연산자
console.log(h === i);

// Truthy & Falsy (참과 거짓)
// false, 0, '', null, undefined, NaN

const j = 0;

if (j) {
  console.log("참");
} else {
  console.log("거짓");
}
