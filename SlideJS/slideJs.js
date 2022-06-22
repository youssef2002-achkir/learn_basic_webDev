//get slide items
var slideItems = Array.from(document.querySelectorAll(".slide-container img"));

//get number of slides
var slideCount = slideItems.length;

//set current slide
var currentSlide = 1;

//slide number element
var slideNumber = document.getElementById("slide-number");

//previous and next buttons
var nextButton = document.getElementById("next"),
    prevButton = document.getElementById("prev");

//handle your click on privious and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//

//Previous and next buttons cintrolling functions
function nextSlide() {
    console.table(slideItems);
}
function prevSlide() {
    console.log(slideCount);
}