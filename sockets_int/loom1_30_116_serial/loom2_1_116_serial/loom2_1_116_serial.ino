const int numFaders = 16;
const int motorsOnboard = 16;
const int millisecs = 500;

int pushButton = 24;


int buttonPushCounter = 0;   // counter for the number of button presses
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // previous state of the button




//***********************Planned pins*******************
//int enable[numFaders] ={
//  38, 40, 42, 44, 46, 48, 50, 52,
//  39, 41, 43, 45, 47, 49, 51, 53 };
//
//
//int yellowPole[numFaders] = {
//   22, 24, 26, 28, 30, 32, 34, 36,
//   23, 25, 27, 29, 31, 33, 35, 37 };
//   
//   
//int whitePole[numFaders] = {
//   21, 20, 19, 18, 17, 16, 15, 14,
//   0,   1,  2,  3,  4,  5,  6,  7};

//********************Test Pins************************

//First is enable, second and third are motor terminals
const int pinsPer = 3;

int motors[][3] = 
  {    
    {    21, 20, 19  } ,
    {    18, 17, 16  }  ,
    { 53, 51, 49 },
    { 47 ,45, 43  },
     {8, 9, 10},
    
    { 41, 39, 37},
    { 35, 33, 31},
    { 25, 27, 29 },

    {28, 30, 32},
    {34, 36, 38 },
    { 40, 42, 44},
    {50,  48, 46},
    {15,14,2},
    {3, 4, 5},
    {56,55,54},
    {57,58,59}
  
  };
    
    
    
    
//    21, 20, 19    } 
//  ,
//  {    
//    18, 17, 16    }  
//  ,
//  {     
//    15, 4, 2    } 
//  ,
//  { 
//    53, 51, 49   }
//  ,
//  { 
//    47 ,45, 43    }
//  ,
//  {
//    8, 9, 10  }
//  ,
//  { 
//    41, 39, 37  }
//  ,
//  { 
//    23, 22, 25   }
//  ,
//  {
//    35, 33, 31  }
//  ,
//  {
//    28, 30, 32  }
//  ,
//  {
//    34, 36, 38   }
//  ,
//  {
//    11, 10, 12  }
//  ,
//  {
//    5,6,7  }
//  ,
//  {
//    40,42,44  }
//  ,
//  {
//    56, 55, 57  }
//
//




void setup(){
  Serial.begin(9600);
    pinMode(pushButton, INPUT);
 //Set each pin to output
  for(int i = 0; i < motorsOnboard; i++ ){
    //Serial.println("hello");  
    for(int j = 0; j < pinsPer; j++ ){
      //Serial.println(motors[i][j]);  
      pinMode(motors[i][j], OUTPUT);

    }
  }

  // Set the enable pins to HIGH  


  for(int i = 0; i < motorsOnboard; i++ ){
    //Serial.println("hello");  
    for(int j = 0; j < pinsPer; j++ ){
      //Serial.println(motors[i][j]);  
      digitalWrite(motors[i][0], HIGH);

    }
  }

}

/*

  int,int,int,int,int,int,int,int,int,int,int,int,int,int,int,int,
  filereader on drop; read an image from esktop take the address 
  take that src and create an img element, set source to be file's path
   take it and put it on canvas

*/

void loop(){
  

  buttonState = digitalRead(pushButton);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) {
      // if the current state is HIGH then the button
      // wend from off to on:
      buttonPushCounter++;
     // Serial.println("on");
    //  Serial.print("number of button pushes:  ");
      Serial.println(buttonPushCounter);
    } 
//    else {
//      // if the current state is LOW then the button
//      // wend from on to off:
//      Serial.println("off");
//    }
    // Delay a little bit to avoid bouncing
    delay(5);
  }
  // save the current state as the last state,
  //for next time through the loop
  lastButtonState = buttonState;
  
  
  
  //Up down Procedure  
  if (Serial.available()>0){
    delay(5);
    for (int i = 0; i < motorsOnboard; i++ ){
      int thisValue= Serial.parseInt();
      //Serial.print(thisValue);
      if (thisValue == 1){
        digitalWrite(motors[i][1], HIGH);
        digitalWrite(motors[i][2], LOW);

      }
      else if (thisValue == 0){
        digitalWrite(motors[i][1], LOW);
        digitalWrite(motors[i][2], HIGH);
        
      }
    }
    
    delay(100);
    
     for (int i = 0; i < motorsOnboard; i++ ){
      //Serial.print(thisValue);
        digitalWrite(motors[i][1], LOW);
        digitalWrite(motors[i][2], LOW);
    }
    
    Serial.println();
    delay(4);
    while(Serial.available()>0){
      char trash = Serial.read();
    }
  }
}


