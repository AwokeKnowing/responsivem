//include after jquery, and you need <!doctype html>, and use em for everything (including fonts) instead of px
var rtime=new Date()-1000,resizetimeout=false,resizedelta=60,resizeemx=100,resizeemy=100;

$(window).resize(function(){
  rtime=new Date();
  if(resizetimeout==false){
    resizetimeout=true;setTimeout(resizeend,resizedelta);}}
).resize(); 

function resizeend(){
  if(new Date()-rtime<resizedelta)
    setTimeout(resizeend,resizedelta);
  else{
    resizetimeout = false;
	$('body').css('font-size','0em');//get rid of scrollbars for calculation
    var wx=$(window).width(),wy=$(window).height();
    $('body').css('font-size',wx/wy>=resizeemx/resizeemy?wy/resizeemy:wx/resizeemx);
  }
}

//override default minimum width and height in em. If your app is 16:9 you might use responsivem(160,90); and your main div should be 160em by 90em
function responsivem(xem,yem){
  resizeemx=xem;resizeemy=yem;$(window).resize();
}