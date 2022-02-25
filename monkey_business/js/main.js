var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

var i = 0, text;
      text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel non asperiores corporis tenetur quos odio. Consectetur eaque optio rem natus et deserunt ad nulla nesciunt praesentium? Perspiciatis assumenda dolor illum laboriosam consectetur amet quae iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam praesentium cumque sapiente eos id quo nisi non rerum expedita maxime ipsum voluptate in excepturi consectetur aliquam eveniet, ad deleniti dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum repellendus adipisci dolorem suscipit architecto veniam expedita accusantium magnam nihil?"

function typing(){
  if(i < text.length){
    document.getElementById("waw").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 20);
  }
}

	
		var width=100;
		var difference=2;
		var interveralID =0;
		image = document.getElementById("img1").style.width=width;

		function increase()
		{
			image.style.transform=scale(1.3);
		}
		function decrease()
		{
			clearInterval(interveralID);
			interveralID=setInterval(shrink,10);
		}
		function expand()
		{
			if(width<200)
			{
				width = width+difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
		function shrink()
		{
			if(width>100)
			{
				width = width-difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}