const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  const audio = new Audio('mp3/IntroGle.mp3'); 
  audio.play();

  // Quand l'audio est terminé, redirection :
  audio.addEventListener('ended', () => {
    window.location.href = 'choixequipe.html';
  });
});
