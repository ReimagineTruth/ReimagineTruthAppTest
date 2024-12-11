const starsContainer = document.querySelector('.stars');

// Function to create a star
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    starsContainer.appendChild(star);
}

// Generate stars
setInterval(createStar, 100);
