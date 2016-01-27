var pixells;
var dim; //size of each pixel
var grid;  //number of pixels per grid
var value,canvas, trueColor, falseColor;




trueColor = "#FF00FF"; //default button color1
falseColor = "#00FFFF"; //default button color1

var warpVal, weftVal;


function setup() {
	console.log(global);
	pixells =[[]];
	dim = 40; //size of each pixel
	grid= 16;  //number of pixels per grid

	var padding=50;// offset for grid **find a better solution in css**
	var warpText = createDiv('Warp color: ');
	  //text.position(50, 50);

	warpVal = createInput(trueColor);
	warpVal.parent("r_panel");

	weftText = createDiv('Weft color: ');
//	text.position(50, 50);
	weftText.parent("r_panel");

 	weftVal = createInput(falseColor);
 	weftVal.parent("r_panel");

 	var submit = createButton('submit');
 	submit.parent("r_panel");
 	submit.mousePressed(updatePress);


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






  class Pixell{
  	
  	constructor( x, y, padding, val){

  		this.x = x; 
  		this.y = y;
  		this.padding = padding;
  		this.val = val;
  	}

  	var button;

  	makeButton = function(){
  		button = createButton(' ');
  		//button.parent("myContainer");
  		button.position(this.x, this.y);
  		button.mousePressed(this.changeVal);
  		//console.log("makeButton, this.changeVal is" + this.changeVal());

  		
  		// button.addEventListener("click", function (){
  		// 	if this.val
  		// });
};

updateButton = function(){
	button.style("background", truthTest(this.val));
	button.style("padding", this.padding);
	button.style("padding", this.padding);
			//console.log("updateButton, val is" + val);


		};

		truthTest = function(boole){
			if (boole == true){
				return truthColor; 
			}else{
				return falseColor;
			}

		};

		updateVal = function(newVal1, newVal2){
			if (val == trueColor){
			//console.log("true")
			trueColor = newVal1;
			val = trueColor;
			falseColor= newVal2;
			return newVal1;
			//console.log()

		}else{
			//console.log("false")
			val = falseColor;
			falseColor = newVal2;
			val =falseColor;
			trueColor= newVal1;
			return newVal2;
		}
	}

	changeVal = function(){ //toggle
		//alerted();
		if (this.val == true){
			this.val = false;
			return truthTest(this.val);
		}else{
			this.val = true;
			return truthTest(this.val);
		}

	};

}

function updatePress(){
	//trueColor = warpVal.value();
	for(var i = 0; i < grid; i++){
		for(var j = 0; j< grid; j++){
			console.log("before: "+ pixells[i][j].val)
			console.log("input 1 = "+warpVal.value());
			pixells[i][j].val = pixells[i][j].updateVal(warpVal.value(), weftVal.value());
			console.log("after: "+ pixells[i][j].val)


		}
	}
}


