document.addEventListener('DOMContentLoaded', function() {
    startSlideShow();
}); //page loaded

let counter = 0;
let timeout;
let timer_on = 0;

images = ["assets/slideshow/1.png", "assets/slideshow/2.jpg", "assets/slideshow/3.png", "assets/slideshow/4.png", "assets/slideshow/5.png", "assets/slideshow/6.jpg", "assets/slideshow/7.png", "assets/slideshow/8.jpg", "assets/slideshow/9.png"]

text = ["Lady Gaga in the \"Perfect Illusion\" Music Video (2016).", "Lady Gaga in \"Marry the Night\".", "One of the Promotional Images for Lady Gaga's hit \"Poker Face\".", "Photo included in an article with Lady Gaga in the magazine ELLE.", "CD cover for Lady Gaga's single \"Disco Heaven\".", "Lady Gaga in the \"Bad Romance\" music video.", "Lady Gaga in \"Judas\" included in the album \"Born This Way\".", "Lady Gaga from the short film included in the song \"911\".", "Lady Gaga performing live at Lollapalooza, Chicago 2010."]
currentImage = 0;

function startSlideShow() {
    startCount();
}

function timedCount() {
    document.getElementById("counter").value = counter;
    counter++;
    if (counter >= 7) {
        nextIMG();
    } else {
        timeout = setTimeout(timedCount, 1000);
    }
}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(timeout);
    timer_on = 0;
}

function resetCount() {
    stopCount();
    counter = 0;
    document.getElementById("counter").value = counter;
}

function nextIMG() {
    resetCount();
    currentImage++;
    if(currentImage > 8) currentImage = 0;
    document.getElementById("slideShowImage").src = images[currentImage];
    document.getElementById("slideshowText").innerHTML = text[currentImage];
    startCount();
}

function backIMG() {
    resetCount();
    currentImage--;
    if(currentImage < 0) currentImage = 8;
    document.getElementById("slideShowImage").src = images[currentImage];
    document.getElementById("slideshowText").innerHTML = text[currentImage];
    startCount();
}