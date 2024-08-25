let player;
let profilePic = document.getElementById('profilePic');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'wBHlLBRVUN0',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        animateProfilePic();
    }
}

function animateProfilePic() {
    setInterval(function() {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            profilePic.classList.add('bounce');
            setTimeout(() => profilePic.classList.remove('bounce'), 300);
        }
    }, 600); // Ajuster cette valeur pour correspondre au rythme
}
