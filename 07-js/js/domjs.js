document.querySelector(".wrap").style.border = "1px solid blue";
document.querySelector(".header").style.backgroundColor = "lightpink";
document.querySelector(".header").style.height = "50px";

const parent = document.querySelector(".wrap");

console.log(parent.children);
console.log(parent.childNodes);
console.log(parent.firstChild);
console.log(parent.firstElementChild);

const main = document.querySelector("#main");
const contentsection = document.querySelector(".content-section");
const sidebar = document.querySelector(".sidebar");

main.style.backgroundColor = "lightblue";
contentsection.style.backgroundColor = "lightgreen";
sidebar.style.backgroundColor = "lightgray";

// document.querySelector(".content-section p").style.border = "5px solid blue";
// document.querySelectorAll(".content-section p").style.border = "5px solid red";
const secP = document.querySelectorAll(".content-section p");
secP.forEach((p) => (p.style.border = "5px solid gray"));

secP[0].textContent = "Hello World";
secP[1].innerHTML = "<em>안녕</em>";

const link = document.querySelector(".link");
link.setAttribute("href", "http://google.com");
link.textContent = "구글로 이동";

const newEl = document.createElement("div");
newEl.textContent = "새로운 요소";

// 앞쪽에 추가
document.querySelector(".sidebar").appendChild(newEl);
// 제거
document.querySelector(".sidebar").lastElementChild.remove();

// 이벤트
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("클릭");
});
