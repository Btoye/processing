var s;
var food;
var gridSize = 20;

function pickLocation() {
	var cols = floor(width/gridSize);
	var rows = floor(height/gridSize);
	food = createVector(floor(random(cols)), floor(random(rows)));
	print(food);
	return food.mult(gridSize);
}

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(20);
	pickLocation(); 
}

function draw() {
	background(51);
	
	if(s.eat(food))
	{
		pickLocation();
	}

	s.death();
	s.update();
	s.show();
	
	fill(255, 0, 100)
	rect(food.x, food.y, gridSize, gridSize)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}
