console.log("sker der");
var menu = document.getElementById("Open-menu");
var overlay = document.getElementById("overlay");
var luk = document.getElementById("luk");
var mouad = document.getElementById("mig");

menu.addEventListener("click", menuen);
luk.addEventListener("click", lukDen)

function lukDen() {
    overlay.classList.remove("show")
    mouad.classList.remove("hide")
}

function menuen() {
    overlay.classList.add("show")
    mouad.classList.add("hide")
}
