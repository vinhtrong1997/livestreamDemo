function playVideo(stream, videoId) {
    const video = document.getElementById(videoId);
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    }
}

module.exports = playVideo;