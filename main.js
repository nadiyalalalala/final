window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
document.getElementById("Nur-Sultan").addEventListener("mouseover", mySecondFunction);

function mySecondFunction() {
  alert ("Welcome to the travel website!");
}
$("#hide").click(function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });
  var aud = document.getElementById("myAudio");
  aud.onloadstart = function() {
  alert("Starting to load audio");
};
$(document).ready(function() {
  $("input").click(function() {
      $("#Geeks").prop("value", "Prop Click");
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#registration").validate({
    rules: {
      fullname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
  
  });
});

