$(document).ready(function() {

  $("#list").click(function(e){
    e.preventDefault()

    $.ajax({
      method: "get",
      url: "./ajax_list",
      success: function(data) {
        $("#list_content").html(data)
      }
    })
  })

  $("#ajax_search button").click(function(e){
    e.preventDefault()

    $.ajax({
      method: "get",
      url: "./search",
      data: {
        id: $("#ajax_search input[name='id']").val(),
      },
      success: function(data) {
        $("#query_content").text(data)
      }
    })
  })
})

// vi:et:sw=2:ts=2
