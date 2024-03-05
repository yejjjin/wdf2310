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
