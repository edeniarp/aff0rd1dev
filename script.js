document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector('.profile-container');
    const statusBox = document.querySelector('.status-box');
    const statusDot = document.getElementById('statusDot');
    const statusLabel = document.getElementById('statusLabel');
    const terminalContainer = document.getElementById('terminalContainer');
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');

    const isOnline = true; // Remplacez ceci par une vraie vérification du statut

    if (isOnline) {
        statusDot.style.backgroundColor = "#7cff00";
        statusDot.style.boxShadow = "0 0 15px #7cff00";
        statusLabel.textContent = "En ligne";
    } else {
        statusDot.style.backgroundColor = "red";
        statusDot.style.boxShadow = "0 0 15px red";
        statusLabel.textContent = "Hors ligne";
    }

    setTimeout(function() {
        profileContainer.classList.add('move-left');
        setTimeout(function() {
            statusBox.classList.add('show');
            setTimeout(function() {
                profileContainer.classList.add('center');
                setTimeout(function() {
                    terminalContainer.classList.add('show');
                }, 500);
            }, 500);
        }, 700);
    }, 700);

    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputText = terminalInput.value.trim();
            terminalOutput.textContent = ""; // Efface le texte précédent
            terminalInput.value = ""; // Réinitialise le champ de saisie
            
            // Affiche une description après avoir tapé "Enter"
            setTimeout(() => {
                terminalOutput.innerHTML = `
                    <p>Je suis un développeur passionné par la création de solutions innovantes.</p>
                    <p>Expert en JavaScript, CSS, et en développement web, j'aime relever des défis complexes.</p>
                    <p>Mon objectif est de continuer à apprendre et à améliorer mes compétences chaque jour.</p>
                `;
            }, 500);
        }
    });
});
