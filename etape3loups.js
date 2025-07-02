const bouton = document.getElementById('valider');
const champ = document.getElementById('motCle');
const message = document.getElementById('message');

bouton.addEventListener('click', () => {
  const mot = champ.value.trim().toLowerCase();

  if (mot === 'loup') {
    const audio = new Audio('mp3/VersEtapeCommuneLoups.mp3');
    audio.play();

    audio.addEventListener('ended', () => {
      window.location.href = 'EtapeCommune.html';
    });
  } else {
    message.innerText = '🩸 Les ombres murmurent que ce mot n’est pas le bon… Cherche encore, enfant de la nuit ! 🦇';
    message.style.color = '#FF0000';
  }
});
