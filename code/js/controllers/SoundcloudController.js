;(function() {
  "use strict";

  require("BaseController").init({
    siteName: "SoundCloud",
    playPause: ".playControl",
    playNext: ".skipControl__next",
    playPrev: ".skipControl__previous",
    mute: ".volume__togglemute",

    playState: ".playControl.playing",
    song: ".playbackTitle__link"
  });
})();
