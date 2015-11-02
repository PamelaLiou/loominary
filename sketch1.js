var pixells;
var dim; //size of each pixel
var grid;  //number of pixels per grid
var value,canvas, value1, value2;

value1 = "#FF00FF"; //default button color1
value2 = "#00FFFF"; //default button color1

var inpVal1, inpVal2;


function setup() {
	//canvas = createCanvas(500, 400);
	//canvas.parent("myContainer");
	pixells =[[]];
	dim = 40; //size of each pixel
	grid= 16;  //number of pixels per grid
	var padding=50;// offset for grid **find a better solution**
	//value1 = "#FF00FF"; //default button color1
	//value = value1;


	inpVal1 = createInput(value1);
	inpVal1.parent("r_panel");

	inpVal2 = createInput(value2);
	inpVal2.parent("r_panel");

	var submit = createButton('submit');
	submit.parent("r_panel");
	submit.mousePressed(greet);

	// var greeting = createElement('h2', 'what is your name?');
	// greeting.parent("r_panel"));

	//var panel = createDiv(); 


    // height: 25px;
    // position: absolute;
    // top: 0px!important;
    // right: 0px!important;


    for(var i = 0; i < grid; i++){
  	pixells[i]=[]; // ugh this is so weird
  	for(var j = 0; j< grid; j++){
  		pixells[i][j] = (new Pixell(i*dim+padding, j*dim+padding, dim/2, value1));
  		pixells[i][j].makeButton();
  	}
  }



}



function draw() {

	//grid = int(inp.value);

	for(var i = 0; i < grid; i++){
		for(var j = 0; j< grid; j++){
			pixells[i][j].updateButton();

		}
	}
}


  // draw stuff here
 // var dim = 40; //size of each pixel
  //var grid= 5;  //number of pixels per grid

  // for(var i = 0; i < grid; i++){
  // 	for(var j =0; j< grid; j++){

  // 		newPix = new Pixell(i*dim, j*dim, dim/2, value);
  // 		newPix.makeButton();
  // 		//fill(100,100,0);

  // 		//rect(i* dim, j*dim, dim, dim);
  // 	}
  // }

  // //var test = Pixel(10,10,10, "#FFFFFF");
  // //test.clicked();

  function Pixell( x, y, padding, val ) {

  	this.x = x; 
  	this.y = y;
  	this.padding = padding;
  	this.val = val;
  	var button;

  	this.makeButton = function(){
  		button = createButton(' ');
  		//button.parent("myContainer");
  		button.position(this.x, this.y);
  		button.mousePressed(this.changeVal);

  		
  		// button.addEventListener("click", function (){
  		// 	if this.val
  		// });
};

this.updateButton = function(){
	button.style("background", val);
	button.style("padding", this.padding);
	button.style("padding", this.padding);

};

this.updateVal = function(newVal1, newVal2){
	if (val == value1){
		value1 = newVal1;
		val = value1;
		value2= newVal2;
	}else{
		val = value2;
		value2 = newVal2;
		val =value2;
		value1= newVal1;
	}
}

	this.changeVal = function(){
	//alerted();
	if (val == value1){
		val = value2;
		return val;
	}else{
		val = value1;
		return 
	}
	console.log(val);

};


}

function greet(){
	//value1 = inpVal1.value();
	for(var i = 0; i < grid; i++){
		for(var j = 0; j< grid; j++){
			pixells[i][j].updateVal(inpVal1.value(), inpVal2.value());

		}
	}
}



// function changeVal() {

// }

