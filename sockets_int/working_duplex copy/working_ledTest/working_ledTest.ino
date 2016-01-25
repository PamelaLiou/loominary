const int numFaders = 16;
const int motorsOnboard = 16;
const int millisecs = 500;




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
const int pinsPer = 1;
int motors[numFaders] = { 
  34, 32, 30, 28, 26, 24, 22, 2,  3, 4, 5, 6, 7, 8, 9, 10

};




void setup(){
  Serial.begin(9600);


  //Set each pin to output

  for(int j = 0; j < pinsPer; j++ ){
    //Serial.println(motors[i][j]);  
    pinMode(motors[j], OUTPUT);

  }

  // Set the enable pins to HIGH  

}

/*

 int,int,int,int,int,int,int,int,int,int,int,int,int,int,int,int,
 filereader on drop; read an image from esktop take the address 
 take that src and create an img element, set source to be file's path
 take it and put it on canvas
 
 */

void loop(){
  //Up down Procedure  
  if (Serial.available()>0){
    delay(40);
    for (int i = 0; i < motorsOnboard; i++ ){
      int thisValue= Serial.parseInt();
      if (thisValue == 1){
        digitalWrite(motors[i], HIGH);
      }
      else if (thisValue ==0){
        digitalWrite(motors[i], LOW);
      }
    }
    Serial.println();
    delay(40);
    while(Serial.available()>0){
      char trash = Serial.read();
    }
  }
}



