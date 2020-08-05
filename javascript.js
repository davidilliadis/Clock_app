var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString('en-US');
  document.getElementById("reloj").innerHTML = t 
  
}