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
  .bind('dragstart', e => {
    x1 = e.originalEvent.pageX
    y1 = e.originalEvent.pageY
  })

  .bind('dragend', e => {
    x2 = e.originalEvent.pageX
    y2 = e.originalEvent.pageY
    if ((x2 > x1) && (Math.abs(y1 - y2) < 50)) { //! check the logic

      var topinfo;

      switch(e.target.id){
        case 'starpic':
          $(e.target).animate({marginLeft:'6%', width:'36vw', marginTop:'1%', zIndex:'3'},300);
          topinfo=$('#star');
          break;

        case 'hugpic':
          $(e.target) .animate({marginLeft:'9%', width:'34vw', marginTop:'2%', zIndex:'2'}, 300);
          topinfo=$('#hug');
          break;

        case 'subwaypic':
          $(e.target) .animate({marginLeft:'12%', width:'32vw', marginTop:'3%', zIndex:'1'}, 300);
          topinfo=$('#subway');
          break;
      }

      $(e.target).prev().animate({marginLeft:'3%', width:'38vw', zIndex:'4'}, 500);
      topinfo.animate({marginLeft:'100%', opacity:'0'},300);
      topinfo.prev().animate({marginLeft:'0%'}, 500);
    }
  })
  .click(e => {
    if (getZIndex(e.target) != 4) return
    $(e.target).animate({marginLeft: '-100%'}, 600) //! check the animation
      .next().animate({marginLeft: '3%', marginTop:'0%', opacity: 1, width: '38vw', zIndex: 4}, 800);

    var topinfo;

    switch(e.target.id){
      case 'leftpic':
        topinfo = $('#left');
        break;

      case 'starpic':
        topinfo = $('#star');
        break;

      case 'hugpic':
        topinfo = $('#hug');
        break;

      case 'subwaypic':
        topinfo = $('#subway');
        break;
    }
    topinfo.animate({marginLeft:'-100%'}, 600);
    topinfo.next().animate({marginLeft:'0%', opacity:'1'}, 600);
  })

$('.shopcar').bind('drop', e => {
  $('#items > img').remove()
  $('.info').remove()
  $('#add').animate({marginTop:'-60%', opacity:'1'}, 600)
  $('.shopcar').animate({width: '8vw', height: '8vw'}, 200)
  $('.shopcar').animate({width: '6vw', height: '6vw'}, 200)
})
