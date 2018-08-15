$(document).ready(function() {
  $("#nav-dropdown").click(function(){
    if ($("#nav-dropdown").hasClass("dropped")) {
      $("#nav-dropdown").removeClass("dropped");
      $(".navbar-nav").removeClass("drop");
    } else {
      $("#nav-dropdown").addClass("dropped");
      $(".navbar-nav").addClass("drop");
    }
  });
});