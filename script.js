window.onload = function() {
    const audio = document.getElementById('audio');
    const profilePic = document.getElementById('profilePic');

    // Lancer l'audio
    audio.play();

    // Synchroniser les rebondissements de l'image avec les battements de la musique
    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        if (Math.floor(currentTime) % 1 === 0) { // Ajuster cette condition pour correspondre au rythme
            profilePic.classList.add('bounce');
        } else {
            profilePic.classList.remove('bounce');
        }
    });
};
