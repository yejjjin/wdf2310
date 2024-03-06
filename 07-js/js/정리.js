// 5. 배열

const starbucks = ["아메리카노", "라떼", "프라푸치노"];

console.log(starbucks[0]);
console.log(starbucks[2]);
console.log(starbucks.length);

// 객체

const starbucksMenu = {
  name: "아메리카노",
  price: 4000,
  size: "tall large venti",
};

console.log(starbucksMenu.price);
console.log(starbucksMenu["size"]);

const userA = {
  name: "A",
  age: 60,
};
const userB = {
  name: "B",
  age: 30,
  parent: "userA",
};

console.log(userB);
console.log(userB.name);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

const users = [userA, userB];
const user2 = [
  {
    name: "A",
    age: 60,
  },
  {
    name: "B",
    age: 30,
  },
];

console.log(user2[0].name);
console.log(users[1].parent.age);

// 구조분해할당
const arr = [1, 2, 3];
const [, b, c] = arr;

console.log(arr[0], arr[1]);
console.log(b, c);

// chakra ui 반응형 작업
// display={["none", null, "block"]}
// display={{sm:"none", lg:"block"}}

const arr2 = [1, 2, 3, 4, 5];
const [d, e, ...rest] = arr2;

console.log(d);
console.log(e);
console.log(rest);

const obj = {
  name: "A",
  age: 30,
  height: 180,
};

// const { name = "이름없음", age: a, height: h = "키정보 없음" } = obj;

const { name, age, height } = obj;

// console.log(obj.name, obj.age, obj.height);
console.log(name, a, h);

// 선택적 체이닝 연산자
const user1 = {
  name: "A",
  age: 30,
  address: "seoul",
};
const user3 = {
  name: "B",
  age: 50,
};

function printCity(props) {
  return props.address || "주소 없음";
}

console.log(printCity(user1));
console.log(printCity(user2));

// 조건문
function isPositive(props) {
  if (props > 0) {
    return "양수입니다.";
  } else if (props < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}

console.log(isPositive(2));

// switch문 if문과 비슷한 역할을 하는 조건문
function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍";

    case "고양이":
      return "야옹";

    default:
      return "알 수 없음";
  }
}

console.log(getSound("고양이"));
console.log(getSound("사자"));

// if문으로 바꾸기
function getSound2(props) {
  if (props === "개") return "멍멍";
  if (props === "고양이") return "야옹";
  return "알 수 없음";
}

console.log(getSound2("개"));
console.log(getSound("사자"));

// for 반복문
const lovers = [
  {
    name: "여름",
    age: 3,
  },
  {
    name: "가을",
    age: 2,
  },
  {
    name: "겨울",
    age: 1,
  },
];

for (let i = 0; i < lovers.length; i++) {
  console.log(`${lovers[i].name}의 나이는 ${lovers[i].age}살 입니다.`);
}

// for of문
for (let lover of lovers) {
  console.log(`${lover.name}의 나이는 ${lover.age}살 입니다.`);
}

console.log(`${lovers[0].name}의 나이는 ${lovers[0].age}살 입니다.`);
console.log(`${lovers[1].name}의 나이는 ${lovers[1].age}살 입니다.`);

// 함수
// 선언 후 호출 해야 하는데 일반함수는 호이스팅이 일어나기 때문에 호출 후 선언도 가능
hello();
hello2();

function hello() {
  console.log("안녕하세요");
}
// 익명함수 (표현식)
const hello2 = function () {
  console.log("안녕하세요 표현식입니다.");
};

// 매개변수
function sum(a, b = 5) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(1));

// 객체 구조분해 할당
const user = {
  name: "dd",
  age: 12,
  email: "",
};
// 일반
function getName(props) {
  return `${props.name}은 ${props.age}살 입니다.`;
}
// 객체 구조분해 할당
function getName(props) {
  const { name, age } = props;
  return `${name}은 ${age}살 입니다.`;
}
function getName({ name, age, email = "이메일이 없습니다." }) {
  // const { name, age } = props;
  return `${name}은 ${age}살 입니다. ${email}`;
}
console.log(getName(user));

// 배열의 구조분해 할당
const table = [row1, row2, row3];
function get2([a, b, c]) {
  const [a, b = "기본값", c] = props;

  return b;
}
console.log(get2(table));

function sum4(...rest) {
  return rest;
}

console.log(sum4("1,2,3,4,5,6,7"));

// 화살표 함수
const arrow = () => {
  console.log(arrow());
};

arrow();

// 매개변수 없는 경우
const aa = () => {};
// 매개변수 하나인 경우
const bb = (x) => {};
// 매개변수 여러개인 경우
const cc = (x, y) => {};
// 함수의 리턴이 있는 경우
const dd = (x, y) => {
  return x + y;
};
// 축약된 형태 (리턴 생략)
const ee = (x, y) => x + y;
// 리턴 키워드로 시작하지 않는 경우
// 중괄호를 포함한 리턴을 생략할 수 없다.
const ff = (x, y) => {
  console.log(x + y);
  return x + y;
};
// 객체데이터를 반환하는 경우
const gg = () => {
  return { a: 1, b: 2 };
};
// 축약형 객체의 중괄호와 화살표 함수의 중괄호를 구분하기 위해 소괄호 사용
const hh = () => ({ a: 1, b: 2 });
// 배열 데이터를 반환하는 경우
const ii = () => {
  return [1, 2, 3];
};
// 배열 데이터 축약형
const jj = () => [1, 2, 3];
