const snowflakesContainer = document.querySelector('.snowflakes');

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'; // Random fall speed
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay
    snowflakesContainer.appendChild(snowflake);
}

// Generate snowflakes
setInterval(createSnowflake, 200);
