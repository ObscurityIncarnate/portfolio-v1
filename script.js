function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);
    showPopup(true);
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

let index = 0; // Current slide
let currentslide2 = 0;
let visdeterminant = false;
let visdeterminant2 = false;
function slidervis(n){
  if(n===1){
    visdeterminant = !visdeterminant;
    if(visdeterminant){
      document.getElementById('slider').style.display = 'block';
      showSlide(0, 1);
    }else{
      document.getElementById('slider').style.display = 'none';
    }
  }else{
    visdeterminant2 = !visdeterminant2;
    if(visdeterminant2){
      document.getElementById('slider2').style.display = 'block';
      showSlide(0, 2);
    }else{
      document.getElementById('slider2').style.display = 'none';
    }
  }

}
function showSlide(n, m) {
  if(m === 1){
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.style.display = i === n ? "flex" : "none";
    });
  }else{
    const slides = document.querySelectorAll(".slide2");
    slides.forEach((slide, i) => {
      slide.style.display = i === n ? "flex" : "none";
    });
  }

}
function changeSlides(n,m) {
  if(m === 1){
    const slides = document.querySelectorAll(".slide");
    index += n;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    showSlide(index, 1);
  }else{
    const slides = document.querySelectorAll(".slide2");
    currentslide2 += n;
    if (currentslide2 >= slides.length) currentslide2 = 0;
    if (currentslide2 < 0) currentslide2 = slides.length - 1;
    showSlide(currentslide2, 2);
  }

}
