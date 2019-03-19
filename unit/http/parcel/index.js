const jquery = require('jquery')
window.$ = window.jQuery = jquery

$(document).ready(function() {
  $("#ajax-form button").click(function(){
    console.log({
        fname: $('#ajax-form input[name=fname]').val(),
        lname: $('#ajax-form input[name=lname]').val()
      })
    $.ajax({
      method: "get",
      data: {
        fname: $('#ajax-form input[name=fname]').val(),
        lname: $('#ajax-form input[name=lname]').val()
      },
      url: "./ajax-data",
      success: function(data) {
        $("#ajax-output").html(data)
      }
    })
  })
})
