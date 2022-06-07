
var myGamePiece;
var enemies = [];
var health;


// Put stuff in array with array.push
// Make character class, like Uhl's sprite class. Look on canvas page?




class character { 
    constructor(x, y, w, h, dx, dy, moveSpeed, color) {
        this.x = x;
        this.y = y;  
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.moveSpeed = moveSpeed;
        this.color = color;
    }
    move() {
        this.x+=this.dx;
        this.y+=this.dy;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fill();
        ctx.closePath();
    }
    checkAutonomousCollision(canvas) {
        if (this.x < 0 || this.x > canvas.width-this.w) {
            this.dx = -this.dx;
            // console.log("Autonomous collider");
        }
        if (this.y < 0 || this.y > canvas.height-this.h) {
            this.dy = -this.dy;
            // console.log("Autonomous collider");
        }
    }
    checkManualCollision(canvas) {
        if (this.x < 0 || this.x > canvas.width-this.w) {
            this.dx = 0;
        }
        if (this.y < 0 || this.y > canvas.height-this.h) {
            this.dy = 0;
        }
    }
    keyPressed(key) { //for objects that move with a key press
        if (key == 37) {
            this.left = true;
            this.dx = -this.moveSpeed;
        }
        else if (key == 39) {
            this.right = true;
            this.dx = this.moveSpeed;
        }
        else if (key == 38) {
            this.up = true;
            this.dy = -this.moveSpeed;
        }
        else if (key == 40) {
            this.down = true;
            this.dy = this.moveSpeed;
        }
    }
    keyReleased(key) { //for objects that move with a key press
        if (key == 37) {
            this.left = false;
            this.dx = 0;
        }
        else if (key == 39) {
            this.right = false;
            this.dx = 0;
        }
        else if (key == 38) {
            this.up = false;
            this.dy = 0;
        }
        else if (key == 40) {
            this.down = false;
            this.dy = 0;
        }
    }
    enforceBoundry(canvas) {
        if (this.x < 0)
            this.x = 0;
        else if (this.x > canvas.width-this.w)
            this.x = canvas.width-this.w;
        if (this.y < 0)
            this.y = 0;
        else if (this.y > canvas.height-this.h)
            this.y = canvas.height-this.h;
    }
    bounceOffBlock(char1) {
        let cor1x = this.x;
        let cor1y = this.y;
        
        let cor2x = this.x+this.w;
        let cor2y = this.y;
        
        let cor3x = this.x;
        let cor3y = this.y+this.h;
        
        let cor4x = this.x+this.w;
        let cor4y = this.y+this.h;

        if (this.y < char1.y + char1.h && this.y+this.h > char1.y 
            && this.x < char1.x + char1.w && this.x + this.w > char1.x) {
            //This lets us know it is touching
            //Y - bouncing
                
            
            // MUST FIX!!!!! PUT RESTRICTIONS ON WHERE IT CAN GO. NEED AN EXTRA CHECK SO IT DOESN'T JUST GO WAY TOO LEFT OR RIGHT
            
            // -----y bounching ------
                let modifier = 2;
                if (cor1x < char1.x + char1.w - modifier && cor1x > char1.x + modifier
                    && cor1y < char1.y + char1.h && cor1y>char1.y) {
                        // Top left corner touches bottom of cube.
                        this.dy = -this.dy;
                        this.y = char1.y + char1.h;
                        console.log("TL hits bottom");
                    }
                else if (cor2x < char1.x + char1.w - modifier && cor2x > char1.x + modifier
                    && cor2y < char1.y + char1.h && cor1y>char1.y) {
                        // Top Right corner touches bottom of cube.
                        this.dy = -this.dy;
                        this.y = char1.y + char1.h;
                        console.log("TR hits bottom");
                    }
                else if (cor3x < char1.x + char1.w - modifier && cor3x > char1.x + modifier
                    && cor3y > char1.y && cor3y < char1.y + char1.h) {
                        // Bottom Left corner touches top of cube
                        this.dy = -this.dy;
                        this.y = char1.y - this.h;
                        console.log("BL hits top");
                    }
                else if (cor4x < char1.x + char1.w - modifier && cor4x > char1.x + modifier
                    && cor4y > char1.y && cor4y < char1.y + char1.h) {
                        // Bottom Right corner touches top of cube
                        this.dy = -this.dy;
                        this.y = char1.y - this.h;
                        console.log("BR hits top");
                    }
                        //------ X bouncing ----
                else if (cor1x < char1.x + char1.w && cor1y > char1.y + modifier
                    && cor1y < char1.y + char1.h - modifier && cor1x > char1.x) {
                        // Top left corner touches right of cube
                        this.dx = -this.dx;
                        this.x = char1.x + char1.w;
                        console.log("TL hits right");
                    }
                else if (cor3x < char1.x + char1.w && cor3y > char1.y + modifier
                    && cor3y < char1.y + char1.h - modifier && cor3x > char1.x) {
                        // Bottom left corner touches right of cube
                        this.dx = -this.dx;
                        this.x = char1.x + char1.w;
                        console.log("BL hits right");
                    }
                else if (cor2x > char1.x && cor2y > char1.y + modifier
                    && cor2y < char1.y + char1.h - modifier && cor2x < char1.x + char1.w) {
                        // Top right corner touches left of cube
                        this.dx = -this.dx;
                        this.x = char1.x - this.w;
                        console.log("TR hits left");
                    }
                else if (cor4x > char1.x && cor4y > char1.y + modifier
                    && cor4y < char1.y + char1.h - modifier && cor4x < char1.x + char1.w) {
                        // Bottom right corner touches left of cube
                        this.dx = -this.dx;
                        this.x = char1.x - this.w;
                        console.log("BR hits left");
                    }

        }


        //Corner 1 = x, y | corner 2 = x+w, y
        //Corner 3 = x, y+h | corner 4 = x+w, y+h
        // If the corner touches and hits a side, bounce from there.

        

        //Two lines cut through block, like x, figure out which segment the bouncing block's center is in.
            // To do fantastically, check each corner

        // IN COLLISSION DETECTION, MOVE THEM OUTSIDE EACH OTHER


    }
}

//          //// y
//          //// y+h
//
//  ///O y
//  //// y+h

let canvas = document.getElementById("testCanvas");
var ctx = canvas.getContext("2d");
setInterval(updateGame, 1);

// Key Movement
var char1 = new character(30, 30, 50, 50, 0, 0, 2, "red");
// Free Movement
var char2 = new character(30, 30, 50, 50, 1, 1, 1, "blue");

// enemies.push(new character(30, 30, 50, 50, 1, 1, 1, "blue"));


function updateGame() {
    char1.move();
    char1.checkManualCollision(canvas);
    char1.enforceBoundry(canvas);
    
    
    char2.checkAutonomousCollision(canvas);
    char2.bounceOffBlock(char1);
    char2.enforceBoundry(canvas);
    char2.move();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle= "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    char1.draw(ctx);
    char2.draw(ctx);

}

window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    char1.keyPressed(key);
}
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    char1.keyReleased(key);
}