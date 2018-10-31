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

  $("#search button").click(function(e){
    e.preventDefault()

    $.ajax({
      method: "get",
      url: "./ajax_search",
      data: {
        id1: $("#search input[name='id1']").val()
        id2: $("#search input[name='id2']").val()
      },
      success: function(data) {
        $("#query_content").text(data)
      }
    })
  })
})

// vi:et:sw=2:ts=2
