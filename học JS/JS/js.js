const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
let isPlaying = true;
const nextBtn = document.querySelector(".play-forward");
const pervBtn = document.querySelector(".play-repeat");
const music = [
  "../audio/3000.mp3",
  "../audio/3107.mp3",
  "../audio/gio.mp3",
  "../audio/chung.mp3",
  "../audio/anh.mp3",
  "../audio/cuoi.mp3",
  "../audio/dien.mp3",
  "../audio/mai.mp3",
  "../audio/trang.mp3",
  "../audio/watting.mp3",
];let indexSong = 0;
song.setAttribute("src", music[indexSong]);

// Next song
nextBtn.addEventListener("click", function () {
  changeSong(1);
});

// Lùi song
pervBtn.addEventListener("click", function () {
  changeSong(1);
});

function changeSong(dir) {
  if (dir === 1) {
    // next song
    if (indexSong > music.length) {
      indexSong++;
    }
  } else if (der === -1) {
    // prev song
  }
  song.setAttribute("src", music[indexSong]);
  playPause();
}

playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = ` <ion-icon name="play"  "></ion-icon>`;
    isPlaying = true;
  }
}
