document.addEventListener("DOMContentLoaded", function() {
    const statusContainer = document.querySelector('.status-container');
    const statusBox = document.getElementById('statusBox');
    const statusDot = document.getElementById('statusDot');
    const statusLabel = document.getElementById('statusLabel');

    // Simuler la récupération du statut Discord (en ligne/hors ligne)
    const isOnline = true; // Remplacez ceci par une vraie vérification du statut

    // Définir la couleur et le texte du statut
    if (isOnline) {
        statusDot.style.backgroundColor = "#00ff00";
        statusDot.style.boxShadow = "0 0 10px #00ff00";
        statusLabel.textContent = "En ligne";
    } else {
        statusDot.style.backgroundColor = "red";
        statusDot.style.boxShadow = "0 0 10px red";
        statusLabel.textContent = "Hors ligne";
    }

    // Animer le déplacement et l'affichage du statut
    setTimeout(function() {
        statusContainer.classList.add('move-left');
        setTimeout(function() {
            statusBox.classList.add('show');
        }, 700); // Délai pour la sortie du statut après le déplacement de l'image
    }, 700); // Délai initial pour commencer l'animation
});
