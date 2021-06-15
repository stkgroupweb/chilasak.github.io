var images = ['images/cartoons/a5.jpg','images/cartoons/slide1.png','images/cartoons/a1.jpg','images/cartoons/a2.jpg','images/cartoons/a3.jpg','images/cartoons/a4.jpg'];
var i =0;
function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()" , 2000);
}
window.onload = slideShow;


  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });