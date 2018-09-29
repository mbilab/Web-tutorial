$(document).ready(function() {
  $("#ajax_form button").click(function(e){
    e.preventDefault()

    $.ajax({
      method: "post",
      url: "./ajax_data",
      data: {
        fname: $("#ajax_form input[name='fname']").val(),
        lname: $("#ajax_form input[name='lname']").val(),
      },
      success: function(data) {
        $("#content").text(data)
      }
    })
  })
})
