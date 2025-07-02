const text = document.getElementById('text').innerText;
const playBtn = document.getElementById('playBtn');

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  speechSynthesis.speak(utterance);
}

playBtn.addEventListener('click', () => {
  speak(text);
});

// Lecture automatique au chargement
speak(text);
