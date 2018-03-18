window.getZIndex = function (e) {
  var z = window.document.defaultView.getComputedStyle(e).getPropertyValue('z-index');
  if (isNaN(z)) return window.getZIndex(e.parentNode);
    return z;
};

var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
var picId = '';
var infoCls = '';

function allowDrop(event){
  event.preventDefault();
}
function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
  $('.item').remove();
  $('.info').remove();
  $('#add').animate({marginTop:'-60%', opacity:'1'}, 600)
  $('.shopcar').animate({width:'8vw', height:'8vw'}, 200);
  $('.shopcar').animate({width:'6vw', height:'6vw'}, 200);
}

function dragStart(event, id, cls){
  x1 = event.pageX;
  y1 = event.pageY;
  picId = id;
  infoCls = cls;
  event.dataTransfer.setData('text', event.target.id);
}
function dragEnd_star(event){
  x2 = event.pageX;
  y2 = event.pageY;
  if((x2 > x1) && (Math.abs(y1 - y2) < 50)){
    $('#leftpic').animate({marginLeft:'3%', width:'38vw', zIndex:'4'}, 800);
    $('#starpic').animate({marginLeft:'6%', width:'36vw', marginTop:'1%', zIndex:'3'}, 300);
    $('.left').animate({marginLeft:'10%'}, 800);
    $('.star').animate({marginLeft:'100%', opacity:'0'}, 300);
  }
}
function dragEnd_hug(event){
  x2 = event.pageX;
  y2 = event.pageY;
  if((x2 > x1) && (Math.abs(y1 - y2) < 50)){
    $('#starpic').animate({marginLeft:'3%', width:'38vw', zIndex:'4'}, 800);
    $('#hugpic').animate({marginLeft:'9%', width:'34vw', marginTop:'2%', zIndex:'2'}, 300);
    $('.star').animate({marginLeft:'10%', opacity:'1'}, 800);
    $('.hug').animate({opacity:'0'}, 300);
  }
}
function dragEnd_subway(event){
  x2 = event.pageX;
  y2 = event.pageY;
  if((x2 > x1) && (Math.abs(y1 - y2) < 50)){
    $('#hugpic').animate({marginLeft:'3%', width:'38vw', zIndex:'4'}, 800);
    $('#subwaypic').animate({marginLeft:'12%', width:'32vw', marginTop:'3%', zIndex:'1'}, 300);
    $('.hug').animate({marginLeft:'10%', opacity:'1'}, 800);
    $('.subway').animate({opacity:'0'}, 300);
  }
}

$('#leftpic').click(function(){
  var ind = window.getZIndex($('#leftpic')[0]);
  if(ind == 4){
    $('#leftpic').animate({marginLeft: '-50%'}, 600);
    $('#starpic').animate({marginLeft:'3%', marginTop:'0%', zIndex:'4', width:'38vw'}, 800)
    $('.left').animate({marginLeft:'-100%'}, 600);
    $('.star').animate({marginLeft:'10%', opacity:'1'}, 600);
  }
});

$('#starpic').click(function(){
  var ind = window.getZIndex($('#starpic')[0]);
  if(ind == 4){
    $('#starpic').animate({marginLeft: '-50%'}, 600);
    $('#hugpic').animate({marginLeft:'3%', marginTop:'0%', zIndex:'4', width:'38vw'}, 800)
    $('.star').animate({marginLeft:'-100%'}, 600);
    $('.hug').animate({marginLeft:'10%', opacity:'1'}, 600);
  }
});

$('#hugpic').click(function(){
  var ind = window.getZIndex($('#hugpic')[0]);
  if(ind == 4){
    $('#hugpic').animate({marginLeft: '-50%'}, 600);
    $('#subwaypic').animate({marginLeft:'3%', marginTop:'0%', zIndex:'4', width:'38vw'}, 800)
    $('.hug').animate({marginLeft:'-100%'}, 600);
    $('.subway').animate({marginLeft:'10%', opacity:'1'}, 600);
  }
});
