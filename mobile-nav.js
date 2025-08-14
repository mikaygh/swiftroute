// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu and dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navbar');
    const navLinks = document.getElementById('navLinks');

    if (!nav.contains(event.target)) {
        navLinks.classList.remove('active');
        document.querySelectorAll('.media-dropdown').forEach(dd => dd.classList.remove('show'));
    }
});

// Close menu on scroll
window.addEventListener('scroll', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.querySelectorAll('.media-dropdown').forEach(dd => dd.classList.remove('show'));
    }
});

// Toggle a dropdown under the clicked parent li
function toggleDropdown(el) {
    const dropdown = el.querySelector('.media-dropdown');
    if(dropdown) {
        dropdown.classList.toggle('show');
    }
}
