var clock=setInterval(clocktiming, 1000);  
function clocktiming(){
var d=new Date();
var x=d.toLocaleTimeString();
document.getElementById("demo").innerHTML=x;
}
var dateobj=new Date();
var month= dateobj.getUTCMonth()+1;
var day=dateobj.getUTCDate();
var year=dateobj.getUTCFullYear();
document.write(day +"/" + month +"/" + year);