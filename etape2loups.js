const bouton = document.getElementById('valider');
const champ = document.getElementById('motCle');
const message = document.getElementById('message');

bouton.addEventListener('click', () => {
  const mot = champ.value.trim().toLowerCase();

  if (mot === 'canine') {
    const audio = new Audio('mp3/VersEtape3loups.mp3');
    audio.play();

    audio.addEventListener('ended', () => {
      window.location.href = 'Etape3loups.html';
    });
  } else {
    message.innerText = '🩸 On me murmure que ce mot n’est pas le bon… Cherche encore, enfant de la nuit ! 🦇';
    message.style.color = '#FF0000';
  }
});