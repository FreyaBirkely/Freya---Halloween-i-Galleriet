const output = document.querySelector("#output")

let url = new URL(window.location.href)

// Koverterer URL fa string til object

const term = url.searchParams.get("package")

output.innerHTML = term

let htmlString = ""

if (localStorage.getItem("package") && localStorage.getItem("package").length > 89) {
    htmlString = localStorage.getItem("package")
}
else if (term == "silver") {
    htmlString = `
    <h2 class="tilbud__h2">Mine tilbud</h2>
    <table class="tilbud__table">
        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                En Biografbillet
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                En billet til svømmehallen
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                Guf for 100 kr i slikbutikken
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>


    </table>
    `
    localStorage.setItem("package", htmlString)
}
else if (term == "gold") {
    htmlString = `
    <h2 class="tilbud__h2">Mine tilbud</h2>
    <table class="tilbud__table">
        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                To Biografbilletter
            </td>

            <td>
                <button  class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                To billetter til svømmehallen
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                Guf for 500 kr i slikbutikken
            </td>

            <td>
               <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>


    </table>
    `
    localStorage.setItem("package", htmlString)
}
else if (term == "platin") {
    htmlString = `
    <h2 class="tilbud__h2">Mine tilbud</h2>
    <table class="tilbud__table">
        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                Fire Biografbilletter
            </td>

            <td>
               <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                Fire billetter til svømmehallen
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>

        <tr class="tilbud__row">
            <td class="tilbud__ticket">
                Guf for 500 kr i slikbutikken
            </td>

            <td>
                <button class="redeem" onclick="deleteItem(this)">
                    Indløs
                </button>
            </td>
        </tr>


    </table>
    `
    localStorage.setItem("package", htmlString)
}
else {
    htmlString = "Du har ingen tilbud i kurven"
}


output.innerHTML = htmlString



// Funtion der sletter local storage
function deleteLocalStorage() {
    localStorage.removeItem("package")
    window.location.href = "mine-tilbud.html"
}

// Funtion der sletter enkelte dele af pakkerne
function deleteItem(node) {
    node.parentElement.parentElement.remove()
    localStorage.setItem("package", output.innerHTML)
}