// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();

$("button .player__button .toggle").click(function () {
    player.play();
})