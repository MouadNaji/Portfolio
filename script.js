console.log("sker der");
var menu = document.getElementById("Open-menu");
var overlay = document.getElementById("overlay");
var luk = document.getElementById("luk");
var mig = document.getElementById("migg");

menu.addEventListener("click", menuen);
luk.addEventListener("click", lukDen)

function lukDen() {
    overlay.classList.remove("show")
    mig.classList.remove("hide")
}

function menuen() {
    overlay.classList.add("show")
    mig.classList.add("hide")
}
