




// Menu mobile 
const mobileMenu = document.querySelector(".modal__menuMobile");
const openMenuMobile = document.querySelector(".open__menu");
const menuContainer = document.querySelector(".modal__containerMobile");

openMenuMobile.addEventListener("click", function(){
    mobileMenu.classList.contains("open__menuMobile") ? mobileMenu.classList.remove("open__menuMobile") : mobileMenu.classList.add("open__menuMobile");
});
menuContainer.addEventListener("click", function(event){
    event.stopPropagation();
});




// Search Modal
const searchBtns = document.querySelectorAll(".searchBtn");
const search = document.querySelector(".modal__search");
const searchContainer = document.querySelector(".modal__containerSearch");
const searchClose = document.querySelector(".modal__closeSearch");

function showSearch() {
    search.classList.add("open__search")
}
function hiddenSearch() {
    search.classList.remove("open__search")
}
    for (const searchBtn of searchBtns) {
        searchBtn.addEventListener("click", showSearch); 
}
search.addEventListener("click", hiddenSearch);
searchClose.addEventListener("click", hiddenSearch);
searchContainer.addEventListener("click", function(event){
    event.stopPropagation();
});


// Click change color menu list
if(window.location.href.includes('flower.html')){
  document.querySelector('#flowersPage').classList.add('menu__clickActive');
} else if(window.location.href.includes('fruit.html')){
  document.querySelector('#fruitPage').classList.add('menu__clickActive');
} else if(window.location.href.includes('vegetable.html')){
  document.querySelector('#vegetablesPage').classList.add('menu__clickActive');
} else if(window.location.href.includes('sale.html')){
  document.querySelector('#salePage').classList.add('menu__clickActive');
} else if(window.location.href.includes('contact.html')){
  document.querySelector('#contactPage').classList.add('menu__clickActive');
} 



// Navbar scroll
var pcTablet = window.matchMedia("(min-width: 740px)");
var mobile = window.matchMedia("(max-width: 739px)");
// Navigation tablet & pc
var mainNavElement = document.querySelector("#header");
scrollFunction();
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if(pcTablet.matches){
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10 && document.body.clientWidth >= 740
    ) {
      mainNavElement.style.backgroundColor = "#fff";
    } else {
      mainNavElement.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    }
  } else if(mobile.matches){
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100 && document.body.clientWidth < 739
    ) {
      mainNavElement.style.display = "none";
    } else {
      mainNavElement.style.display = "";
    }
  } 
}




