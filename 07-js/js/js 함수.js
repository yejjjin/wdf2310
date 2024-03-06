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
function getSecond([, b = "두번째 요소가 없습니다."]) {
  // const [a, b, c] = array;
  return `난 ${b}를 키우고 있어`;
}

// 함수 호출
console.log(getSecond(animals));

// 나머지 매개변수 (...rest) : 매개변수를 배열로 전달받는다
// function 함수이름 (...매개변수) {}

function sum(a, b, ...rest) {
  console.log(a, b, rest);
}

sum(1, 2);
sum(1, 2, 3, 4, 5, 6, 7);

// 배열 데이터의 숫자를 더하는 로직 함수
function sumAll(...rest) {
  console.log(rest);

  // return rest.reduce(fn, 초기값);
  return rest.reduce(function (account, current) {
    return account + current;
  }, 0);
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7));

// 화살표 함수 (Arrow Function)
// 기본 - const 함수이름 = function () {}; : 함수의 표현식

// () => {}; : 매개변수가 없을 경우
// x =>; : 매개변수가 하나일 경우
// (x,y) => {}; : 매개변수가 두 개 이상일 경우 소괄호로 감싸준다

const hello1 = (name) => {
  console.log(`나는 ${name}입니다.`);
};

hello("김코딩");

const sum2 = (a, b) => {
  return a + b;
};

console.log(sum2(1, 2));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};
// 2. 매개변수가 하나인 경우 (괄호 생략 가능)
const b = (x) => {};
// 3. 매개변수가 여러개인 경우 (괄호 생략 불가)
const c = (x, y) => {};
// 4. 함수의 return이 있는 경우 (중괄호 포함)
// return으로 시작하는 경우 중괄호, return 생략 가능
const d = (x, y) => {
  return x + y;
};
// 5. return으로 시작하지 않는 경우 중괄호 생략불가
const e = (x, y) => {
  console.log(x);
  return y;
};
// 6. 객체를 반환return하는 경우 (객체를 소괄호로 감싸준다.)
const f = (x) => {
  return { a: x };
};
// 7. 배열을 반환하는 경우 (중괄호 생락가능)
const g = () => {
  return [1, 2];
};

// 호출 스케줄링
// setTimeout : 일정 시간이 지난 후 함수를 실행 하는 함수
// setTimeout(함수, 시간)

const timer = setTimeout(() => {
  console.log("hello");
}, 3000);

const btnStop = document.querySelector("#btnStop");
// btnStop.addEventListener(이벤트, 함수)
btnStop.addEventListener("click", () => {
  console.log("stop");
  clearTimeout(timer);
});

// setInterval : 일정 간격으로 함수를 실행하는 함수
// setInterval(함수, 시간)
const timer2 = setInterval(() => {
  console.log("hello");
}, 3000);

const slideStop = document.querySelector("#slideStop");

slideStop.addEventListener("click", () => {
  console.log("slidestop");
  clearInterval(timer2);
});

// 콜백함수 : 함수의 매개변수로 전달되는 함수를 콜백 함수라고 한다.
const x = (props) => {
  props(); //함수 실행
  console.log(x);
};

const y = () => {
  console.log(y);
};

x(y);
y();

// setTimeout 콜백함수
const sum3 = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 1000);
};

sum3(1, 2, (value) => {
  console.log(value);
});
