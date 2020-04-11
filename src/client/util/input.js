window.addEventListener("mousemove",onMouseMove,false);  
window.addEventListener("mousedown",onMouseDown,false);  
window.addEventListener("mouseup",onMouseUp,false);  
window.addEventListener("keydown",onKeyDown,false);
window.addEventListener("keyup",onKeyUp,false); 
function Input(){
	this.mousePos = new vector2d(0,0);
	this.clickPos = new vector2d(0,0);
	this.isKeyPressed = [];
	this.isMouseClick = false; 
	return this;
}

Input.prototype.isKeyDown = function(keyCode){ 
	if(this.isKeyPressed[keyCode] == true){   
		return true;
	}
	else
		return false; 
} 
Input.prototype.isClickDown = function(){
	if(this.isMouseClick == true){    
		return true;
	}
	else{ 
		return false; 
	}
} 
Input.prototype.getMousePos = function(){
	return this.mousePos;
}
Input.prototype.getClickPos = function(){
	return this.clickPos;
}
function onMouseMove(event){
	var theCanvas = document.getElementById("GameCanvas"); 
	INPUT.mousePos.x = event.clientX - event.offsetLeft;
	INPUT.mousePos.y = event.clientY - event.offsetTop; 

} 
function onMouseDown(e){  
	INPUT.clickPos.x = INPUT.mousePos.x;
	INPUT.clickPos.y = INPUT.mousePos.y;
	INPUT.isMouseClick = true;   
}
function onMouseUp(e){    
	INPUT.isMouseClick = false; 
}
function onKeyDown(e){ 
	INPUT.isKeyPressed[e.keyCode] = true;
}
function onKeyUp(e){  
	INPUT.isKeyPressed[e.keyCode] = false;
}   
const INPUT = new Input();