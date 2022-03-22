
// Create canvas variable
var canvas = new frabric.Canvas ('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img()  {
	// write code to Upload golf image on the canvas
	fabric.new_image.fromURL("golf-h1.png", function(Img) {
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
fabric.new_image.fromURL("ball.png", function (Img){
ball_obj = Img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
	top:ball_y,
	left:ball_x
});
Canvas.add(ball_obj);
}	
if((ball_x==hole_x)&&)(ball_y==hole_y))
canvas.remove(ball_obj);
window.addEventListener("keydown", my_keydown);

document.getElementById("hd3").innerHTML="You have Hit the Goal";
document.getElementById("myCanvas").style.borderColor="red";

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		ball_y + block_image_height;
		 console.log ("bloock image eight = " + block_image_height);
		 console.log("when down arrow key is pressed, X = ", Y = "+ball_y")
		 canvav.remove(ball_obj);
		 new_image();
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
		 ball_y + block_image_height;
		 console.log ("bloock image eight = " + block_image_height);
		 console.log("when down arrow key is pressed, X = ", Y = "+ball_y")
		 canvav.remove(ball_obj);
		 new_image();
	}


	function left()
	{
		ball_y + block_image_height;
		 console.log ("bloock image eight = " + block_image_height);
		 console.log("when down arrow key is pressed, X = ", Y = "+ball_y")
		 canvav.remove(ball_obj);
		 new_image();
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y + block_image_height;
		 console.log ("bloock image eight = " + block_image_height);
		 console.log("when down arrow key is pressed, X = ", Y = "+ball_y")
		 canvav.remove(ball_obj);
		 new_image();
			// Write a code to move ball right side.
		}
	}
	
}

