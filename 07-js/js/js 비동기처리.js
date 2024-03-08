// 동기 처리
console.log("슈렉 프라푸치노 주문");
console.log("아메리카노 주문");
console.log("슈렉 프라푸치노 제공");
console.log("아메리카노 제공");

// 비동기처리 : setTimeout
console.log("슈렉 프라푸치노 주문");
// setTimeout (함수() => {},시간3000)
setTimeout(() => {
  console.log("아메리카노 주문");
  console.log("아메리카노 제공");
}, 3000);

console.log("슈렉 프라푸치노 제공");
// 비동기 처리를 사용하면 코드 실행 순서와 실제 실행 순서를 다르게 만들 수 있다.
function orderCoffee(name, time) {
  console.log(`${name}는 ${time / 1000}이 소요됩니다.`);

  setTimeout(() => {
    console.log(`${name}가 ${time / 1000}후 제공 되었습니다.`);
  }, time);
}
orderCoffee("아메리카노", 3000);
