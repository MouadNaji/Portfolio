console.log("sker der dude");
var menu = document.getElementById("Open-menu");
var overlay = document.getElementById("overlay");
var luk = document.getElementById("luk");

menu.addEventListener("click", menuen);
luk.addEventListener("click", lukDen)

function lukDen() {
    overlay.classList.remove("show")
}

function menuen() {
    overlay.classList.add("show")
}
