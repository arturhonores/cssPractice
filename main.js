const style = document.documentElement.style
const handleThemeBlue = () => {
    style.setProperty("--primary", "blue");
    style.setProperty("--secondary", "gray");
}

document.addEventListener("DOMContentLoaded", function () {
    const blueButton = document.querySelector(".themeButtons__blue")
    blueButton.addEventListener("click", handleThemeBlue)
})