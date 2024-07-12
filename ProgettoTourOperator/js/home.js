


function playPause(id) {
    var myVideo = document.getElementById(id);
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function stayPause(id) {
    var myVideo = document.getElementById(id);
    if (myVideo.play)
        myVideo.pause();
    else
        myVideo.play();
}

function togglePause(id) {
    var myVideo = document.getElementById(id);
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}