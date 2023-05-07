//No documentation in this one so far. look at "https://github.com/PhillUndSoos/enemy-movement-patterns" for documented code
//tells VSCode that im using canvas, so it suggests built in canvas methods
/** @type {HTMLCanvasElement} */

//references canvases at index.HTML
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const canvas4 = document.getElementById('canvas4');

//sets the rendering context of canvases to two-dimensional rendering
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');

//gives reference to canvas dimension in pixels
CANVAS_WIDTH = canvas1.width = 450;
CANVAS_HEIGHT = canvas1.height = 900;

//sets the amount of enemys for each type
const amountOfEnemys1 = 9;
const amountOfEnemys2 = 9;
const amountOfEnemys3 = 15;
const amountOfEnemys4 = 6;

//enemy objects will be saved in these arrays
const enemiesArray1 = [];
const enemiesArray2 = [];
const enemiesArray3 = [];
const enemiesArray4 = [];

//counts every frame
let gameFrame = 0;

//factory for enemy objects of type 1
class Enemy1 {
    //constructs enemy objects
    constructor() {

        //connects the sprite image to the JS file
        this.image = new Image();
        this.image.src = './media/enemy1.png';

        //sets the sprites dimension relative to the source
        this.spriteWidth = 293;
        this.spriteHeight = 155;

        //sets the size of the sprite
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteheight / 2.5;

        //randomly generate a starting position on the canvas
        this.x = Math.random() * (canvas1.width - this.width);
        this.y = Math.random() * (canvas1.height - this.height);

        //sets the frame of the sprite, if increased by one, the next sprite (frame) is selected
        this.frame = 0;

        //this sets the animation speed of the sprites to a random number between 1 and 4
        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);
        
        //this sets the move speed of the sprites
        this.moveSpeed = Math.floor(Math.random() * 3 + 6);
    }

    //this method, when called, updates the position of the object it gets called on, making it move.
    update() {
        if (gameFrame % this.moveSpeed === 0) {
            this.x += Math.random() * 15 - 7.5;
            this.y += Math.random() * 15 - 7.5;
        }

        //animate sprites, if gameFrame / 2 remainder is 0, then execute animation frame (to slow the animation down)
        if (gameFrame % this.spriteAnimationSpeed === 0) {
            //picking frame 1-4, if higher, resets back to frame 0
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    //this method draws the constructed object at set coordiantes with set dimensions(size)
    draw() {
        //This draws the image. Syntax explanation here: "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage"
        //this.frame * this.spriteWidth makes it so if sprite.frame is increased by one, the 2nd sprite of the picture is used
        ctx1.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth,
            this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

class Enemy2 {
    constructor() {
        this.image = new Image();
        this.image.src = './media/enemy2.png'

        this.speed = Math.random() * 4 + 1;

        this.spriteWidth = 266;
        this.spriteHeight = 188;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);

        this.frame = 0;

        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);

        this.angle = 0;

        this.angleSpeed = Math.random() * 0.2;

        this.curve = Math.random() * 8

    }

    update() {
        this.x -= this.speed;

        this.y += this.curve * Math.sin(this.angle);
        
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0) {
            this.x = canvas.width
        }

        if (gameFrame % this.spriteAnimationSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    draw() {
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}








//a loop that loops amountOfEnemys'th times and creates a new instance of an enemy object and pushes it into enemiesArray for each iteration
for (let i = 0; i < amountOfEnemys1; i++) {
    enemiesArray1.push(new Enemy1());
}

for (let i = 0; i < amountOfEnemys2; i++) {
    enemiesArray1.push(new Enemy2());

}

// for (let i = 0; i < amountOfEnemys3; i++) {
//     enemiesArray1.push(new Enemy3());

// }

// for (let i = 0; i < amountOfEnemys4; i++) {
//     enemiesArray1.push(new Enemy4());

// }

function animate() {
    ctx1.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);
    ctx2.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);
    ctx3.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);
    ctx4.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);

    enemiesArray1.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    enemiesArray2.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    // enemiesArray3.forEach(enemy => {
    //     enemy.update();
    //     enemy.draw();
    // });
    // enemiesArray4.forEach(enemy => {
    //     enemy.update();
    //     enemy.draw();
    // });

    requestAnimationFrame(animate);
}