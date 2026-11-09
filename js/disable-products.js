const btnSilver = document.querySelector("#btn-silver")
const btnGold = document.querySelector("#btn-gold")
const btnPlatin = document.querySelector("#btn-platin")


// Hvis der data i local storage så disabler vi knapperne
if (localStorage.getItem("package") && localStorage.getItem("package").length > 89) {
    btnSilver.setAttribute("disabled", "true")
    btnGold.setAttribute("disabled", "true")
    btnPlatin.setAttribute("disabled", "true")

    btnSilver.innerHTML = "Du har allerede en pakke"
    btnGold.innerHTML = "Du har allerede en pakke"
    btnPlatin.innerHTML = "Du har allerede en pakke"
}