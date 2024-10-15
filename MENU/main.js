let jsUnderLine = document.getElementById("underline");
let jsMenu = document.querySelectorAll("nav:first-child a");

jsMenu.forEach((menu) =>
    menu.addEventListener("click", (e)=>indicator(e))
);

function indicator(e) {
    jsUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    jsUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    jsUnderLine.style.top = 
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}