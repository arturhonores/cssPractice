const style = document.documentElement.style
const handleThemeDefault = () => {
    style.setProperty("--primary", "#f77062");
    style.setProperty("--secondary", "#1b998b");
}
const handleThemeBlue = () => {
    style.setProperty("--primary", "#190482");
    style.setProperty("--secondary", "#7752FE");
}


//dropdown
const themeButtonIcon = document.getElementById("themeButton-icon")
const dropdownContainer = document.querySelector(".themeButtons__dropdown")
const dropdownEffect = () => {
    dropdownContainer.classList.toggle("visible")
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultButton = document.querySelector(".themeButtons__default")
    const blueButton = document.querySelector(".themeButtons__blue")
    blueButton.addEventListener("click", handleThemeBlue)
    defaultButton.addEventListener("click", handleThemeDefault)
    themeButtonIcon.addEventListener("click", dropdownEffect)
})