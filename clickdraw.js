//Ibnul Jahan
//SoftDev2 pd7
//K00 -- I See a Red Door
//2018-02-05  

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var effect = 0;
//0 is circles
//1 is rectangles

//sets js for the canvas
//c.setAttribute("onclick", "javascript:runCanvas(e)");
c.addEventListener("click", function(e) { runCanvas(e); });

//sets js for the toggle button
toggle = document.getElementById("toggle");
//toggle.setAttribute("onclick", "javascript:toggle()");
toggle.addEventListener("click", function() { toggle(); });

//sets js for the clear button
clear = document.getElementById("clear");
//clear.setAttribute("onclick", "javascript:clearCanvas(e)");
clear.addEventListener("click", function(e) { clearCanvas(e);});

//switches the toggle
var toggle = function(){
    effect = (effect+1)%2;
    console.log(effect);
}

//draws a white rectangle the size of the canvas
var clearCanvas = function(e){
    e.preventDefault();
    //ctx.fillStyle = "white";
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
}

//draws a rectangle, centered about the mouse's coordinate
var makeRect = function(e){
    console.log("This is the mouse's current coordinates")
    console.log(e.clientX,e.clientY);
    sideLen = 14;
    ctx.fillStyle = "red";
    ctx.fillRect(e.offsetX - (sideLen/2), e.offsetY - (sideLen/2), sideLen, sideLen);
    //ctx.moveTo(e.offsetX, e.offsetY);
}

var makeCircle = function(e){
    console.log("This is the mouse's current coordinates")
    console.log(e.clientX,e.clientY);
    //ctx.beginPath();
    //a 2PI arc is a circle
    ctx.arc(e.offsetX, e.offsetY, 8, 0, Math.PI * 2);
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    //ctx.closePath();
    

}

//runs if the canvas is clicked on
//If the effect is 0, then a circle will be drawn
//If the effect is 1, then a rectangle will be drawn
var runCanvas = function(e){
    //ctx.beginPath();
    if (effect == 0) {
	console.log("The effect is " + effect + " and a circle is being created");
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.moveTo(e.offsetX,e.offsetY);
	makeCircle(e);
	//ctx.closePath();
	//ctx.beginPath();
    } else if (effect == 1) {
	console.log("The effect is " + effect + " and a rectangle is being created");
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.moveTo(e.offsetX,e.offsetY);
	makeRect(e);
    } else {
	console.log("The effect is " + effect + " this is not supposed to happen");
    }
   
    
}
