//Eric

var stateOfChoco;
var moveChocoX;
var moveChocoY;
var endChocoX;
var endChocoY;

var stateOfSpoon;
var moveSpoonX;
var moveSpoonY;
var endSpoonX;
var endSpoonY;

var stateOfBolt1;
var moveBolt1;


var fingerprint1;
var fingerprint2;

function preload()
{
  
  C4Background =    loadImage('https://dl.dropboxusercontent.com/s/gcwl31qjnovx82t/cell.jpg');
  C4Keypad =    loadImage('https://dl.dropboxusercontent.com/s/x0egvvhrpobh5l9/lock.png');
  C4Lock =    loadImage('https://dl.dropboxusercontent.com/s/auhvp0qy80dll5t/locks.png');
  C4Choco =    loadImage('https://dl.dropboxusercontent.com/s/en9rfv1mchgfas8/chocolate%20layer.png');
  
  C4Fingerprint1 =   loadImage('https://dl.dropboxusercontent.com/s/cg4ozqc65vovq6i/fingerprint%201.png');
  
  C4Fingerprint2 =   loadImage('https://dl.dropboxusercontent.com/s/7x5osvdugcjkpkn/fingerprint%202.png');
  
  C5Vent =   loadImage('https://dl.dropboxusercontent.com/s/53rp3vzvp7pcmwu/vent.png');
  
  C5Spoon =   loadImage('https://dl.dropboxusercontent.com/s/r9c8qxtizpy4cgb/spoon.png');
  
  C5Bolt =   loadImage('https://dl.dropboxusercontent.com/s/837h3qpxgqzqlgx/bolt%201.png');
 
  C5BoltA =   loadImage('https://dl.dropboxusercontent.com/s/837h3qpxgqzqlgx/bolt%201.png');
 
  C5BoltB =   loadImage('https://dl.dropboxusercontent.com/s/l65fekapd6eol42/bolt%202.png');
  
  C5BoltC =   loadImage('https://dl.dropboxusercontent.com/s/masdlp7yx73k706/bolt%203.png');
  
  C5BoltD =   loadImage('https://dl.dropboxusercontent.com/s/eh1cybiffh9400y/bolt%204.png');
  
  
  
  
}

function setup()
{
  createCanvas(830,600);
  canvas = 4;
  
  moveChocoX = 430;
  moveChocoY = 430;
  stateOfChoco = 1;
  endChocoX = 30;
  endChocoY = 530;
  
  moveSpoonX = 430;
  moveSpoonY = 430;
  stateOfSpoon = 1;
  endSpoonX = 30;
  endSpoonY = 530;
  
  C5SizeX = 40;
  C5SizeY = 30;
  endSizeX = 420;
  endSizeY = 300;
  stateOfC5Vent = 1;
  
  

  A = false;
  B = false;
  C = false;
  D = false;
  
  C5BoltX = 0;
  C5BoltY = 0;
  C5BoltZ = 0;
  
  AA = false;
  BB = false;
  CC = false;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
  if (canvas == 2)
  {
    canvas2();
  }
  if (canvas == 3)
  {
    canvas3();
  }
  if (canvas == 4)
  {
    canvas4();
  }
  if (canvas == 4.1)
  {
    canvas4_1();
  }
  if (canvas == 4.2)
  {
    canvas4_2();
  }
  if (canvas == 5)
  {
    canvas5();
  }
  else if (canvas == 5.1)
  {
    canvas5_1();
  }
}

function draw1()
{
  if (C5BoltX == 0)
  {
    image(C5BoltD,230,350,40,40);
  }
  else if (C5BoltX == 1)
  {
    image(C5BoltB,230,350,40,40);
  }
  else
  {
    image(C5BoltD,230,350,40,40);
  }
}

function draw2()
{
  if (C5BoltY == 0)
  {
    image(C5BoltC,580,110,40,40);
  }
  else if (C5BoltY == 1)
  {
    image(C5BoltB,580,110,40,40);
  }
  else
  {
    image(C5BoltC,580,110,40,40);
  }
}

function draw3()
{
  if (C5BoltZ == 0)
  {
    image(C5BoltC,580,350,40,40);
  }
  else if (C5BoltZ == 1)
  {
    image(C5BoltB,580,350,40,40);
  }
  else
  {
    image(C5BoltC,580,350,40,40);
  }
}

