var shit;
var paused = false;
var canvas_s = [600, 400];

function setup() {
    createCanvas(canvas_s[0], canvas_s[1]);
    shit = new Shit(canvas_s);
}

function keyInput() {
    if (keyIsDown(DOWN_ARROW)) {
        shit.Crouch()
    }
    if (keyIsDown(RIGHT_ARROW)) {
        shit.still = false
        shit.still = false;
        if (shit.speed < 8) {
            shit.speed = shit.speed + 0.5;
        }
    }
    else if (keyIsDown(LEFT_ARROW)) {
        shit.still = false;
        if (shit.speed > -8) {
            shit.speed = shit.speed - 0.5;
        }
    } else {
        shit.still = true;
    }
    if (keyIsDown(UP_ARROW) && (shit.jumptime <= 0.75 || shit.grounded) && !shit.falling) {
        console.log(shit.jumptime);
        
        shit.Jump()
    }
}

//function keyReleased() {
//    if (key == UP_ARROW) {
//        
//    }
//}


function draw() 
{
    background(100, 200, 255);  // blueish background
    rect(545, 0, 55, 55);
    if (!paused) 
    {
        shit.update();
    }
    if (!paused) { keyInput(); }
    shit.show();
    fill(0, 102, 153);  // blueish color
    textSize(24);
}

/* Custom functions */

function keyReleased() {
    
}    

function keyPressed() 
{
//    if (!paused && keyCode === UP_ARROW) 
//    {
//        shit.Jump();
//    } 
    
    if (key === 'p') 
    {
        paused = !paused;
    }
}