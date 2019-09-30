//hamburger Menu
//
//


const OpenMenu = document.getElementsByClassName('SlideMenuOpen');
for (i=0; i<OpenMenu.length; i++) {
  OpenMenu[i].addEventListener('click', openSlideMenu);
}

function openSlideMenu(){
  document.getElementById('menu').style.width = '400px';
  document.getElementById('list-of-lists').style.marginLeft ='400px';
}

const CloseMenu = document.getElementsByClassName('SlideMenuClose');
for (i=0; i<CloseMenu.length; i++){
  CloseMenu[i].addEventListener('click', closeSlideMenu);
}

function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('list-of-lists').style.marginLeft ='0';
}
