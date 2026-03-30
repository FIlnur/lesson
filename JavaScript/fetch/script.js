const factText = document.querySelector(".text");
const url = "http://127.0.0.1:5000/api/v1/resources/dogs";
console.log(await (await fetch(url)).json());