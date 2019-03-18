
$( document ).ready(function() {
  // Step 8 code goes here
  $([selector of the submit button of the ajax form]).click((event) => {
    /* Step 8:
     * try comment this line
     *  the default non-ajax request will be performed
     *  the whole page is returned, which is not what we want
     * not necessary if button type is not `submit`
     *  try remove `type="submit"` in the last code snippet
     * but make the form work without ajax is a good practice
     */
    event.preventDefault()

    $.get('./step5')
    // Step 9 code goes here
    // Step 10 code goes here
  })
});
