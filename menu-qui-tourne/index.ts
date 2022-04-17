export default function(){}



let menuToggle:HTMLElement = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
menuToggle.onclick= function(){
    //https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // en gros ca ajoute ou sprime active dependament de comment c'etait
    menu.classList.toggle("active")
    menuToggle.classList.toggle("active")
}

const list = document.querySelectorAll("li")
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((item)=>
item.addEventListener('click',activeLink))