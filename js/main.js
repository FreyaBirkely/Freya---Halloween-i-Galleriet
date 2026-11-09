const toggleButton = document.querySelector(".header__toggle")
const menu = document.querySelector(".header__ul")

toggleButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle(
        "header__ul--open"
    )

    toggleButton.setAttribute(
        "aria-expanded", String(isOpen)
    )
})

