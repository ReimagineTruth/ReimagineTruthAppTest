const firefliesContainer = document.querySelector('.fireflies');

// Function to create a firefly
function createFirefly() {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.left = Math.random() * 100 + '%';
    firefly.style.top = Math.random() * 100 + '%';
    firefliesContainer.appendChild(firefly);
}

// Generate fireflies
setInterval(createFirefly, 200);
