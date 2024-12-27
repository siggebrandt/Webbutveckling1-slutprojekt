var theme = "light";

document.addEventListener("DOMContentLoaded", function() {
    themeButton(theme);
    setupPage();
});

function setupPage() {
    menu = "<ul>" +
    "<li><a href=\"index.html\">Home</a></li>" +
    "<li><a href=\"about.html\">About</a></li>" +
    "<li><a href=\"discography.html\">Discography</a></li>"+
    "<li><a href=\"gallery.html\">Gallery</a></li>" +
    "<li><a href=\"contact.html\">Contact</a></li>" +
    "</ul>";
    document.getElementById("menu").innerHTML = menu;
    //automatic menu links
}

function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    themeButton(theme);
    
    if (scroll < 250) {
        navbar.classList.remove('navbarWhite');
        //document.getElementById("theme").innerHTML = "";

        //document.getElementById("navbar").style.filter = "invert(0)";
    } else {
        navbar.classList.add('navbarWhite');
        //themeButton(theme);
    }
}

window.addEventListener('scroll', scrollValue);
