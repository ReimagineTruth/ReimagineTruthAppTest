const rainContainer = document.querySelector('.rain');

// Function to create raindrops
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * 100 + '%';
    raindrop.style.animationDuration = Math.random() * 0.6 + 0.4 + 's';
    raindrop.style.animationDelay = Math.random() * 1 + 's';
    rainContainer.appendChild(raindrop);
}

// Generate raindrops
setInterval(createRaindrop, 100);
