var img;
function preload() {
  img = loadImage('thekiss.jpeg');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  background(220);
  image(img,0,0);

  noStroke();
  for(let i = 0; i < img.width; i=i+20){
    for(let j= 0; j < img.height; j=j+20){
      let c = get(i+1,j+1);
      // let r = 51;
      if(i%40 == 0){
        if(j%40==0){
          drawPixel2(i,j,c);
        }else{
          drawPixel5(i,j,c);
        }
      }else{
        if(j%40==0){
          drawPixel4(i,j,c);
        }else{
          drawPixel3(i,j,c);
        }
      }
     }
  }  
  // for(let i = 0; i < 100; i=i+20){
  //     let c = get(i+1,i+1);
  //     drawPixel1(i,i,c);
  // }
  // let c = get(5,5);
  // drawPixel1(5,5,c);
  
  // drawPixel2(25,25, color(255,255,0));

}

//load image


//pixel in width 20
function drawPixel1(x, y, color = 255){
  fill(color);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 20, 20);
  // rect(x+3, y+3, 14, 14);
  rect(x+4, y+4, 12, 12);
  rect(x+8, y+8, 4, 4);
}

function drawPixel2(x, y, color = 255){
  fill(color);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 20, 20);
  // rect(x+3, y+3, 14, 14);
  rect(x+4, y+4, 16, 16);
  rect(x+8, y+8, 12, 12);
}

//lower right
function drawPixel3(x, y, color = 255){
  fill(color);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 20, 20);
  // rect(x+3, y+3, 14, 14);
  rect(x, y, 16, 16);
  rect(x, y, 12, 12);
}

//upper right
function drawPixel4(x, y, color = 255){
  fill(color);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 20, 20);
  // rect(x+3, y+3, 14, 14);
  rect(x, y+4, 16, 16);
  rect(x, y+8, 12, 12);
}

//lower left
function drawPixel5(x, y, color = 255){
  fill(color);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 20, 20);
  // rect(x+3, y+3, 14, 14);
  rect(x+4, y, 16, 16);
  rect(x+8, y, 12, 12);
} 

