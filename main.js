canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

 var img_width = 300;
var img_height = 100;

var img_image;

var img_x = 100;
var img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

 window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	
         if((keyPressed <=97 && keyPressed>=65)|| (keyPressed <=122 && keyPressed>=90))
 {
		 alphabetkey();
		 document.getElementById("d1").innerHTML="YOU PRESSED ALPHABET KEY";
		 console.log("alphabetkey");
 }

	
     else if((keyPressed >=48 )&&(keyPressed<=57))
	{
	numberkey();
	document.getElementById("d1").innerHTML="YOU PRESSED NUMBER KEY";
	console.log("numberkey");
}

     else if((keyPressed >=37 )&&( keyPressed<=40)) {
   arrowkey();
   document.getElementById("d1").innerHTML="YOU PRESSED ARROW KEY";
   console.log("arrowkey");
}
	
     else if((keyPressed== 17 || keyPressed==18 || keyPressed==27)) {
   specialkey();
   document.getElementById("d1").innerHTML="YOU PRESSED SPECIAL KEY";
   console.log("specialkey");
}

else {
	otherkey();
	document.getElementById("d1").innerHTML="YOU PRESSED A SYMBOL KEY/OTHER KEY";
}

}

function alphabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add();
	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
