//elements pointer
let menu = document.getElementsByClassName("menu");

//Burguer Menu
function burguerMenu(x) {
    x.classList.toggle("openMenu");
  } 

menu[0].addEventListener("click", ()=>
{
  burguerMenu(menu[0]);
});
