
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = noise(width,0);
    this.y = random(0,width);
    this.r = random(1,4);
    this.xSpeed = random(-100,100);
    this.ySpeed = random(-1000,100);
  }

// creation of a particle.
  createParticle() {
    
    stroke("linen");
    strokeWeight(5)
  
    triangle(this.y, this.y, this.x, this.x, this.x, this.y);
    noFill()
    
  stroke("white");
    strokeWeight(2)
    circle(this.x,this.y,this.r);
    
  }
  
  createParticle() {
    
    stroke("linen");
    strokeWeight(2)
  
    //triangle(this.y, this.y, this.x, this.x, this.x, this.y);
    noFill()
    
  stroke("white");
    strokeWeight(2)
    circle(this.x,this.y,this.r);
    
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<100) {
        stroke("white");
        line(this.x,this.y,element.x,element.y);
        line(this.x,this.y)
        
        beginShape()
        stroke("darkgrey")
        strokeWeight(random(10))
         curveVertex(this.x, this.y,1000, this.y);
        curveVertex(this.x, this.y, 20, this.y);
        curveVertex(element.x, this.y,this.y, this.y);
        curveVertex(this.x, 200,this.x, this.y);
        curveVertex(element.y, this.y,this.x, this.y);
          endShape();
         beginShape()
        stroke("black")
        curveVertex(this.x, this.y,random(1000), this.y);
        curveVertex(this.x, this.y,element.x, this.y);
        curveVertex(element.x, this.y,this.y, this.y);
        curveVertex(this.x, -10,this.x, this.y);
        curveVertex(element.y, this.y,this.x, this.y);
     
        endShape();
        
         beginShape()
        stroke("slategrey")
        strokeWeight(2)
        curveVertex(this.x, this.y,random(1000), this.y);
        curveVertex(this.x, this.y,element.x, this.y);
        curveVertex(element.x, this.x,this.y, this.y);
        curveVertex(this.x, -100,this.x, this.y);
        curveVertex(element.y, this.y,this.x, this.y);
     
        endShape();
        
        
        if(dis<100) {
        stroke("white");
        line(this.x,this.y,element.x,element.y);
        line(this.x,this.y)
        line(this.y,this.y)
        
        }
         if(dis<60) {
        stroke("white");
           strokeWeight(1)
        line(this.x,this.y,element.x,element.y);
        line(this.x,this.y)
        line(this.x,this.y)
        }
        
        
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  createCanvas(500, 500);
  background("black")
  for(let i = 0;i<width/18;i++){
    particles.push(new Particle());
    
    
  }
}

function draw() {
  
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
    
    }
  
  
  //let stroke_style = ([SQUARE]);
  //let stroke_w1 = random(1900);
  //let stroke_w2 = random(50);
  let max_stroke_w = max(stroke_w1, stroke_w2);
  
  
  

  var randomHue = random(45);
  var randomSat = random(30);
  var randomBr  = random(45);
  
  // stroke("silver");
  strokeCap(SQUARE);
  strokeWeight(stroke_w1);

  // stroke(randomHue, randomSat, randomBr);
  // strokeCap(stroke_style);
  //strokeWeight(stroke_w2);
  
  

  let times = int(random(3, 4));
  // let times = 5;
  let x1 = max_stroke_w;
  let x2 = width - max_stroke_w;
  let y1 = max_stroke_w;
  let y2 = height - max_stroke_w;

  while (times--) {
    stroke("black");
    // strokeCap(stroke_style);
    ;
    
    beginShape();
    curveVertex(random(x1, x2), random(y1, y2));
   
     curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));

    // stroke(randomHue, randomSat, randomBr);
    // strokeCap(stroke_style);
    // fill(randomHue, randomSat, randomBr);

    curveVertex(random(x1, x2), random(y1, y2));
    
    curveVertex(random(x1, x2), random(y1, y2));
    curveVertex(random(x1, x2), random(y1, y2));
    noFill()

    endShape();
    noLoop()

    // stroke(randomHue, randomSat, randomBr);
    // strokeCap(stroke_style);
    // fill(0, 0, 0);
    
}
}
