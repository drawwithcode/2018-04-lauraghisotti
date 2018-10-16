function preload(){
  // put preload code here
}

var jimmys = [];
var touches = [];

//var sammys= [];

var grande = 0;
var linea = 0;



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  textFont('Calibri')
  background(0, 0, 255);

var jimmyNumber= 3;



for(var i=0; i<jimmyNumber; i++) {
  var diametro = 200-i*40;
  var firstJimmy = new Jimmy(width/2,height/2, diametro, 0, 90);
  firstJimmy.speed= 3;
  //firstJimmy.diameter = random(50, 60);
  //firstJimmy.speed = random(10, 15);
  firstJimmy.color = color(random(255), random(255), 255);
  jimmys.push(firstJimmy);
}

/*var sammyNumber= 3;

for(var l=0; l<sammyNumber; l++) {
  var firstSammy = new Sammy(width/sammy.length,height/2, 180, 0, 90);
  firstSammy.speed= 3;
  //firstJimmy.diameter = random(50, 60);
  //firstJimmy.speed = random(10, 15);
  firstSammy.color = color(random(255), random(255), 255);
  sammys.push(firstSammy);
}*/

}

function draw() {
  background("black");
  // put drawing code here
  for(var j = 0; j < jimmys.length; j++) {
    //jimmys[j].diameter= (200-jimmys.length*40)+mouseY/3;
    var diametro = 200-j*40;
    jimmys[j].move();
    jimmys[j].display();
   if(linea==1 || jimmys[j].diameter<0) {
      jimmys[j].diameter += 5;
      grande=1;
    } else if (linea==2) {
      jimmys[j].diameter -= 5;
      grande=2;
    }
    else {
      jimmys[j].diameter = diametro;
      grande=0;
    }


  //  jimmys[j].color= color((255-(mouseY/5)), (255-(mouseY/5)), 255);
  }


  /*for(var k = 0; k < sammys.length; k++) {
    sammys[k].move();
    sammys[k].display();
  //  jimmys[j].color= color((255-(mouseY/5)), (255-(mouseY/5)), 255);
}*/


textSize(20);
 // text(string, x, y)
 fill("white");
 text('Move from left to right to accelerate the helix, and from right to left to decelerate it.',30,50);
 text('Click to enlarge it, click again to shrink it, and click once more to bring it back to its original dimensions.',30,100);
 fill(60, 190, 255);
 text('Refresh to change the shades of color.',30,height-50);
 // You can insert variables
 /*var myText = 'My first paragraph';
 text(myText,30,100);*/


}

function mousePressed() {
 if(grande==0){
  linea=1;
} else if (grande==1) {
  linea=2;
}
else {
  linea=0;
}

  console.log(linea)
 /*else {
  jimmys[j].diameter -= 50;
  grande=0;
}*/
}

//mousePressed();


function Jimmy (_x, _y, _diameter, _start, _end){
  this.x=_x;
  this.y=_y;
  this.diameter=_diameter;
  this.start=0;
  this.end=90;
  this.color="black";
  this.speed= 3;

  angleMode(DEGREES);

  this.display= function() {
    noStroke();
    fill(this.color);
    arc(this.x, this.y, this.diameter, this.diameter, this.start, this.end, PIE);

    fill("black");
    arc(this.x, this.y, this.diameter, this.diameter, this.start+90, this.end+90, PIE);

    fill(this.color);
    arc(this.x, this.y, this.diameter, this.diameter, this.start+180, this.end+180, PIE);

    fill("black");
    arc(this.x, this.y, this.diameter, this.diameter, this.start+270, this.end+270, PIE);
    }

    this.move = function() {
    //  this.x += this.speed;
      this.start += mouseX/15;
      this.end += mouseX/15;
    }

}


/*function Sammy (__x, __y, __diameter, __start, __end){
  this.x=__x;
  this.y=__y;
  this.diameter=__diameter;
  this.start=0;
  this.end=90;
  this.color="blue";
  this.speed= 3;

  angleMode(DEGREES);

  this.display= function() {
    noStroke();
    fill(this.color);
    arc(this.x, this.y, this.diameter, this.diameter, this.start, this.end, PIE);

    fill("blue");
    arc(this.x, this.y, this.diameter, this.diameter, this.start+90, this.end+90, PIE);

    fill(this.color);
    arc(this.x, this.y, this.diameter, this.diameter, this.start+180, this.end+180, PIE);

    fill("blue");
    arc(this.x, this.y, this.diameter, this.diameter, this.start+270, this.end+270, PIE);
    }

    this.move = function() {
    //  this.x += this.speed;
      this.start += mouseX/15;
      this.end += mouseX/15;
    }

}*/
