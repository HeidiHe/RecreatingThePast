
let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 20; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(450, 300);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02; //for animation

  // For every x value, calculate a y value with sine function
  let x = 0;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude - amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for(let j =0; j <120; j++){
    
    let r = random(0, 10);
    r = r/10
    i = 0;
    for (let x = 0; x < yvalues.length; x++) {
      if(j%2 == 0){
        fill(0,j*2,j*2);
      }else{
        fill(x,0,0); 
      }
      i += 0.003;

      ellipse(x * xspacing*i+r, j*3 + yvalues[x], 3, 3);
    }
  }
}
