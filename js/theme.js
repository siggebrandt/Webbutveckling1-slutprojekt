
function changeToDarkTheme() {
    theme = "dark";
    themeButton(theme);
    
    //document.getElementById("content").style.background = "black";
    //document.getElementById("mainPageText").style.color = "white";
    //document.getElementById("p").style.background = "white";
    //document.getElementById("navbar").style.filter = "invert(1)";
}

function changeToLightTheme() {
    theme = "light";
    themeButton(theme);

    /*document.getElementById("content").style.background = "white";

    document.getElementById("navbar").style.filter = "invert(0)";*/
}

function themeButton(i) {
    if (i === "dark") {
        return document.getElementById("theme").innerHTML = "<span title=\"Switch to light mode\"><button onclick=\"changeToLightTheme()\"><img src=\"assets/ui/lightmode.png\"></button>";
    }
    if (i === "light") {
        return document.getElementById("theme").innerHTML = "<span title=\"Switch to dark mode\"><button onclick=\"changeToDarkTheme()\"><img src=\"assets/ui/darkmode.png\"></button>";
    }
}