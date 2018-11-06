$(document).ready(() => {
  $('[type=submit]').click(e => {
    e.preventDefault()
    $.getJSON('./ajax', {
      id1: $('[name=id1]').val(),
      id2: $('[name=id2]').val(),
    }, res => {
      $('[name=name1]').val(res.name1)
      $('[name=name2]').val(res.name2)
    })
  })
})

// vi:et:nu:sw=2:ts=2
