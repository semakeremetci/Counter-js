let counter = Number(localStorage.getItem("counter"));
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let card = document.querySelector("#card");
let setButton = document.querySelector("#set");
card.innerHTML=counter;


decrease.addEventListener("click", click)
increase.addEventListener("click", click)
setButton.addEventListener("click", function(){
    card.innerHTML = 0;
    counter = 0;
    localStorage.setItem("counter", counter);
})


function click () {
    console.log(this.id);
    this.id == "increase" ? card.innerHTML = counter += 1 : card.innerHTML = counter -= 1;
    localStorage.setItem("counter", counter);
}