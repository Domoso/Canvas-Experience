var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
	"#0A1827",
	"#5B9496",
	"#9AC0BA",
	"#CCD9CE",
	"#F6EDD3",
	"#324D5C",
	"#46B29D",
	"#FOCA4D",
	"#E37B4O",
	"#F53855",
	"#D29B8E",
	"#8A888B",
	"#688O8E",
	"#75989F",
	"#CDC2AA",
	"#2E112D",
	"#54OO32",
	"#820333",
	"#C9283E",
	"#FO433A",
	"#AB4E2F",
	"#9E392B",
	"#872725",
	"#6B1C33",
	"#471530",
	"#111930",
	"#163540",
	"#FFBD2B",
	"#FF6BO3",
	"#7B1323"
];

window.addEventListener("mousemove", 
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
	});

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update	= function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// Interactivité

		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
					this.radius += 3;
				}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}





console.log(circleArray);

var circleArray = [];

function init() {

	circleArray = [];

	for (var i = 0; i < 1500; i++) {
		var radius = Math.random() * 6 + 1;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	
}

init();
animate();

console.log(init);