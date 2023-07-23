function toggleMenu() {
  const menu = document.querySelector('.topnav ul');
  const icon = document.querySelector('.topnav .icon');
  const logo = document.querySelector('.topnav .logo');
  if (window.innerWidth <= 600) { // Modo hamburguesa
    menu.classList.toggle('show-nav');
    const isMenuShown = menu.classList.contains('show-nav');
    icon.innerHTML = isMenuShown ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
  } else { // Modo desktop
    menu.classList.remove('show-nav');
    icon.innerHTML = '<i class="fa fa-bars"></i>';
    logo.classList.toggle('opposite');
  }
}