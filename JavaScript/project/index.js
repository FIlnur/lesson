const element = document.querySelector(".app");
element.textContent = "ILNUR";

element.style.textAlign = "center";
element.style.verticalAlign = "center";
element.style.fontSize = "64px";
// element.style.padding = "100px"
// element.style.color = "yellow"
// element.style.backgroundColor = "blue"
element.addEventListener("click", (event) => {  //addEventListener - добавить прослушиватель события
  // if (element.classList.contains("hello")) {
  //   element.classList.remove("hello");
  // } else {
  //   element.classList.add("hello");
  // }
  element.classList.toggle("hello"); //toggle - переключатель или переключение
});

// const listElement = document.querySelector(".list");
// for (let itemElement of listElement.children) {
//   itemElement.textContent = Math.floor(Math.random() * 100);
// }

const listElement = document.querySelector(".list");
const itemsCount = Math.floor(1 + Math.random() * 10);
for (let i = 0; i < itemsCount; i++) {
  const itemElement = document.createElement("li");
  itemElement.textContent = Math.floor(Math.random() * 100);
  listElement.appendChild(itemElement);
}

const linkElement = document.querySelector(".link");
linkElement.setAttribute("href", "https://google.com");

// (() => {
//   let top = 0;
//   let interval1 = setInterval(() => {
//     top++;
//     element.style.marginTop = `${top / 10}vh`;
//     if (top > 900) clearInterval(interval1);
//   }, 10);
//   let interval2 = setInterval(() => {
//     if (element.textContent.length > 20) {
//       clearInterval(interval2);
//     }
//     element.textContent += "A";
//   }, 500);
// })();
