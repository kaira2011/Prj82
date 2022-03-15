var mouseEvent ="empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="pink";
width=5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color= document.getElementById("color").value;
    width= document.getElementById("width").value;
    radius= document.getElementById("radius").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") {
  ctx.beginPath();
  ctx.strokeStyle=colour;
  ctx.width=2;
  ctx.arc(200,200,40,0,2*Math.PI);
  ctx.stroke(); 
  

  console.log("Last position of x and y coordinates =");
  console.log("x = " + lastPositionOfX + "y = " 
       + lastPositionOfY);
  ctx.moveTo(lastPositionOfX, lastPositionOfY);
  function circle(){
    ctx.beginPath();

  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_mouse_x + "y = " 
          + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, 
          current_position_of_mouse_y);
  ctx.stroke();
  }
  lastPositionOfX = current_position_of_mouse_x; 
  lastPositionOfY = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
} 