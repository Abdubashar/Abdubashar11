const audio = document.getElementById('audio');
const playButton = document.querySelector('.bottom-player button');

function playSong() {
  audio.play();
  playButton.textContent = '⏸';
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸';
  } else {
    audio.pause();
    playButton.textContent = '▶';
  }
}
