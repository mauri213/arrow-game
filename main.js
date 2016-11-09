var backgroundImage = new Image();
backgroundImage.src = "assets/bg.png"; //called a string because it's using alpha-numeric characters


for(var i = 0; i < 1000; i = i +1) {
	balloons.create();
}



function step () {
	render(0, 0, backgroundImage);
	player.update();
	balloons.update();
	arrows.update();
	collider.update();
}


	
loop(step);