
handleMenu = (event) => {
    let menuButton = event.target
    let isOpen = menuButton.getAttribute("data-isopen") === "true"

    menuButton.setAttribute("data-isopen", !isOpen)
    menuButton.setAttribute("aria-label", `Click to ${isOpen ? 'close' : 'open'} menu`)
}

let menuButton = document.getElementsByClassName("menu__button")[0]
menuButton.addEventListener("click", handleMenu)