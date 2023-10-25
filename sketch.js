function setup() {
    createCanvas(600, 600);
    background("#AA17C3");
  }
  
  function draw() {
    fill("#00BCD4");
    stroke("#673AB7")
    strokeWeight(5);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 40, 60);
   }   
  } 