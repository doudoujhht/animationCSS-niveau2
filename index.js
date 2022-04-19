
var menuToggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
menuToggle.onclick = function () {
    //https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // en gros ca ajoute ou sprime active dependament de comment c'etait
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
};
var list = document.querySelectorAll("li");
function activeLink() {
    list.forEach(function (item) {
        return item.classList.remove('active');
    });
    this.classList.add('active');
}
list.forEach(function (item) {
    return item.addEventListener('click', activeLink);
});
