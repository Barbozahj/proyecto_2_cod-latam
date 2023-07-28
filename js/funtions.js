function toggleMenu() {
  let nav = document.querySelector('.topnav ul');
  let menuIcon = document.querySelector('#icon i');
  let logo = document.querySelector('.topnav');
  
  nav.classList.toggle('show-nav');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
  
}

function activarDesactivarMenu() {
  let menuItems = document.getElementsByClassName("menu-item");

  // Agregar evento onclick a cada elemento del menú
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
      // Desactivar la clase 'active' de todos los elementos del menú
      let elementosMenu = document.getElementsByClassName("menu-item");
      for (let j = 0; j < elementosMenu.length; j++) {
        elementosMenu[j].querySelector("a").classList.remove("active");
      }

      // Activar la clase 'active' para el elemento seleccionado
      this.querySelector("a").classList.add("active");
    });
  }
}

activarDesactivarMenu();



 
 
 
 

 


