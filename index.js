const texts = ["Phamarcist", "Beauty", "Dancer", "Teacher", "Entertainer", "Zonke Bonke"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".career").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400)
}());

// function autoplay() {
//     let childOne = document.querySelector('.video-area').firstElementChild
//     let childOne = document.querySelector('.video-area').lastElementChild

//     const playVideo = [childOne, childTwo]
//     for (var i = 0; i < playVideo.length; i++) {
        
//     }
// } 