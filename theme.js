// Set default theme to light if a theme has not been set in localStorage

function setDefaultTheme() {

    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// Set HTML body to user's selected theme. 
function setSelectedTheme() {

    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}