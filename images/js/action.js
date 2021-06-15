var images = ['images/movies/black-banner.png','images/movies/supergirl-banner.jpg','images/movies/b2.jpg','images/movies/b1.jpg','images/movies/wanda-banner.jpg','images/movies/transformer-banner.jpg'];
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