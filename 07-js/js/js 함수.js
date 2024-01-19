// 함수 선언하기

hello();
// world();

// 함수 선언문
// function 함수이름() {}
function hello() {
  console.log("hello");
}

// 함수 표현식
// function 함수 이름() {}
const world = function () {
  console.log("world");
};

// return : 함수를 종료하고 값을 반환하는 것.

function h1() {
  return "hello";
  //   return문 이후에 작성된 코드는 실행되지 않는다.
  //   console.log("world");
}

function h2() {
  return;
  // return 'hello'; 이 코드는 실행되지 않는다.
}

// 매개변수 : 함수를 호출할 때 함수로 전달되는 값.

// function 함수이름(매개변수1,매개변수2) {}

function sum(aaa, bbb) {
  return aaa + bbb;
}

console.log(sum(1, 2));
console.log(sum(7, 3));
console.log(sum(5));

// sum(1, 2);

// 객체의 구조분해 할당

// 일반적
const user = {
  name: "ddd",
  age: 5,
  email: "ddd@naver.com",
};
// 함수 선언(name출력)
function getEmail(ddd) {
  return aaa.email;
}

// 함수 호출
console.log(getEmail(user));

// 함수 선언(email출력)
function getEmail({ name, age }) {
  //   const { name, age } = ddd;
  return `${name}의 나이는 ${age}입니다.`;
}

const users = [
  { name: "spring", age: 3 },
  { name: "summer", age: 3 },
  { name: "fall", age: 3 },
  { name: "winter", age: 3 },
];

console.log(getEmail(users[0]));
console.log(getEmail(users[1]));
console.log(getEmail(users[2]));
console.log(getEmail(users[3]));

// 배열의 구조분해 할당

const animals = ["dog", "cat", "fish"];

// 함수 선언 (배열의 두번째 값 출력 함수)
function getSecond(array) {
  const [a, b, c] = array;
  return `난${a},${b},${c}키우고 있어`;
}

// 함수 호출
console.log(getSecond(animals));
