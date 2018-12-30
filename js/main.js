
$(document).ready(function(){
  $('.slider-block').slick({
    autoplay: true,
    infinite: true,
  	autoplaySpeed: 2000,
  	slidesToShow: 1,
  	adaptiveHeight: true, 
  });
});


document.getElementById('toggle-btn').onclick = function() {
	var x= document.getElementById('nav-mobile');
		if (x.className ==="nav-mobile-block") {
			x.className += " nav-mobile_visible";
		}
		else{
			x.className="nav-mobile-block";
		}
	}
  