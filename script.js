const audio = document.getElementById('audio');
const playButton = document.querySelector('.bottom-player button');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const coverImage = document.getElementById('cover');

const songs = [
  {
    title: "Oq tun",
    artist: "Jahongir Otajonov",
    file: "music/song.mp3",
    cover: "img/girl-listening.jpg"
  },
  // Qo‘shiq qo‘shishingiz mumkin
];

let currentSongIndex = 0;

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

function previousSong() {
  currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
  loadSong(songs[currentSongIndex]);
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
}

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.file;
  coverImage.src = song.cover;
  playSong();
}

window.onload = function() {
  loadSong(songs[currentSongIndex]);
};
