alert('Use keyboard to play music (e.g. A). Only uppercase.')

function playAudio(key) {
    let audio = new Audio();
    audio.src = 'sounds/' + key + '.mp3';
    audio.play();
}

document.addEventListener("keydown", function(event) {
    if (event.key == 'A' || event.key == 'S' || event.key == 'D' || event.key == 'F' || event.key == 'G' || event.key == 'H' || event.key == 'J') {
        playAudio(event.key)
    }
    else if (event.key == 'W' || event.key == 'E' || event.key == 'T' || event.key == 'U' || event.key == 'Y') {
        playAudio(event.key)
    }
});
