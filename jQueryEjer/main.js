$(document).ready(function() {
  $('#toggleButton').click(function() {
    $('#miParrafo').toggleClass('red-text');
  });
});

function changeColor() {
  var paragraph = document.getElementById("paragraph");
  paragraph.classList.toggle("blue");
}
