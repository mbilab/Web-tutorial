const insert_data = $form => { return {
  id: $form.find('input[name="id"]').val(),
  course: $form.find('input[name="course"]').val(),
}}

$('#mysql_insert .submit').click(() => {
  $.post('mysql.php', insert_data($('#mysql_insert')), data => {
    $('#mysql_insert .result').html(data)
  })
})

$('#mysql_query .submit').click(() => {
  $.post('mysql.php', {name: $('#mysql_query input[name="name"]').val()}, data => {
    $('#mysql_query .result').html(data)
  })
})

// vi:et:sw=2:ts=2
