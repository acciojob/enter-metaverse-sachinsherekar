//your JS code here. If required.
// function myFunction(){
// 	document.getElementById("status").innerHTML=<h1> Entered Metaverse </h1>
// }
 
let status = document.getElementById('status');
let enterBtn = document.getElementById('enterBtn');

// Add event listener to the button
enterBtn.addEventListener('click', function() {
  // Change the text of the p tag
  status.innerHTML = `<h1>Entered Metaverse</h1>`;
});