function canvas1() //Courtroom
{
  background(172,172,172);
  
  fill(255,0,0);
  rect(330,370,120,70);
  fill(0,0,0);
  textSize(40);
  text("Start",345,420);
  if(mouseX > 330 && mouseX < 450 && mouseY > 370 && mouseY < 440)
  {
    fill(204,0,0);
    rect(330,370,120,70);
    fill(0,0,0);
    textSize(40);
    text("Start",345,420);
    if (mouseIsPressed == true)
      {
        fill(255,51,51);
        rect(330,370,120,70);
        fill(0,0,0);
        textSize(40);
        text("Start",345,420);
        canvas = 2;
      }
  }
}

function canvas2() // Prison Corridor -> Cell
{
  background(172,172,172);
  itemGrid();
}

function canvas3() // Prison Courtyard -> Cell
{
  background(172,172,172);
  itemGrid();
}

function canvas4() // Cell -> Prison Corridor
{
  
  image(C4Background,0,0,830,600); 
  itemGrid();

  image(C4Lock,180,280,20,25);
  

  if (stateOfChoco == 1)
  {
    moveChocoX = 430;
    moveChocoY = 430;
    image(C4Choco,moveChocoX,moveChocoY,50,50);
  }
  else if (stateOfChoco == 2)
  {
    image(C4Choco,endChocoX,endChocoY,50,50);
  }
  else if (stateOfChoco == 3)
  {
    noCursor;
    image(C4Choco,mouseX-25,mouseY-25,50,50);
  }
  else if (stateOfChoco == 4)
  {
    stateOfChoco = 3;
    canvas = 4.2;
  }
 
  if (mouseX > 430 && mouseX < 480 && mouseY > 430 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfChoco = 2;
    }
  }
  
  else if (mouseX > 180 && mouseX < 200 && mouseY > 280 && mouseY < 300)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateOfChoco == 3)
    {
      canvas = 4.2;
    }
    else if (mouseIsPressed == true)
    {
      canvas = 4.1;
    }
  }
  
  else if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfChoco = 3;
    }
  }

  else
  {
    cursor(ARROW);
  }
  
}

function canvas4_1()
{
  image(C4Keypad,250,80,300,400);
  itemGrid();
  //1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(50);
      text("1",570+50,120);
      canvas = 4;
    }
  }
  
  //0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(50);
      text("2",570+0,120);
    }
  }
  
  //3
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,85,90,90);
      textSize(50);
      text("3",570+75,120);
    }
  }
  
  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;

    }
  }
  
  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //keypad #6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //keypad #7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(50);
      text("7",570+50,120);
    }
  }
  
  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
    }
  }
  
  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //*
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  
  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
}
  

function canvas4_2() // Keypad with the fingerprints
{

  
  image(C4Keypad,250,80,300,400);
  
  //fingerprint on #2
  image(C4Fingerprint1,355,85,90,90);
  
  //fingerprint on #3
  image(C4Fingerprint2,455,85,90,90);

  //fingerprint on #7
  image(C4Fingerprint2,255,285,90,90);

  //fingerprint on #8
  image(C4Fingerprint1,355,285,90,90);

  itemGrid();

  //keypad #1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //keypad #0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    
    }
  }

  //keypad #2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(50);
      text("2",570+0,120);
      A = true;
    }
  }

  //keypad #13
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,85,90,90);
      textSize(50);
      text("3",570+75,120);
      image(C4Fingerprint1,355,85,90,90);
      
      if (A == true && B == true && C == true)
      {
        D = true;
      }      

    }
  }

  //keypad #4s
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;

    }
  }

  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(50);
      text("7",570+50,120);
      
      if (A == true && B == true)
      {
        C = true;
      }

    }
  }

  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
      
      
      if (A == true)
      {
        B = true;
      }

    }
  }

  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
      
     

    }
  }

  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }


  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
    
  if (D == true)
  {
    canvas = 5;
  }
    
  
  else
  {
    cursor(ARROW);
  }
  
  
}

  
function canvas5() // Outside
{
  image(C4Background,0,0,830,600); 
  itemGrid();
  image(C5Vent,400,290,40,30);
  
  if (stateOfSpoon == 1)
  {
    moveSpoonX = 430;
    moveSpoonY = 430;
    image(C5Spoon,moveSpoonX,moveSpoonY,40,40);
  }
  else if (stateOfSpoon == 2)
  {
    image(C5Spoon,endSpoonX,endSpoonY,40,40);
  }
  
  else if (stateOfSpoon == 3)
  {
    noCursor;
    image(C5Spoon,mouseX-25,mouseY-25,40,40);
  }
  else if (stateOfSpoon == 4)
  {
    stateOfSpoon = 3;
    canvas = 5.1;
    stateOfC5Vent = 2;
  }
  
  if (mouseX > 430 && mouseX < 480 && mouseY > 430 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSpoon = 2;
    }
  }

 
  
  else if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSpoon = 3;
    }
  }

  else
  {
    cursor(ARROW);
  }
  
  
  
  if (mouseX > 400 && mouseX < 440 && mouseY > 290 && mouseY < 320)
  {
    cursor(HAND);
    if (stateOfSpoon == 3 && mouseIsPressed == true)
    {
      stateOfC5Vent = 2;
      canvas = 5.1;
    }
  }
}

