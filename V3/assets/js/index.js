
// variables
var $headerTop = $(".header-top");
var $nav = $("nav");



// toggle menu
$headerTop.find("a").on("click", function() {
  $(this).parent().toggleClass("open-menu");
});



// fullpage customization
$("#fullpage").fullpage({
  sectionSelector: ".vertical-scrolling",
  slideSelector: ".horizontal-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ["firstSection", "secondSection", "thirdSection", "fourthSection", "fifthSection", "sixthSection", "seventhSection"],
  menu: "#menu",

  afterLoad: function(anchorLink, index) {
    $headerTop.css("background", "rgba(68, 90, 104, .1)");
    $nav.css("background", "rgba(68, 90, 104, .1)");
    if (index === 5) {
        $("#fp-nav").hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index === 5) {
      $("#fp-nav").show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink === "fifthSection" && slideIndex === 1) {
      $.fn.fullpage.setAllowScrolling(false, "up");
      $headerTop.css("background", "transparent");
      $nav.css("background", "transparent");
      $(this).css("background", "#374140");
      $(this).find("h2").css("color", "white");
      $(this).find("h3").css("color", "white");
      $(this).find("p").css(
        {
          "color": "#DC3522",
          "opacity": 1,
          "transform": "translateY(0)"
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink === "fifthSection" && slideIndex === 1) {
      $.fn.fullpage.setAllowScrolling(true, "up");
      $headerTop.css("background", "rgba(0, 47, 77, .3)");
      $nav.css("background", "rgba(0, 47, 77, .25)");
    }
  }
});
