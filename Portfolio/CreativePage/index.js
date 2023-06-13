var audio = document.getElementById("Audio");
var playButton = document.getElementById("playButton");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");

// Play the audio when the page loads
window.addEventListener("load", function() {
  audio.addEventListener("ended", function() {
    audio.currentTime = 0; // Reset the audio to the beginning !!
    audio.play(); // Play the audio again <3
  });

  audio.play();
  showPauseIcon();
});

function togglePlay() {
  if (audio.paused) {
    audio.play();
    showPauseIcon();
  } else {
    audio.pause();
    showPlayIcon();
  }
}

function showPlayIcon() {
  playIcon.style.display = "inline";
  pauseIcon.style.display = "none";
}

function showPauseIcon() {
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
}