function canvas5_1()
{
  cursor(ARROW);
  
  
  C5Bolt1 = 
    sqrt((mouseX - 250)*(mouseX - 250) + (mouseY - 130)*(mouseY - 130))
  C5Bolt2 = 
    sqrt((mouseX - 250)*(mouseX - 250) + (mouseY - 370)*(mouseY - 370))
  C5Bolt3 = 
    sqrt((mouseX - 600)*(mouseX - 600) + (mouseY - 130)*(mouseY - 130))
  C5Bolt4 = 
    sqrt((mouseX - 600)*(mouseX - 600) + (mouseY -370)*(mouseY - 370))
  
  
 if (stateOfC5Vent == 1)
 {
   C5SizeX = 40;
   C5SizeY = 30;
 image(C5Vent,215,100,C5SizeX,C5SizeY);
 } 
  else if (stateOfC5Vent == 2)
 {
  image(C5Vent,215,100,C5SizeX,C5SizeY);
    
    if (C5SizeX < endSizeX)
    {
      C5SizeX = C5SizeX + 4;
    }
    if (C5SizeY < endSizeY)
    {
      C5SizeY = C5SizeY + 3;
    }
    if (!(C5SizeX < endSizeX && C5SizeY < endSizeY))
    {
      stateOfC5Vent = 3;
    }
  }
  else if (stateOfC5Vent == 3)
  {
    image(C5Vent,215,100,endSizeX,endSizeY);
    if (C5Bolt1 <= 1)
    {
      cursor(HAND);
      stateOfC5Vent = 1;
    }

    else if (C5Bolt2 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltX = 1;
        AA = true;
      }
    }

    else if (C5Bolt3 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltY = 1;
        BB = true;
      }
    }

    else if (C5Bolt4 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltZ = 1;
        CC = true;
      }
    }

    else
    {
      cursor(ARROW);
    }
  }
  
  draw1();
  draw2();
  draw3();
  
  fill(0,0,0)
  image(C5BoltB,230,110,40,40);
  
  //image(C5BoltD,230,350,40,40);
  
  //ellipse(250,370,40,40);
  //image(C5BoltC,580,110,40,40);
  //ellipse(600,130,40,40);
  //image(C5BoltC,580,350,40,40);
  //ellipse(600,370,40,40);


  if (AA == true && BB == true && CC == true)
  {
    canvas = 1;
  }
}

function itemGrid()
{
  fill(50,50,50);
  rect(10,510,810,580);

  fill(125,125,125);
  rect(20,520,70,70);

  fill(125,125,125);
  rect(100,520,70,70);

  fill(125,125,125);
  rect(180,520,70,70);
  
  fill(125,125,125);
  rect(260,520,70,70);
  
  fill(125,125,125);
  rect(340,520,70,70);
  
  fill(125,125,125);
  rect(420,520,70,70);
  
  fill(125,125,125);
  rect(500,520,70,70);
  
  fill(125,125,125);
  rect(580,520,70,70);
  
  fill(125,125,125);
  rect(660,520,70,70);
  
  fill(125,125,125);
  rect(740,520,70,70);
}

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}