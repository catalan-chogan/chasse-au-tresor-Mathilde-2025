const btnVampires = document.getElementById('choixvampires');
const btnLoups = document.getElementById('choixloups');

btnVampires.addEventListener('click', () => {
  const audio = new Audio('mp3/IntroVampires.mp3'); // Chemin vers ton MP3
  audio.play();

  audio.addEventListener('ended', () => {
    window.location.href = 'Etape1Vampire.html';
  });
});

btnLoups.addEventListener('click', () => {
  const audio = new Audio('mp3/IntroLoups.mp3'); // Chemin vers ton MP3
  audio.play();

  audio.addEventListener('ended', () => {
    window.location.href = 'Etape1Loups.html';
  });
});