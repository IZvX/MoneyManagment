const transition = document.getElementById("transition")
window.onload = function () {
    transition.style = "display: initial;";
    transition.style.animation = "load .5s linear"
    transition.addEventListener('animationend',clearTransition)
}

function clearTransition() {
    transition.style = "display: none;";
}