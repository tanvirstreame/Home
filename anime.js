var i = 0;
var txt = `TANVIR ISLAM`;
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
$(document).ready(function(){
    $("#fade").fadeIn();
});