// explore.js

window.addEventListener('DOMContentLoaded', init);

var playButton;
var textArea;
var image;
var voiceSelect;

function init() {
  image = document.querySelector('img');
  playButton = document.querySelector('button');
  textArea = document.getElementById('text-to-speak');
  playButton.addEventListener('click', speak);
  voiceSelect = document.getElementById('voice-select');

  //Fill voice list
  const voices = speechSynthesis.getVoices();
  for (let i =0; i < voices.length; i++){
    let voice = voices[i];
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option)

  }

  setInterval(checkIfSpeaking, 1);
}

function speak() {
  let utterance = new SpeechSynthesisUtterance(textArea.value);
  let voices = speechSynthesis.getVoices();
  let voice = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === voice) {
      utterance.voice = voices[i];
    }
  }

  speechSynthesis.speak(utterance);

}

function checkIfSpeaking() {
  console.log(speechSynthesis.speaking);
  if (speechSynthesis.speaking){
    image.src = 'assets/images/smiling-open.png';
  }
  else{
    image.src = 'assets/images/smiling.png';
  }
}