// Left Menu collapse
const brandLists = document.querySelectorAll(".brand__title");

for(let i = 0; i < brandLists.length; i++){
    brandLists[i].addEventListener('click', function() {
        brandLists[i].closest('.content__brand').querySelector('.menu__list').classList.toggle('open__leftMenu');
        closeMenu(i);
    });
}

function closeMenu(index){
    for(var i = 0; i < brandLists.length; i++){
        if(i != index){
            brandLists[i].closest('.content__brand').querySelector('.menu__list').classList.remove('open__leftMenu');
        }
    }
}

// Sort 
const sortContent = document.querySelector(".box__list li");
const openSort = document.querySelector(".brand__sort");

sortContent.addEventListener("click", function(){
    openSort.classList.contains("open__sort") ? openSort.classList.remove("open__sort") : openSort.classList.add("open__sort");
});



// Previous Slide
function prevSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === 0) {
      nextSlideIndex = slideArray.length - 1;
    } else {
      nextSlideIndex = currentSlideIndex - 1;
    }
   
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
   
      document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
  }
 
// Next Slide
function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === slideArray.length - 1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    currentSlideIndex = nextSlideIndex;
}






// Pagination
// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 5;

element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><ion-icon name="chevron-back-outline"></ion-icon></span></li>`;
  }

  if(page > 2){
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if(page == plength){
      active = "active";
    }else{
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ 
    if(page < totalPages - 2){ 
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span><ion-icon name="chevron-forward-outline"></ion-icon></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //rerun the li tag
}






