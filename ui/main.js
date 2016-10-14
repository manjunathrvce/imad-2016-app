/*console.log('Loaded!');
// changes the main text to new value
var element=document.getElementById('main-text');
    element.innerHTML='New Value';
var marginLeft = 0;

function moveRight(){
  marginLeft=marginLeft+4;
  image.style.marginLeft=marginLeft+'px';
}


var image=document.getElementById('madi');
    image.onclick=function(){
        var interval = setInterval(moveRight,10);
    };
    */
    
    
    
// counter coding

button=document.getElementById('counter');
button.onclick = function(){
    
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a varaiable
  request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //Take some action
          if(request.status===200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Not Done Yet
  };
  
  //Make the Request
  request.open('GET','http://manjunathrvce.imad.hasura-app.io/counter',true);
  request.send(null);
};




//submit Name

var inputName = document.getElementById('name');
var input = inputName.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a Request to the server and Send the Name 
    // Capture thelist of names and render it as a list
    var names=['name 1','name 2','name 3','name 4'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>'+names[i]+',</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};