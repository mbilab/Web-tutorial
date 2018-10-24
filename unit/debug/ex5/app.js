$(document).ready(function() {
  $('#bug').click(function(e){
    setTimeout(() => {
      $('#A').html('A')
      console.log('A')
    }, 1000);
    setTimeout(() => {
      $('#B').html('B')
      console.log('B')
    }, 1000);
  })
});

// vi:et:sw=2:ts=2
