const toggleMode = document.querySelector("#toggle-mode");
const theme = localStorage.getItem("theme");
if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme == "dracula") {
        toggleMode.checked = true;
    } else {
        toggleMode.checked = false;
    }
}
toggleMode.addEventListener("input", () => {
    if (toggleMode.checked) {
        document.documentElement.setAttribute("data-theme", "dracula");
    } else {
        document.documentElement.setAttribute("data-theme", "winter");
    }
    localStorage.setItem(
        "theme",
        document.documentElement.getAttribute("data-theme")
    );
});