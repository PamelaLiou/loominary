var pixells;
var dim; //size of each pixel
var grid;  //number of pixels per grid
var value,canvas, trueColor, falseColor;

//Warp is true; Weft is false




trueColor = "#FF00FF"; //default button color1
falseColor = "#00FFFF"; //default button color1

var inpWarp, inpWeft;


function setup() {
	pixells =[[]];
	dim = 40; //size of each pixel
	grid= 16;  //number of pixels per grid
	value = trueColor;

	var padding=50;// offset for grid **find a better solution in css**

	//Parameter GUI

	var inpWarpText = createDiv('Warp color: ');
	inpWarpText.parent("r_panel");

	inpWarp = createInput(trueColor);
	inpWarp.parent("r_panel");

	var inpWeftText = createDiv('Weft color: ');
	//	text.position(50, 50);
	inpWeftText.parent("r_panel");

	inpWeft = createInput(falseColor);
	inpWeft.parent("r_panel");

	var submit = createButton('submit');
	submit.parent("r_panel");
	submit.mousePressed(updateSubmit);

//Instantiate the Pixell Grid

for(var i = 0; i < grid; i++){
  		pixells[i]=[]; // ugh this is so weird
  		for(var j = 0; j< grid; j++){
  			pixells[i][j] = (new Pixell(i*dim+padding, j*dim+padding, dim/2, true));
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
  	var thatVal = val; // ctx binding all jazzed up. WHYYYYYYYYY someone explain tihs to me. 
  	var button;
  		button = createButton(' ');

  	this.makeButton = function(){
  		//button.parent("myContainer");
  		button.position(this.x, this.y);
  		button.mousePressed(this.changeVal);
  		//console.log("makeButton, this.changeVal is" + this.changeVal());

  		
  		// button.addEventListener("click", function (){
  		// 	if this.val
  		// });
};
	this.getButton = function(){return button;};

	this.getVal = function(){return thatVal;};

	this.updateButton = function(){
		button.style("background", truthTest(thatVal));
		button.style("padding", this.padding);
		button.style("padding", this.padding);
			//console.log("updateButton, val is" + truthTest(this.val));


		};

	this.updateVal = function(newVal1, newVal2){
		if (trueColor == newVal1 && falseColor == newVal2){
			//console.log("true")
			console.log(" ");
		}else {
			//console.log("false")
			trueColor = newVal1;
			falseColor = newVal2;
		}
	}

	this.changeVal = function(){ //toggle
		//alerted();
		console.log("pressed");

		if (thatVal == true){
			thatVal = false;
		}else{
			thatVal = true;
		}
		//console.log(this.val);
		//return truthTest(this.val);

	};

}

function updateSubmit(){
	//trueColor = inpWarp.value();
	for(var i = 0; i < grid; i++){
		for(var j = 0; j< grid; j++){

			pixells[i][j].updateVal(inpWarp.value(), inpWeft.value());
			console.log("updatedVal " + pixells[0][0].val);


		}
	}
}

function truthTest(boole){
	if (boole == true){
		return trueColor; 
	}else{
		return falseColor;
	}

};

