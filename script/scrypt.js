window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";}
   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
//      document.getElementById("gora").classList.add("fixed-top");
      document.getElementById("gora").classList.add("trans");
   } else {
      document.getElementById("myBtn").style.display = "none";
//      document.getElementById("gora").classList.remove("fixed-top");
      document.getElementById("gora").classList.remove("trans");
   }
};

function myFunction() {
	var x = document.getElementById("myFile");
	x.disabled = true;
}
 


 // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });