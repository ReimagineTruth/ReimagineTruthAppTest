// Dark Mode Toggle Logic
const darkModeButton = document.getElementById('dark-mode-toggle');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

