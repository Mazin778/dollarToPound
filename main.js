let pound = document.getElementById("pound");
let dollar = document.getElementById("dollar");
let bbtn = document.getElementById("scbtn");

dollar.onkeyup = () => {
    pound.value = dollar.value * 18.98;
}
pound.onkeyup = () => {
    dollar.value = pound.value / 18.98;
}
window.onscroll = function() {
    if (scrollY >= 100) {
        bbtn.style.display = "block";
    } else {
        bbtn.style.display = "none";
    }
}
bbtn.onclick = function() {
    scroll({
        top: 0,
        behavior: "smooth",
    })
}