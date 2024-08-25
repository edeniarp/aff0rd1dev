document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector('.profile-container');
    const statusBox = document.querySelector('.status-box');
    const statusDot = document.getElementById('statusDot');
    const statusLabel = document.getElementById('statusLabel');
    const terminalContainer = document.getElementById('terminalContainer');
    const terminal = document.getElementById('terminal');

    // Simuler la récupération du statut Discord (en ligne/hors ligne)
    const isOnline = true; // Remplacez ceci par une vraie vérification du statut

    // Définir la couleur et le texte du statut
    if (isOnline) {
        statusDot.style.backgroundColor = "#7cff00"; // Vert clair
        statusDot.style.boxShadow = "0 0 15px #7cff00"; // Lueur verte claire
        statusLabel.textContent = "En ligne";
    } else {
        statusDot.style.backgroundColor = "red";
        statusDot.style.boxShadow = "0 0 15px red";
        statusLabel.textContent = "Hors ligne";
    }

    // Animer le déplacement et l'affichage du statut
    setTimeout(function() {
        profileContainer.classList.add('move-left');
        setTimeout(function() {
            statusBox.classList.add('show');
            setTimeout(function() {
                // Après l'animation, centrer le profil
                profileContainer.classList.add('center');
                // Animer l'apparition du terminal
                terminalContainer.style.opacity = 1;
                startTerminalAnimation();
            }, 500); // Délai pour l'animation du centre
        }, 700); // Délai pour la sortie du statut après le déplacement de l'image
    }, 700); // Délai initial pour commencer l'animation

    function startTerminalAnimation() {
        const commands = [
            "C:\\> python r!ft.py",
            "C:\\> Tapez Enter to enter >"
        ];

        let commandIndex = 0;
        let charIndex = 0;

        function typeCommand() {
            if (commandIndex < commands.length) {
                if (charIndex < commands[commandIndex].length) {
                    terminal.innerHTML += commands[commandIndex][charIndex++];
                    setTimeout(typeCommand, 50); // Vitesse de frappe
                } else {
                    terminal.innerHTML += '\n'; // Nouvelle ligne après chaque commande
                    charIndex = 0;
                    commandIndex++;
                    if (commandIndex === commands.length) {
                        addPrompt();
                    } else {
                        setTimeout(typeCommand, 500); // Délai entre les commandes
                    }
                }
            }
        }

        function addPrompt() {
            terminal.innerHTML += '<span class="typing"></span>';
            document.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    document.querySelector('.typing').remove(); // Supprime le curseur
                    terminal.innerHTML = ''; // Efface le contenu du terminal
                    displayDescription();
                }
            });
        }

        function displayDescription() {
            const description = `
Vous êtes sur la page de [Votre Nom].

Voici une courte description de moi. J'aime coder, explorer de nouvelles technologies, et travailler sur des projets intéressants.`;
            terminal.innerHTML = description; // Affiche la description
        }

        typeCommand(); // Commencer à taper les commandes
    }
});
