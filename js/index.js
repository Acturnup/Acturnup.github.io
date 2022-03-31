
function buttonClicked(){
    document.getElementById('button-1').classList.toggle('is-red');
    console.log('button-clicked');
}

// add date // runs the date function
function displayDate() {
  // id demo is a <p> </p> tag which will write the date function
  document.getElementById("demo").innerHTML = Date();
      console.log('button-clicked11');
}
// window that takes in all the buttons with addEventListener
function windowLoaded(){
    document.getElementById('button-1').addEventListener('click', buttonClicked);
    //Add button for date // ask for id, then ask for the event (click), then the function name (displayDate)
    document.getElementById("myBtn").addEventListener("click", displayDate);
}

window.onload = windowLoaded;
