var modal = document.getElementById("dialogModal");

// Get the button that opens the modal
var btn = document.getElementById("button");
// Get the <p> element that show the date
var p = document.getElementById("showDate");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal and show the date 
btn.onclick = function() {
  modal.style.display = "block";
  p.innerHTML = new Date(); 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}