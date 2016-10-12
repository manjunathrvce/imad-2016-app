console.log('Loaded!');
// changes the main text to new value
var element=document.getElementById('main-text');
    element.innerHTML='New Value';
var marginLeft = 0;

function moveRight(){
  marginLeft=marginLeft+10;
  image.style.marginLeft=marginLeft+'px';
}


var image=document.getElementById('madi');
    image.onclick=function(){
        var interval = setInterval(moveRight,100);
    };