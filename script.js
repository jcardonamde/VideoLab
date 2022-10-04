console.log("page loaded...");

function playVideo(element)  {
    element.play();
    document.getElementById("video-planeta").muted = false;
    console.log("Se reproduce");
}

function pauseVideo(element)  {
    element.pause();
    document.getElementById("video-planeta").muted = true;
    console.log("Se Detiene");
}