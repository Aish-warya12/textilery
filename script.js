document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    // Open the side navigation when the hamburger menu is clicked
    hamburger.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    // Close the side navigation when the close button is clicked
    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('active'); // Remove the active class
    });
});
