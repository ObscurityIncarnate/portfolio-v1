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

// var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

function onScroll() {
  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Define the scroll distance threshold
  var scrollThreshold = window.innerHeight *0.9;
  const h2 = document.querySelectorAll('h2');
  const iconbtn = document.querySelector('.iconbutton');
  const icnbtnfill  = iconbtn.querySelector('svg');
  if (scrollTop > scrollThreshold && scrollTop < 2* scrollThreshold) {
    // document.body.style.backgroundColor = '#ADD8E6';
    document.body.style.backgroundColor = '#373D3F';
    iconbtn.style.backgroundColor = '#373D3F';
    icnbtnfill.setAttribute('stroke', '#ADE6B8');
    h2.forEach(h2 => h2.style.color = '#ADE6B8');
  } else  if( scrollTop > 2* scrollThreshold && scrollTop < 3* scrollThreshold) {
    document.body.style.backgroundColor = '#ffcd00'; // Original color (e.g., white)]
    iconbtn.style.backgroundColor = '#ffcd00';
    icnbtnfill.setAttribute('stroke', '#404743');
    h2.forEach(h2 => h2.style.color = '#404743');
  }else if(scrollTop > 3* scrollThreshold){
    document.body.style.backgroundColor = '#ff9868';
    iconbtn.style.backgroundColor = '#ff9868';
    icnbtnfill.setAttribute('stroke', 'white');
    h2.forEach(h2 => h2.style.color = 'white');
    // h2.style.color = '#ffffff'
  }else{
    document.body.style.backgroundColor = '#ffffff';
    iconbtn.style.backgroundColor = '#ffffff';
    icnbtnfill.setAttribute('stroke', '#3a864e');
    h2.forEach(h2 => h2.style.color = '#3a864e');
  }
}

// Add the scroll event listener to the window
window.addEventListener('scroll', onScroll);
