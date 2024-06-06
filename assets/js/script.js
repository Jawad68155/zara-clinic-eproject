window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var carousel = document.querySelector('.carousel'); 
    var navbarHeight = navbar.offsetHeight; 
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link'); 
    if (window.scrollY > navbarHeight) {
      navbar.style.transition = 'background-color 0.3s'; 
      navbar.style.backgroundColor = '#4c98af'; 
      navLinks.forEach(function(link) {
        link.style.transition = 'color 0.3s';
        link.style.color = 'dark'; 
      });
    } else {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'transparent'; 
      navLinks.forEach(function(link) {
        link.style.transition = 'color 0.3s'; 
        link.style.color = ''; 
      });
    }
  });
  

  $(document).ready(function() {
    var buttonWidth = $('#scheduleButton').outerWidth();
    $('#scheduleButton').css('border-radius', buttonWidth / 2 + 'px');
});



// map
function initMap() {
  let center = { lat: 40.7128, lng: -74.0060 }; 
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, 
    center: center 
  });
}
$(document).ready(function() {
  initMap();
});
