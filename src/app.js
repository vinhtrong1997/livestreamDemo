const openStream = require("./openStream");
const playVideo = require("./playVideo");
const Peer = require("simple-peer");
const $ = require("jquery");
openStream(function(stream){
    const p = new Peer({initiator:location.hash === '#1',trickle:false, stream:stream});
    playVideo(stream,"localStream");
    p.on("signal", token => {
        $("#txtMySignal").val(JSON.stringify(token));
    });
    
    p.on("stream",function(frinedStream){
        playVideo(frinedStream,"friendStream");
    });
    $("#btnConnect").click(() => {
        const friendSignal = JSON.parse($("#txtFriendSignal").val());
        p.signal(friendSignal);
    });
});