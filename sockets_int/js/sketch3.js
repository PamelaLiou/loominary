/* Loominary v. 1 written by Pamela Liou in p5.js

A barebones interface for controlling the Doti Loom. 

Warp is true; Weft is false */

var pixells;
var dim; //size of each pixel
var grid;  //number of pixels per grid.
var value, canvas, trueColor, falseColor;



//var loomApp = {"title": "gvalue"}; //get rid of the global variables soon

var checkboard_button;
var twill_button;


trueColor = "#EDE574"; //default button color1
falseColor = "#FF4E50"; //default button color1

var inpWarp, inpWeft;

var checkerboard = 
[
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
[ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],


];

var twill=

[
[ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
[ 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
[ 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
[ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
[ 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
[ 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
[ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
[ 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
[ 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
[ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
[ 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
[ 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],


];







function setup() {
	pixells =[[]];
	dim = 40; //size of each pixel
	grid= 16;  //number of pixels per grid
	value = trueColor;

	var padding=50;// offset for grid **find a better solution in css**

	//Parameter GUI 
	// *REFACTOR*

	var inpWarpText = createDiv('Warp color: ');
	inpWarpText.parent("r_panel");

	inpWarp = createInput(trueColor);
	inpWarp.parent("r_panel");

	var inpWeftText = createDiv('Weft color: ');
	//	text.position(50, 50);
	inpWeftText.parent("r_panel");

	inpWeft = createInput(falseColor);
	inpWeft.parent("r_panel");

	var inpDimText = createDiv('dimension: ');
	//	text.position(50, 50);
	inpDimText.parent("r_panel");

	var inpDim = createInput(falseColor);
	inpDim.parent("r_panel");

	var submit = createButton('submit');
	submit.parent("r_panel");
	submit.mousePressed(updateSubmit);




	checkerboard_button = createImg("/js/img/checkerboard_button.png");
	checkerboard_button.parent("buttonPanel");
	checkerboard_button.mousePressed(submitCheckerboard);

	twill_button = createImg("/js/img/twill_button.png");

	twill_button.parent("buttonPanel");
	twill_button.mousePressed(submitTwill);


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
  		var thatVal = val; 
   		var button;
  		button = createButton(' ');

  		this.makeButton = function(){
  		button.position(this.x, this.y);
  		button.mousePressed(this.changeVal);

  		// store a reference to this pixel
  		var p = this;

  		button.mouseOver(function(){
  			if(mouseIsPressed){
  				p.changeVal();
  			}
  		});
  		
	};


	this.getButton = function(){return button;};

	this.getVal = function(){return thatVal;};

	this.updateButton = function(){
		button.style("background", truthTest(thatVal));
		button.style("padding", this.padding);
		button.style("padding", this.padding);


				};

	this.updateCol = function(newVal1, newVal2){ //update the state based on input
		if (trueColor == newVal1 && falseColor == newVal2){
			console.log(" ");
		}else {
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

	};

	this.setPattern = function( patternArray, newi, newj ){ // takes an  array sets the pattern of the pixell grid
		//alerted();
		console.log("setting pattern");

		if (patternArray[newi][newj] == undefined){
			console.log(newj +" "+ newi);
			thatVal = false;

		}else if (patternArray[newj][newi] == 1){
			thatVal =true;
		}else if (patternArray[newj][newi] == 0){
			thatVal =false;
		}else{
			thatVal = false;
		}


	};

};

function updateSubmit(){
	//trueColor = inpWarp.value();
	for(var i = 0; i < grid; i++){
		for(var j = 0; j < grid; j++){

			pixells[i][j].updateCol(inpWarp.value(), inpWeft.value());
			//pixells[i][j].setPattern(checkerboard, i, j);
			console.log("updatedCol " + pixells[0][0].val);
			//dim = inpDim.value();


		}
	}
}

function submitCheckerboard(){ //create a function factory
	for(var i = 0; i < grid; i++){
		for(var j = 0; j < grid; j++){

			pixells[i][j].setPattern(checkerboard, i, j);

		}
	}

}

function submitTwill(){ //create a function factory
	for(var i = 0; i < grid; i++){
		for(var j = 0; j < grid; j++){

			pixells[i][j].setPattern(twill, i, j);

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

function array2D(iLen,jLen, callback){ //test this, put into helper lib
	var i, j;
	for( i =0; i <iLen; i++){
		for( j= 0; j <jLen; j++){

			callback(i,j);
		}
	}

}

function panelizeArray(oldArray){ //tiles 
	var newArray = [];

	var forEachPixell = function(i,j){
		console.log(oldArray[i][j]);
	};

	array2D(10,10, forEachPixell);

}

function makeRandArray(){
  var randArray =[];
  
  for (var i =0; i <16; i++){
    randArray.push(Math.round(Math.random(0,1)));
  }
  
  return randArray

}


function mousePressed(){
  var thisArray = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
  toSerial(makeRandArray());

}


// function rewriteArray(arrayPattern){ //takes a basic array and tiles it to the dimension of the pixell grid
// 	var newArray = [];
// 	array2D(grid,grid, function(arrayPattern){
// 		if 

// 	})}

			// if (patternArray[grid % newj][grid % newi] == 1){
			// 	thatVal =true;
			// }else{
			// 	thatVal =false;
			// }

// }