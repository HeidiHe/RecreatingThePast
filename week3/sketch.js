function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  fill('#404338');
  noStroke();
  // rect(81, 81, 63, 63);
  draw_heidi();
  // draw_SFPC();

  
}

function draw_next(x, y, h  ){
  width = 10;
  x = x + 15;
  // realh = 80 + h - y;
  rect(x, y, width, h);
  
  return x;
}

function draw_SFPC(){
  //S
  newX = draw_next(100, 120, 70);
  newX = draw_next(newX, 120, 120);
  newX = draw_next(newX, 170, 70);
  
  //F
  newX = draw_next(newX, 120, 120);
  newX = draw_next(newX, 120, 60);
  newX = draw_next(newX, 120, 60);
  
  //P
  newX = draw_next(newX, 120, 120);
  newX = draw_next(newX, 120, 70);
  newX = draw_next(newX, 140, 50);
  
  //C
  newX = draw_next(newX, 120, 120);
  newX = draw_next(newX, 120, 120);
  newX = draw_next(newX, 140, 90);
  
  //text
  textSize(20);
  fill(200, 200, 200);
  text('#SFPC', 330, 380);
  
  
}

function draw_heidi(){
  //H
  newX = draw_next(80, 80, 120)
  newX = draw_next(newX, 130, 70)
  newX = draw_next(newX, 80, 120)
  //e
  newX = draw_next(newX, 140, 60)
  newX = draw_next(newX, 140, 60)
  newX = draw_next(newX, 140, 60)
  //i
  newX = draw_next(newX, 110, 90)
  //d
  newX = draw_next(newX, 140, 60)
  newX = draw_next(newX, 140, 60)
  newX = draw_next(newX, 80, 120)
  //i
  newX = draw_next(newX, 110, 90)
  
  //text
  textSize(20);
  fill(200, 200, 200);
  text('@Heidi', 330, 280);

}

function draw_original(){
  newX = draw_next(80, 80, 120)
  newX = draw_next(newX, 80, 120)
  newX = draw_next(newX, 80, 120)
  newX = draw_next(newX, 80, 120)
  newX = draw_next(newX, 50, 150)
  newX = draw_next(newX, 80, 150)
  newX = draw_next(newX, 80, 120)
}