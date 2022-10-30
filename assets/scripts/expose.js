// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById('#horn-select');
  hornSelect.addEventListener('input', updateHorn);
  var volumeSlider = document.getElementById('#volume');
  volumeSlider.addEventListener('input', updateVolume);
 // var playButton = document.getElement
 // var image = document.getElement 

}

function updateHorn(e) {
  switch (e.target.value){
    case 'air-horn':
      
    case 'car-horn':
    case 'party-horn':
  }
}

function updateVolume(e) {

}

function playSound(e) {

}

function displayConfetti(){

}