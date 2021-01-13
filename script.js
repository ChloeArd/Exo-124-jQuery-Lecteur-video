// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let play = $(".player__button").first();
let playPause = 0;

play.click(function () {
    if (playPause === 0) {
        player.get(0).play();
        playPause = 1;
        play.html("Stop");
    } else {
        player.get(0).pause();
        playPause = 0;
        play.html("Play");
    }
});

player.addEventListener("timeupdate", function (){

});