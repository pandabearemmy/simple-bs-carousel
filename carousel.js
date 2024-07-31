let imageArray = [];
let currentSlide = 0;
let count = 0;
let imageUrls = ['/img/exa1.jpeg','/img/exa2.jpeg','/img/exa3.jpeg'];

function getImages() {
    imageArray = [...imageUrls];
    count = imageArray.length;
    console.log(count);
    console.log(imageArray); // To see the array of images
    console.log(imageArray[0]);
    if (count > 0) {
        slideShow(imageArray[0]);
    }
    return imageArray; // Return the array if needed
}

function slideShow(slide) {
    const slideImage = document.getElementById('slideImage');
    slideImage.src = slide;
}

function getSlide(slide) {
    const slideImage = document.getElementById('slideImage');
    let slideNumber = slide;
    let image = imageArray[slideNumber];
    slideImage.src = image;
}

document.addEventListener('DOMContentLoaded', function() {
  getImages();

  document.getElementById("carousel-control-next").addEventListener('click', function() {
    // Increment currentSlide and reset if it exceeds the count
    currentSlide++;
    if (currentSlide >= count) {
        currentSlide = 0;
    }

    // Show the current slide
    getSlide(currentSlide);
  });

  document.getElementById("carousel-control-prev").addEventListener('click', function() {
    // Decrement currentSlide and reset to the last slide if it goes below zero
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = count - 1;
    }

    // Show the current slide
    getSlide(currentSlide);
  });
});