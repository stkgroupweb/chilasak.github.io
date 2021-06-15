var images = ['images/1.jpg','images/2.jpg','images/5.jpg','images/s-1.jpg','images/s-4.jpg'];
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