var x1, x2, y1, y2

const selectItem = i => {
  $(`#information > div:eq(${i})`).animate({marginLeft: 0, opacity: 1}, 600)
  $(`#information > div:lt(${i})`).animate({marginLeft: '-100%', opacity: 0}, 600)
  $(`#information > div:gt(${i})`).animate({marginLeft: '100%', opacity: 0}, 600)
  $(`#items > img`).each(function(j){
    if (j < i) return $(this).animate({marginLeft: '-100%'}, 600)
    let d = j - i
    $(this).animate({marginLeft: (3 * d + 3) + '%', width: (38 - 2 * d) + 'vw', marginTop: d + '%'}, 300)
  })
}
selectItem(0)

$('#items > img')
  .bind('dragstart', e => {
    x1 = e.originalEvent.pageX
    y1 = e.originalEvent.pageY
  })
  .bind('dragend', e => {
    x2 = e.originalEvent.pageX
    y2 = e.originalEvent.pageY
    if ($(e.target).index() == 0) return
    if ((x2 > x1) && (Math.abs(y1 - y2) < 50)) {
      selectItem($(e.target).index() - 1)
    }
  })
  .click(e => {
    if($(e.target).index() == 3) return
    selectItem($(e.target).index() + 1)
  })
  .each(function(i){
    $(this).css({zIndex: 100 - i})
  })

$('.shopcar').bind('drop', e => {
  $('#items > img').remove()
  $('#information').remove()
  $('#add').animate({marginTop: '-60%', opacity: '1'}, 600)
  $('.shopcar').animate({width: '8vw', height: '8vw'}, 200)
  $('.shopcar').animate({width: '6vw', height: '6vw'}, 200)
})

// vi:et:sw=2:ts=2
