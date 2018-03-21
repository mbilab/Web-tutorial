const getZIndex = e => {
  var z = window.document.defaultView.getComputedStyle(e).getPropertyValue('z-index')
  if (isNaN(z)) return window.getZIndex(e.parentNode)
  return z
}

var x1 = 0
var x2 = 0
var y1 = 0
var y2 = 0

$('#items > img')
  .bind('dragend', e => {
    x2 = e.originalEvent.pageX
    y2 = e.originalEvent.pageY
    if ((x2 > x1) && (Math.abs(y1 - y2) < 50)) { //! check the logic
      $(e.target).animate({marginLeft: '10%', width:'38vw', zIndex: 4}, 800) //! check the animation
        .next().animate({marginLeft: '100%', marginTop:'1%', width:'36vw', zIndex: 3}, 300)
    }
  })
  .bind('dragstart', e => {
    x1 = e.originalEvent.pageX
    y1 = e.originalEvent.pageY
  })
  .click(e => {
    if (getZIndex(e.target) != 4) return
    $(e.target).animate({marginLeft: '-100%'}, 600) //! check the animation
      .next().animate({marginLeft: '3%', marginTop:'0%', opacity: 1, width: '38vw', zIndex: 4}, 800)
  })

$('.shopcar').bind('drop', e => {
  $('#items > img').remove()
  $('.info').remove()
  $('#add').animate({marginTop:'-60%', opacity:'1'}, 600)
})
