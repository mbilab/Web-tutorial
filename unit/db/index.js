const insert_data = $form => { return {
  id: $form.find('input[name="id"]').val(),
  name: $form.find('input[name="name"]').val(),
  age: $form.find('input[name="age"]').val(),
}}

$('#mysql_insert .submit').click(() => {
  $.post('php/mysql.php', insert_data($('#mysql_insert')), data => {
    $('#mysql_insert .result').html(data)
  })
})

$('#mysql_query .submit').click(() => {
  $.post('php/mysql.php', {name: $('#mysql_query input[name="name"]').val()}, data => {
    $('#mysql_query_result').html(data)
  })
})

$('#mongo_insert .submit').click(() => {
  $.post('php/mongo_insert.php', insert_data($('#mongo_insert')), data => {
    $('#mongo_insert .result').html(data)
  })
})

$("#mongo_query .submit").click(() => {
  $.post('php/mongo_query.php', {name: $('#mongo_query input[name="name"]').val()}, data => {
    $('#mongo_query .result').html(data)
  })
})

// vi:et:sw=2:ts=2
