let carouselIndex = 1;
showCarousels(carouselIndex);

function nextCarousel(n) {
    showCarousels(carouselIndex += n);
}

function currentCarousel(n) {
  showCarousels(carouselIndex = n);
}

function showCarousels(n) {
  let i;
  let carousels = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > carousels.length) {carouselIndex = 1}
    if (n < 1) {carouselIndex = carousels.length}
    for (i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    carousels[carouselIndex-1].style.display = "block";
  dots[carouselIndex-1].className += " active";
}



let carouselIndex2 = 1;
showCarousels2(carouselIndex2);

function nextCarousel2(n) {
    showCarousels2(carouselIndex2 += n);
}

function currentCarousel2(n) {
  showCarousels2(carouselIndex2 = n);
}

function showCarousels2(n) {
  let i;
  let carousels = document.getElementsByClassName("carousel-2");
  let dots = document.getElementsByClassName("dot-2");
  if (n > carousels.length) {carouselIndex2 = 1}
    if (n < 1) {carouselIndex2 = carousels.length}
    for (i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    carousels[carouselIndex2-1].style.display = "block";
  dots[carouselIndex2-1].className += " active";
}













