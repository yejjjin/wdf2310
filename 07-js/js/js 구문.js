// 구조 분해 할당
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식

// 배열의 구조분해
const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;

console.log(a, b, c);

// 각각의 변수가 미리 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;

const arr2 = [1, 2, 3];
// 재할당
[, e, f] = arr2;

console.log(e, f);

// 나머지 할당
const arr3 = [1, 2, 3, 4, 5];
const [g, h, ...rest] = arr3;

console.log(g, h, rest);

// 객체 구조 분해
const cat = {
  name: "겨울",
  age: "2",
};

const { name: nick, age = 0, birth = "0101" } = cat;
console.log(name, age);

// 기본값 할당, 변수 이름 바꾸기
console.log(nick, birth);

// 선택적 체이닝
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefined를 반환한다

const user1 = undefined;
// console.log(user1.name); : error
console.log(user1?.name);

const userWinter = {
  name: "겨울",
  age: 2,
  address: {
    city: "Busan",
    dong: "Sasang",
  },
};
const userfall = {
  name: "가을",
  age: 3,
};

function printCity(user) {
  return user.address?.city || "주소가 없습니다.";
}

console.log(printCity(userWinter));
console.log(printCity(userfall));

// 객체 구조 분해
const airbnbIcon = {
  img: "airbnb.png",
  text: "한옥",
};

const { img, text } = airbnbIcon;

console.log(img, text);

// 조건문
// if문
// if (조건) {
//    조건이 true일 때 실행되는 코드
// }

// // if else문
// if (조건) {
//    조건이 true일 때 실행되는 코드
// } else {
//    조건이 false일 때 실행되는 코드
// }

// // if else if문
// if (조건) {
//   조건이 true일 때 실행되는 코드
// } else if (조건) {
//   조건이 true일 때 실행되는 코드
// }

// 음수, 양수 판별 함수
// 함수 선언

function ispositive(num) {
  if (num > 0) {
    console.log("${num}은/는 양수입니다.");
  } else if (num < 0) {
    console.log(num + "음수입니다.");
  } else {
    console.log("0입니다.");
  }
}

// 함수 실행
ispositive(1);
ispositive(-1);
ispositive(0);

// switch 조건문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.

// switch (매개변수) {
//   case 값1:
//     // 매개변수 ===값1일 때 실행되는 코드
//     break;
//   case 값2:
//       // aoroqustn ===값2일 때 실행되는 코드
//       break
//   // default: 매개변수와 일치하는 case문이 없을 때 실행되는 코드
// }

function getPrice(item) {
  let price;
  switch (item) {
    case "패딩":
      price = "280,000";
      break;
    case "바지":
      price = "55,000";
      break;
    default:
      price = "아이템별로 상이함";
  }
  return price;
}

console.log(getPrice("패딩"));
console.log(getPrice("바지"));
console.log(getPrice("모자"));

function getPrice2(item) {
  switch (item) {
    case "패딩":
      return "280,000";
    // return이란 함수를 종료하고 값을 반환하는 것이고
    // return을 사용하면 break를 사용하지 않아도 된다.
    case "바지":
      return "55,000";
    default:
      return "아이템별로 상이함";
  }
}

console.log(getPrice2("패딩"));
console.log(getPrice2("바지"));
console.log(getPrice2("모자"));

// if문으로 바꾸기

function getPrice3(item) {
  if (item === "패딩") return "280,000";
  if (item === "바지") return "55,000";
  return "아이템별로 상이함";
}

console.log(getPrice3("패딩"));
console.log(getPrice3("바지"));
console.log(getPrice3("모자"));

// 반복문
// for 반복문 : 특정 토드를 반복적으로 실행할 때 사용

// for (초기값;조건;증감) {실행될 코드}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// break문 : 전체 반복문 종료
// 10부터 1까지 출력
for (let i = 10; i > 0; i--) {
  // 3보다 작은 수일 경우 종료하는 조건문
  if (i < 4) {
    // i가 4보다 작을 때 전체 반복문 종료
    break;
  }
  console.log(i);
}

// continue: 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
for (let i = 10; i > 0; i--) {
  // 짝수일 경우에만 홀짝 나눌 때는 나머지 연산자 활용
  if (i % 2 === 0) {
    // i가 짝수일 때
    continue;
  }
  if (i % 2 === 1) {
    // i가 홀수일 때
    continue;
  }
  console.log(i);
}

// for문으로 배열출력

const animals = ["고양이", "강아지", "토끼"];
console.log(animals);
// length : 배열의 길이
console.log(animals.length);
console.log(animals[0], animals[1], animals[2]);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for of문
for (let animal of animals) {
  console.log(animal);
}

// ex2

const users = [
  {
    name: "yejin",
    age: 27,
  },
  {
    name: "jiwoo",
    age: 27,
  },
  {
    name: "dalbee",
    age: 2,
  },
  {
    name: "sinbee",
    age: 1,
  },
];

console.log(users);

for (let i = 0; i < 4; i++) {
  console.log(users[i]);
  console.log(users[i].name);
}

for (let user of users) {
  console.log(user);
  console.log(user.name);
}

// for in문
// for (변수 in 객체) {실행될 코드}
const user = {
  name: "dpwls",
  age: 27,
};

console.log(user.name, user.age);
console.log(user["name "], user["age"]);

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += sum + i;
  // i = i + 1;
  // i + 1;
  i++;
}

console.log(sum);

// do while문
// do {실행될 코드} while (조건);

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 10);
