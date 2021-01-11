(function($) {
  "use strict";
  /*----------------------------
   jQuery MeanMenu
  ------------------------------ */
  $("nav#dropdown").meanmenu();
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });
  // Collapse ibox function
  $("#sidebar ul li").on("click", function() {
    var button = $(this).find("i.fa.indicator-mn");
    button.toggleClass("fa-angle-left").toggleClass("fa-angle-right");
  });
  $("#sidebarCollapse").on("click", function() {
    $("body").toggleClass("mini-navbar");
  });
  /*-----------------------------
  	Menu Stick
  ---------------------------------*/
  $(document).on("click", ".header-right-menu .dropdown-menu", function(e) {
    e.stopPropagation();
  });
})($);