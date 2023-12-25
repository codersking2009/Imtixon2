let btnEl = document.querySelector("#btn");
let sumEl = document.querySelector("#sum");
let valyutaEl = document.querySelector("#valyuta");
let h1El = document.querySelector("#h1");


btnEl.addEventListener("click" ,() =>{
h1El.innerHTML = valyutaEl.value * sumEl.value
});