$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
    // Step 9 and step 10 code goes here

    $.get('./step5')

    // Step 11 code goes here
  })
});
