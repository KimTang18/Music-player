
var songs = ['./music/fox rain.mp3', './music/kamado.mp3', './music/lost memory.mp3', './music/once again.mp3', './music/r7.mp3', './music/stay with me.mp3', './music/suzume.mp3', './music/untamed.mp3' ];
var songTitle = ['Fox Rain', 'Kamado', 'Lost Memory', 'Once Again', 'R7', 'Stay With Me', 'Suzume', 'untamed' ];
var songImage=['img/foxrain.jpg','img/kamado.jpg','img/lostmemory.jpg', 'img/onceagain.jpg', 'img/r7.jpg', 'img/staywithme.jpg', 'img/suzume.jpg', 'img/Theuntamed.jpg']
var progressBar = document.getElementById("song-progress-bar");
var currentMinutes = document.getElementById("current-minutes");
var currentSeconds = document.getElementById("current-seconds");
var durationMinutes = document.getElementById("duration-minutes");
var durationSeconds = document.getElementById("duration-seconds");
var player = new Audio();
var currentSong = 0;

function playPause() {
    if (player.paused) {
        player.src = songs[currentSong];
        player.play();
        document.getElementById("playPauseBtn").innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
        document.getElementById("songTitle").innerHTML =songTitle[currentSong];
        document.getElementById("cover-art").style.backgroundImage = "url("+songImage[currentSong]+")";
    } else {
        player.pause();
        document.getElementById("playPauseBtn").innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    }
}


function next() {
    currentSong = (currentSong + 1) % songs.length;
    player.src = songs[currentSong];
    player.play();
    document.getElementById("songTitle").innerHTML = songTitle[currentSong];
    document.getElementById("cover-art").style.backgroundImage = "url("+songImage[currentSong]+")";
}

function prev() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    player.src = songs[currentSong];
    player.play();
    document.getElementById("songTitle").innerHTML =songTitle[currentSong];
    document.getElementById("cover-art").style.backgroundImage = "url("+songImage[currentSong]+")";
}

function random() {
    currentSong = Math.floor(Math.random() * songs.length);
    player.src = songs[currentSong];
    player.play();
    document.getElementById("songTitle").innerHTML =songTitle[currentSong];
    document.getElementById("cover-art").style.backgroundImage = "url("+songImage[currentSong]+")";
}

player.addEventListener("timeupdate", function() {
  var progress = (player.currentTime / player.duration) * 100;
  progressBar.value = progress;
});

// song length updater indicator
player.addEventListener("timeupdate", function() {
    var minutes = Math.floor(player.currentTime / 60);
    var seconds = Math.floor(player.currentTime % 60);
    currentMinutes.innerHTML = minutes;
    currentSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
});

// song total duration 
player.addEventListener("loadedmetadata", function() {
    var minutes = Math.floor(player.duration / 60);
    var seconds = Math.floor(player.duration % 60);
    durationMinutes.innerHTML = minutes;
    durationSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
});