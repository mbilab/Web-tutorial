const getZIndex = e => {
  var z = window.document.defaultView.getComputedStyle(e).getPropertyValue('z-index')
  if (isNaN(z)) return window.getZIndex(e.parentNode)
  return z
}
var x1, x2, y1, y2 = 0;
var info = {'leftpic':'#left', 'starpic':'#star', 'hugpic':'#hug', 'subwaypic':'#subway'}
var pic = ['leftpic', 'starpic', 'hugpic', 'subwaypic']

$('#items > img')
  .bind('dragstart', e => {
    x1 = e.originalEvent.pageX
    y1 = e.originalEvent.pageY
  })

  .bind('dragend', e => {
    if(e.target.id == 'leftpic') return

    x2 = e.originalEvent.pageX
    y2 = e.originalEvent.pageY

    if ((x2 > x1) && (Math.abs(y1 - y2) < 50)) { //! check the logic
      for(var i = 0; i < 4; i ++){
        if(e.target.id == pic[i]){
          $(e.target).animate({marginLeft: (3 * i + 3) + '%', width: (38 - 2 * i) + 'vw', marginTop: i + '%', zIndex: (4 - i)}, 300)
            .prev().animate({marginLeft: '3%', width: '38vw', zIndex: '4'}, 500);
        }
      }

      $(info[e.target.id]).animate({marginLeft: '100%', opacity: '0'}, 300)
        .prev().animate({marginLeft: '0%'}, 500);
    }
  })
  .click(e => {
    if (getZIndex(e.target) != 4) return
    $(e.target).animate({marginLeft: '-100%'}, 600) //! check the animation
      .next().animate({marginLeft: '3%', marginTop:'0%', opacity: 1, width: '38vw', zIndex: 4}, 800);

    $(info[e.target.id]).animate({marginLeft: '-100%'}, 600)
      .next().animate({marginLeft: '0%', opacity: '1'}, 600);
  })

$('.shopcar').bind('drop', e => {
  $('#items > img').remove()
  $('.info').remove()
  $('#add').animate({marginTop: '-60%', opacity: '1'}, 600)
  $('.shopcar').animate({width: '8vw', height: '8vw'}, 200)
  $('.shopcar').animate({width: '6vw', height: '6vw'}, 200)
})
