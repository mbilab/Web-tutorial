$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    /* Step 8:
     * try comment this line
     *  the default non-ajax request will be performed
     *  the whole page is returned, which is not what we want
     * not necessary if button type is not `submit`
     *  try remove `type="submit"` in the last code snippet
     * but make the form work without ajax is a good practice
     */

    $.get('./step5')
    /*
    $.get('./step5',{
        fname: $("input[name='fName']").val(),
        lname: $("input[name='lName']").val()
    }, (data) => {
        $('#ajax-output').html(data)
    })
    */



    // Step 11 code goes here
  })
});
