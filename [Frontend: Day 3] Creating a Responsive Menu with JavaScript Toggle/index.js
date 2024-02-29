let hamburger = document.querySelector('.Navbar__Link-toggle');

hamburger.addEventListener('click', function() {
    var menuItems = document.querySelector('.Navbar__Items');
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
})