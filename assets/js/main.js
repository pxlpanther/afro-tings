const menuIcon = document.querySelector('.menu-icon');
const navbarNav = document.querySelector('.navbar-nav');

menuIcon.addEventListener('click', () => {
  navbarNav.classList.toggle('show-nav');
});
