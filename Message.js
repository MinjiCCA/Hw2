function setup() {
  createCanvas(700, 500);
}

function draw() {
  background('#FFCFDA');
  
  printA(130,310);
  /*printB(90,30); 
  printC(140,30);
  printD(200,30);*/
  printE(160,190);
  printE(80,310);
  /*printF(320,30);
  printG(370,30);
  printH(450, 30);//starting at 50,50 and connected with printH(x,y)
  //calling them in draw makes the alphabets shown.*/
  printI(30,70);
  printI(80,190);
  //printJ(530,30);
  printK(100,190);
  printL(30,190);
  printL(30,310);
  //printM(30,150);
  printN(240,310);
  printO(270,200);
  //printP(220,150);
 // printQ(270,150);
  printR(190,310);
  //printS(390,150);
  printT(230,190);
  //printU(500,150);
  //printV(560,150);
  //printW(30,260);
  /*printX(100,260);
  printY(160,260);
  printZ(220,260);*/
  
 
}

function printA(x, y){
  line(x+25,y, x, y+100);
  line(x+25,y, x+50, y+100);
  line(x+10, y+60, x+40, y+60);

};

function printB(x,y){
  line(x, y, x, y+100);
  line(x, y, x+40, y+10);
  line(x, y+50, x+40, y+40);
  line(x+40, y+10, x+40, y+40);
  line(x, y+50, x+40, y+60);
  line(x, y+100, x+40, y+90);
  line(x+40, y+60, x+40, y+90);
  //arc(100, 55, 0, 50, 0, HALF_PI);
  //arc(100, 55, 50, 50, 0, HALF_PI);
  //noFill();
};

function printC(x,y){
  line(x,y+30,x,y+70);
  line(x,y+30,x+20,y+10);
  line(x,y+70,x+20,y+90);
  line(x+20,y+10,x+40,y+10);
  line(x+20,y+90,x+40,y+90);
};

function printD(x,y){
  line(x,y,x,y+100);
  line(x,y,x+50,y+30);
  line(x+50,y+30,x+50,y+70);
  line(x,y+100,x+50,y+70);
};

function printE(x, y){
   //Draw an E
  //line(100, 50, 100, 150);
  //line(100, 50, 140, 50);
  //line(100, 100, 140, 100);
  //line(100, 150, 140, 150);
  
  line(x, y, x, y+100);
  line(x, y, x+40, y);
  line(x, y+50, x+40, y+50);
  line(x, y+100, x+40, y+100);
};

function printF(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x, y+50, x+40, y+50);
};

function printG(x,y){
  line(x,y+30,x,y+70);
  line(x,y+30,x+20,y+10);
  line(x,y+70,x+20,y+90);
  line(x+20,y+10,x+50,y+10);
  line(x+20,y+90,x+50,y+90);
  line(x+50,y+90,x+70,y+70);
  line(x+70,y+55,x+70,y+70);
  line(x+50,y+55,x+70,y+55);
};

function printH(x,y)
//x,y becomes a code for the PrintH under draw to indicate where H would start.
{
  //Draw an H
  //line(50, 50, 50, 150);
  //line(90, 50, 90, 150);
  //line(50, 100, 90, 100);
  
  line(x, y, x, y+100);
  line(x+40, y, x+40, y+100);
  line(x, y+50, x+40, y+50);
  //having these would prevent us to calculate all of the exact number of placement of H.
};

function printI(x,y){
  line(x,y,x,y+100);
};

function printJ(x,y){
  line(x,y,x+50,y);
  line(x+25,y,x+25,y+90);
  line(x+25,y+90,x+10,y+100);
  line(x,y+90,x+10,y+100);
};

function printK(x,y){
  line(x,y,x,y+100);
  line(x,y+50,x+50,y);
  line(x,y+50,x+50,y+100);
};

function printL(x,y){
//Draw an L
  //line(150, 50, 150, 150);
  //line(150, 150, 190, 150);
  
  line(x, y, x, y+100);
  line(x, y+100, x+40, y+100);
};

function printM(x,y){
  line(x,y,x,y+100);
  line(x,y,x+25,y+40);
  line(x+25,y+40,x+50,y);
  line(x+50,y,x+50,y+100);
};

function printN(x,y){
  line(x,y,x,y+100);
  line(x,y,x+50,y+100);
  line(x+50,y,x+50,y+100);
};

function printO(x,y){
  line(x,y+30,x,y+70);
  line(x,y+30,x+20,y+10);
  line(x,y+70,x+20,y+90);
  line(x+20,y+10,x+40,y+10);
  line(x+20,y+90,x+40,y+90);
  line(x+40,y+90,x+60,y+70);
  line(x+60,y+30,x+60,y+70);
  line(x+40,y+10,x+60,y+30);
};

function printP(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y+20);
  line(x,y+70,x+40,y+50);
  line(x+40,y+20,x+40,y+50);
};

function printQ(x,y){
  line(x,y+30,x,y+70);
  line(x,y+30,x+20,y+10);
  line(x,y+70,x+20,y+90);
  line(x+20,y+10,x+40,y+10);
  line(x+20,y+90,x+40,y+90);
  line(x+40,y+90,x+60,y+70);
  line(x+60,y+30,x+60,y+70);
  line(x+40,y+10,x+60,y+30);
  line(x+40,y+60,x+50,y+100);
};

function printR(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y+20);
  line(x,y+70,x+40,y+50);
  line(x+40,y+20,x+40,y+50);
  line(x+20,y+60,x+40,y+100);
};

function printS(x,y){
  line(x,y+20,x,y+50);
  line(x,y+20,x+10,y+10);
  line(x+10,y+10,x+40,y+10);
  line(x,y+50,x+10,y+60);
  line(x+10,y+60,x+35,y+60);
  line(x+35,y+60,x+40,y+70);
  line(x+40,y+70,x+40,y+70);
  line(x+40,y+70,x+40,y+90);
  line(x+40,y+90,x+30,y+100);
  line(x+30,y+100,x,y+100);
};

function printT(x,y){
  line(x,y+10,x+50,y+10);
  line(x+25,y+10,x+25,y+100);
};

function printU(x,y){
  line(x,y+10,x,y+70);
  line(x,y+70,x+10,y+90);
  line(x+10,y+90,x+40,y+90);
  line(x+40,y+90,x+50,y+70);
  line(x+50,y+10,x+50,y+70);
};

function printV(x,y){
  line(x,y+10,x+25,y+90);
  line(x+50,y+10,x+25,y+90);
};

function printW(x,y){
  line(x,y+10,x+15,y+90);
  line(x+30,y+60,x+15,y+90);
  line(x+30,y+60,x+45,y+90);
  line(x+45,y+90,x+60,y+10);
};

function printX(x,y){
  line(x,y+10,x+50,y+90);
  line(x+50,y+10,x,y+90);
};

function printY(x,y){
  line(x,y+10,x+25,y+40);
  line(x+50,y+10,x+25,y+40);
  line(x+25,y+40,x+25,y+90);
};

function printZ(x,y){
  line(x,y+10,x+50,y+10);
  line(x+50,y+10,x,y+90);
  line(x,y+90,x+50,y+90);
};
