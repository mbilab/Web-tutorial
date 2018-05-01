const insert_data = $form => {
  id: $form.find('.id').val(),
  name: $form.find('.name').val(),
  age: $form.find('.age').val(),
}

$('#mysql_insert_submit').click(() => {
  //! why php_? where the .php file?
  $.post('php_mysql_insert.php', insert_data($('#mysql_insert')), data => {
    $('#mysql_insert .result').html(data)
  })
})

$('#mysql_query_submit').click(() => {
  $.post('php_mysql_query.php', {name: $('#mysql_query .name').val()}, data => {
      $('#mysql_query_result').html(data)
  })
})

$('#mongo_insert_submit').click(() => {
  $.post({
    url: "php_mongo_insert.php",
    type: "post",
    data: {
      name: $('#mongo_insert_name').val(),
      age: $('#mongo_insert_age').val()
    },
    success: (res) => {
      $('#mongo_insert_result').html(res);
    }
  });
});

$("#mongo_query_submit").click(() => {
  $.post({
    url: "php_mongo_query.php",
    type: "post",
    data: {
      name: $('#mongo_query_name').val(),
    },
    success: (res) => {
      $('#mongo_query_result').html(res);
    }
  })
});

// vi:et:sw=2:ts=2
