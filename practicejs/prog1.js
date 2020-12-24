
function func1()
{
    var val1=document.getElementById("para1");
    val1.innerHTML="My name is ARJU SAHU";

}
var buttonone=document.getElementById("button1");
buttonone.addEventListener("click",func1);

var buttontwo=document.getElementById("button2");
buttontwo.addEventListener("click",func2);
function func2()
{
    var val2=document.getElementById("para2");
    val2.innerHTML="learning coding from newton school";
}