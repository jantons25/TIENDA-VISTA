const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link')

menu.addEventListener('click',function(){
    menuList.classList.toggle('nav__list--show')
})

links.forEach(function(link){
    link.addEventListener('click',function(){
        menuList.classList.remove('nav__list--show');
    })
})

var contenedor = document.getElementById('.header__portada');
var elementoMovible = document.getElementById('.header__figure');

contenedor.addEventListener('mousemove', function(event) {
var x = event.clientX - contenedor.getBoundingClientRect().left;
var y = event.clientY - contenedor.getBoundingClientRect().top;

elementoMovible.style.left = x + 'px';
elementoMovible.style.top = y + 'px';
});