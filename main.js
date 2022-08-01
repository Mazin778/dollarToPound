let pound = document.getElementById("pound");
let dollar = document.getElementById("dollar");

dollar.onkeyup = () => {
    pound.value = dollar.value * 18.98;
}
pound.onkeyup = () => {
    dollar.value = pound.value / 18.98;
}