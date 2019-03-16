// if you edit your js file,
//   make sure your browser does not cache it

$('#ajax-form button[type=submit]').click((event) => {
  event.preventDefault()
  // no need if button type is not `submit`,
  //   but make it work without ajax is a good practice

  $.get('ajax.php', {
    fname: $('#ajax-form input[name=fname]').val(),
    lname: $('#ajax-form input[name=lname]').val(),
  }, (data) => {
    $('#ajax-output').html(data)
  })
  setTimeout(() => $('#ajax-output').html('loading'), 3000)
  // try to modify the timeout
})
