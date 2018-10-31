$(document).ready(function() {

  $("#list").click(function(e){
    e.preventDefault()

    $.ajax({
      method: "get",
      url: "./ajax_list",
      success: function(data) {
        content_json = JSON.parse(data)
        $("#list_content").html(content_json["E123456789"])
      }
    })
  })
})

// vi:et:sw=2:ts=2
