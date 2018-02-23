var menu = document.getElementById('menu');
var nav = document.getElementsByTagName('nav')[0];
var main = document.querySelector('main');
menu.addEventListener('click', function(e) {
  nav.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function(e) {
  nav.classList.remove('open');
})