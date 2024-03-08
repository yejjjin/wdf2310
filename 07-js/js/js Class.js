// 생성자 함수
// const animals = ['cat', 'dog', 'fish']
const animals = new Array("cat", "dog", "fish");
console.log(animals);
console.log(animals.length);
console.log(animals[1]);

const americano = {
  name: "아메리카노",
  price: 4000,
  front: function () {
    return `${this.name}는 ${this.price}원 입니다.`;
  },
};

console.log(americano.front());

const latte = {
  name: "라떼",
  price: 4500,
};

console.log(americano.front.call(latte));

// 프로토타입(속성값)을 이용한 메소드 재활용
function Front(name, price) {
  // 속성값 생성
  // this.name = 아메리카노
  this.name = name;
  this.price = price;
}

// 메소드 생성
Front.prototype.calling = function () {
  return `${this.name}는 ${this.price}원 입니다.`;
};

// Front 생성자 함수를 이용한 객체 생성
const ame = new Front("아메리카노", 4000);
const lat = new Front("라떼", 4500);

console.log(ame);
console.log(ame.calling());
console.log(lat);
console.log(lat.calling());

// 클래스함수로 변경하기
class Front2 {
  // 생성자 함수 역할을 해 객체를 생성함
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }
  // 주문 메소드
  makeCoffee() {
    return `${this.name} ${this.size} 주문 들어왔습니다.`;
  }
  // 사이즈별 가격 메소드
  getPrice() {
    if (this.size === "large") {
      return this.price + 500;
    } else if (this.size === "small") {
      return this.price - 500;
    } else {
      return this.price;
    }
  }
  // 메소드 생성
  calling() {
    return `${this.name} ${this.size}사이즈는 ${this.getPrice()}원 입니다.`;
  }
  calling2() {}
}

// extends 상속
class Special extends Front2 {
  specialCoffee() {
    return `오늘의 커피 : ${this.name}는 ${this.price}원 입니다.`;
  }
}

const milktea = new Special("밀크티", 5500, "large");
console.log(milktea.specialCoffee());

const ame2 = new Front2("아메리카노", 4000, "large");
const lat2 = new Front2("라뗴", 4500, "tall");
const capu2 = new Front2("카푸치노", 5000, "small");

console.log(ame2.calling());
console.log(lat2.calling());
