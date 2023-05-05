/** ++++SOME DOCUMENTATION MAY BE OUTDATED++++ */
//tells VSCode that im using canvas2, so it suggests built in canvas2 methods
/** @type {HTMLcanvas2Element} */

//references canvas21 in index.HTML
const canvas2 = document.getElementById('canvas2');

//sets the rendering context of canvas2 to two-dimensional rendering
const ctx = canvas2.getContext('2d');

//sets canvas2_HEIGHT to and WIDTH equal to HTML's canvas2 dimensions for context in our JS file
canvas2_WIDTH = canvas2.width = 500;
canvas2_HEIGHT = canvas2.height = 1000;

//sets the amount of enemys. the value is used in the loop that creates instances of enemy objects
const amountOfEnemys2 = 10;

//enemy objects will be saved in this array
const enemiesArray2 = [];


//creates a new HTMLImageElement and saves it to a constant variable
const enemyImage2 = new Image();

//The source of the image is set here
let gameFrame2 = 0;


//Factory for enemy objects
class Enemy2 {
    //this constructs our enemy objects
    constructor() {
        this.image = new Image();
        this.image.src = './media/enemy2.png'

        //the following line randomly generates the speed of the object | f.e.: random() * 4 - 2 is equal to -2 to 2 
        this.speed = Math.random() * 4 + 1;

        //this sets the sprideWidth and spriteHeight
        this.spriteWidth = 266;
        this.spriteHeight = 188;

        //this scales the width and height using spriteWidth and spriteHeight as reference
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        //the following 2 lines randomly generate a starting position on the canvas2
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);

        //sets the frame of the sprite, if increased by one, the next sprite (frame) is selected
        this.frame = 0;

        //this sets the animation speed of the sprites to a random number between 1 and 4
        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);

        //sets the sinus wave angle
        this.angle = 0;

        //sets the angle speed to a random value
        this.angleSpeed = Math.random() * 0.2;

        //increases the vertical length of the curve 
        this.curve = Math.random() * 8

    }
    //this method, when called, updates the position of the object it gets called on, making it move.
    update2() {
        //sets the horizontal axis of movement equal to the value of speed
        this.x -= this.speed;

        // makes vertical movement a sinus wave 
        this.y += this.curve * Math.sin(this.angle);
        
        //sets the angle of the sinus wave, the higher the speed, the higher the angle
        this.angle += this.angleSpeed;

        //makes the enemy appear back on the right edge of the canvas2 after disappearing on the left edge
        if (this.x + this.width < 0) {
            this.x = canvas2.width
        }

        //animate sprites, if gameFrame / 2 remainder is 0, then execute animation frame (to slow the animation down)
        if (gameFrame2 % this.spriteAnimationSpeed === 0) {
            //picking frame 1-4, if higher, resets back to frame 0
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    //this method draws the constructed object at set coordiantes with set dimensions(size)
    draw2() {
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        //This draws the image. Syntax explanation here: "https://developer.mozilla.org/en-US/docs/Web/API/canvas2RenderingContext2D/drawImage"
        //this.frame * this.spriteWidth makes it so if sprite.frame is increased by one, the 2nd sprite of the picture is used
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

//a loop that loops iamountOfEnemys2'th times and creates a new instance of an enemy object and pushes it into enemiesArray for each iteration
for (let i = 0; i < amountOfEnemys2; i++) {
    enemiesArray2.push(new Enemy2());
}

//this is the animation
function animate2() {
    //clears all old rendered frames
    ctx.clearRect(0, 0, canvas2_WIDTH, canvas2_HEIGHT);

    //calls the update() and draw() method on each item of enemiesArray
    enemiesArray2.forEach(enemy2 => {
        enemy2.update2();
        enemy2.draw2();
    });
    //counts every frame
    gameFrame2++;
    //tells the browser to perform an animaton, invoking the callback passed in
    requestAnimationFrame(animate2);
}
animate2()

//20% of this code already went pretty much over my head. I tried to document everything as good as i could
//but i couldn't explain this to you in detail. If it works, it works. 