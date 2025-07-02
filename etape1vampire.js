const bouton = document.getElementById('valider');
const champ = document.getElementById('motCle');
const message = document.getElementById('message');

bouton.addEventListener('click', () => {
  const mot = champ.value.trim().toLowerCase();

  if (mot === 'recette') {
    const audio = new Audio('mp3/VersEtape2Vampire.mp3');
    audio.play();

    audio.addEventListener('ended', () => {
      window.location.href = 'Etape2Vampire.html';
    });
  } else {
    message.innerText = '⚠️ Le sortilège ne reconnaît pas ce mot... Cherchez encore, jeunes vampires ! 🧛‍♂️';
    message.style.color = '#FF0000';
  }
});
