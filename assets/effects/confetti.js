const confettiContainer = document.querySelector('.confetti');

// Function to create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = Math.random() * 4 + 3 + 's';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confettiContainer.appendChild(confetti);
}

// Generate confetti
setInterval(createConfetti, 200);
