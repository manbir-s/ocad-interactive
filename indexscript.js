function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var canvas; 
var ctx;
var circle;
var aCircle = [];  
setUpCanvas(); 

function setUpCanvas(){
	canvas = document.createElement("canvas");
	// canvas.style.border = "5px solid black"; 
	var W = 2200;
	var H = 300;
	canvas.height = H;
	canvas.width = W;
	ctx = canvas.getContext("2d"); 
	document.getElementById("wrapper").appendChild(canvas); 
}

createCircles();
setInterval(drawCircles("red"), 50);
setInterval(function(){clear();drawCircles()},50); 

function clear(){
	ctx.clearRect(0,0,2200,700); 
}

function drawCircles(color){
	for(var i=0; i<aCircle.length; i++){
		ctx.beginPath(); 
		ctx.arc(aCircle[i].x+=aCircle[i].dx, aCircle[i].y+=aCircle[i].dy,aCircle[i].r,0,2*Math.PI); 
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();
		if(aCircle[i].x > 2200+aCircle[i].r){aCircle[i].x = 0-aCircle[i].r} 
			if(aCircle[i].y > 800+aCircle[i].r){aCircle[i].y = 0-aCircle[i].r} 
	
	}
}


function createCircles(){
	for(var i=0; i<500; i++){
		circle = {
			x: rand(2300), 
			y: rand(700), 
			r: rand(50),
			dx: rand(5), 
			dy: rand(5)
		}
		aCircle.push(circle); 
	}
}

function rand(max){
	return Math.random()*max
}
function randi(max){
	return Math.floor(Math.random()*max) 
}


function bgred() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "red";
}
function bgblue() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "blue";
}
function bggreen() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "green";
}
function bgyellow() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "yellow";
}
function bgorange() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "orange";
}
function bgpurple() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "purple";
}
function bgwhite() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "white";
}
function bggrey() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "grey";
}
function bgblack() {
	document.querySelectorAll("canvas")[0].style.backgroundColor = "black";
}


function red() {
	drawCircles("red");
}
function blue() {
	drawCircles("blue");
}
function green() {
	drawCircles("green");
}
function yellow() {
	drawCircles("yellow");
}
function orange() {
	drawCircles("orange");
}
function purple() {
	drawCircles("purple");
}
function white() {
	drawCircles("white");
}
function grey() {
	drawCircles("grey");
}
function black() {
	drawCircles("black");
}