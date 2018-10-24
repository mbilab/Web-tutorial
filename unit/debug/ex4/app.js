$("#animate").click(function(){
  $("#move_box").animate({
    width: "300",
    height: "300",
    left: "200",
  }, 1500 );
  $("#move_box").animate({
    width: "100",
    height: "100",
    left: "0",
  }, 1500 );
})
// vi:et:sw=2:ts=2
