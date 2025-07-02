const bouton = document.getElementById('valider');
const champ = document.getElementById('motCle');
const message = document.getElementById('message');

bouton.addEventListener('click', () => {
  const mot = champ.value.trim().toLowerCase();

  if (mot === 'lune') {
    const audio = new Audio('mp3/VersEtape2loups.mp3');
    audio.play();

    audio.addEventListener('ended', () => {
      window.location.href = 'Etape2loups.html';
    });
  } else {
    message.innerText = '⚠️ Le sortilège ne reconnaît pas ce mot... Cherchez encore, jeunes loups ! 🧛‍♂️';
    message.style.color = '#FF0000';
  }
});
