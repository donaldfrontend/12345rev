function vidPlay() {  
  $("#video1").get(0).play();  
};
function vidPause() {
	$("#video1").get(0).pause();
};
$(document).ready(function(){
  $("#textToggler").click(function(){
    $(".toggleText").toggle();
  });
});
function toggleImage() {
  $(".hiddenclickimg").toggle();
};