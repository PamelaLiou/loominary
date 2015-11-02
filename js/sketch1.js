var pixells;
var dim; //size of each pixel
var grid;  //number of pixels per grid
var value,canvas, value1, value2;




value1 = "#FF00FF"; //default button color1
value2 = "#00FFFF"; //default button color1

var inpVal1, inpVal2;


function setup() {
	pixells =[[]];
	dim = 40; //size of each pixel
	grid= 16;  //number of pixels per grid
	value = value1;

	var padding=50;// offset for grid **find a better solution in css**


	inpVal1 = createInput(value1);
	inpVal1.parent("r_panel");

	inpVal2 = createInput(value2);
	inpVal2.parent("r_panel");

	var submit = createButton('submit');
	submit.parent("r_panel");
	submit.mousePressed(updatePress);


	for(var i = 0; i < grid; i++){
  		pixells[i]=[]; // ugh this is so weird
  		for(var j = 0; j< grid; j++){
  			pixells[i][j] = (new Pixell(i*dim+padding, j*dim+padding, dim/2, value1));
  			pixells[i][j].makeButton();
  		}
  	}
  }



  function draw() {

  	for(var i = 0; i < grid; i++){
  		for(var j = 0; j< grid; j++){
  			pixells[i][j].updateButton();

  		}
  	}
  }



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
  		//console.log("makeButton, this.changeVal is" + this.changeVal());

  		
  		// button.addEventListener("click", function (){
  		// 	if this.val
  		// });
};

this.updateButton = function(){
	button.style("background", val);
	button.style("padding", this.padding);
	button.style("padding", this.padding);
		//console.log("updateButton, val is" + val);


	};

	this.updateVal = function(newVal1, newVal2){
		if (val == value1){
			//console.log("true")
			value1 = newVal1;
			val = value1;
			value2= newVal2;
			return newVal1;
			//console.log()

		}else{
			//console.log("false")
			val = value2;
			value2 = newVal2;
			val =value2;
			value1= newVal1;
			return newVal2;
		}
	}

	this.changeVal = function(){ //toggle
		//alerted();
		if (val == value1){
			val = value2;
			return val;
		}else{
			val = value1;
			return val;
		}

	};

}

function updatePress(){
	//value1 = inpVal1.value();
	for(var i = 0; i < grid; i++){
		for(var j = 0; j< grid; j++){
			console.log("before: "+ pixells[i][j].val)
			console.log("input 1 = "+inpVal1.value());
			pixells[i][j].val = pixells[i][j].updateVal(inpVal1.value(), inpVal2.value());
			console.log("after: "+ pixells[i][j].val)


		}
	}
}


