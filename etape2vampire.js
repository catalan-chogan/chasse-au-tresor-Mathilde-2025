const bouton = document.getElementById('valider');
const champ = document.getElementById('motCle');
const message = document.getElementById('message');

bouton.addEventListener('click', () => {
  const mot = champ.value.trim().toLowerCase();

  if (mot === 'vampire') {
    const audio = new Audio('mp3/VersEtape3Vampire.mp3');
    audio.play();

    audio.addEventListener('ended', () => {
      window.location.href = 'Etape3Vampire.html';
    });
  } else {
    message.innerText = '🩸 Le miroir murmure que ce mot n’est pas le bon… Cherche encore, enfant de la nuit ! 🦇';
    message.style.color = '#FF0000';
  }
});