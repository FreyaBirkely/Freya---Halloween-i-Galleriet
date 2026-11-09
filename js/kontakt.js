/** @type {HTMLFormElement} */
let form = document.querySelector("#form")
let errorMsg = document.querySelector("#errorMsg")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let vaildEmail = false
    if (form.elements.email.value.includes("@") && form.elements.email.value.includes(".")) {
        vaildEmail = true
    }

    if (form.elements.name.value.length < 3) {
        showError("Navn er ikke udfyldt korrekt", form.elements.name)
    }
    else if (form.elements.mobil.value.length < 5) {
        showError("Mobil er ikke udfyldt korrekt", form.elements.mobil)
    }
    else if (form.elements.email.value.length < 5 || !vaildEmail) {
        showError("Udfyld en vaild Email", form.elements.email)
    }
    else if (form.elements.msg.value.length < 5) {
        showError("Beskeden er ikke lang nok", form.elements.msg)
    }
    else {
        form.submit()
    }
})

function showError(msg, input) {
    errorMsg.innerHTML = msg
    // input.focus()
    input.classList.add("form__input--red__border")
    input.addEventListener("input", function () {
        input.classList.remove("form__input--red__border")
        errorMsg.innerHTML = ""
    })
}