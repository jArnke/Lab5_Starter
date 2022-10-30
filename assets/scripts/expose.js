// expose.js

//import JSConfetti from 'js-confetti';
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

var hornSelect;
var volumeSlider;
var playButton;
var image;
var audioPlayer;
var volumeIcon;

function init() {
  console.log('init');

  hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('input', updateHorn);
  console.log('horn selected:' + hornSelect);

  volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('input', updateVolume);
  console.log('volume slider selected:' + volumeSlider);
  
  playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound);
  console.log('play button selected:' + playButton);

  var images = document.querySelectorAll('img');
  image = images[0];
  volumeIcon = images[1];
  console.log('image selected:' + image);
  console.log('volumeIcon selected:' + volumeIcon);

  audioPlayer = document.querySelector('audio');
  console.log('audio player selected:' + audioPlayer);

}

function updateHorn(e) {
  switch (e.target.value){
    case 'air-horn':
      image.src = "assets/images/air-horn.svg";
      audioPlayer.src = "assets/audio/air-horn.mp3";
      break;
    case 'car-horn':
      image.src = "assets/images/car-horn.svg";
      audioPlayer.src = "assets/audio/car-horn.mp3";
      break;
    case 'party-horn':
      audioPlayer.src = "assets/audio/party-horn.mp3";
      image.src = "assets/images/party-horn.svg";
  }
}

function updateVolume(e) {
  let level = volumeSlider.value;
  audioPlayer.volume = level/100;
  if (level == 0){
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  }
  else if (level < 33){
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  }
  else if (level < 67){
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  }
  else{
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
}

function playSound(e) {
  audioPlayer.play();
  if (hornSelect.value == 'party-horn'){
    displayConfetti();
  }
}

function displayConfetti(){
  jsConfetti.addConfetti()
}