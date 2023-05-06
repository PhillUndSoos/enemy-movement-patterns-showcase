//No documentation in this one so far. look at "https://github.com/PhillUndSoos/enemy-movement-patterns" for documented code

/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 450;
CANVAS_HEIGHT = canvas.height = 900;

const amountOfEnemys = 10;

const enemiesArray = [];


const enemyImage1 = new Image();

let gameFrame = 0;


class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = './media/enemy1.png'
        
        this.spriteWidth = 293;
        this.spriteHeight = 155;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);

        this.frame = 0;

        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);

        this.moveSpeed = Math.floor(Math.random() * 3 + 6);

    }

    update() {
        if (gameFrame % this.moveSpeed === 0) {
            this.x += Math.random() * 15 - 7.5;
            this.y += Math.random() * 15 - 7.5;
        }

        if (gameFrame % this.spriteAnimationSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < amountOfEnemys; i++) {
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });

    gameFrame++;

    requestAnimationFrame(animate);
}
animate()


//      ++ENEMY2+++
const canvas2 = document.getElementById('canvas2');

const ctx2 = canvas2.getContext('2d');

canvas2_WIDTH = canvas2.width = 450;
canvas2_HEIGHT = canvas2.height = 900;

const amountOfEnemys2 = 10;

const enemiesArray2 = [];


const enemyImage2 = new Image();


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
    update2() {
        this.x -= this.speed;

        this.y += this.curve * Math.sin(this.angle);
        
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0) {
            this.x = canvas2.width
        }

        if (gameFrame % this.spriteAnimationSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    draw2() {
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < amountOfEnemys2; i++) {
    enemiesArray2.push(new Enemy2());
}

function animate2() {
    ctx2.clearRect(0, 0, canvas2_WIDTH, canvas2_HEIGHT);

    enemiesArray2.forEach(enemy => {
        enemy.update2();
        enemy.draw2();
    });


    requestAnimationFrame(animate2);
}
animate2()

const canvas3 = document.getElementById('canvas3');

const ctx3 = canvas3.getContext('2d');

canvas3_WIDTH = canvas3.width = 500;
canvas3_HEIGHT = canvas3.height = 1000;

const amountOfEnemys3 = 10;

const enemiesArray3 = [];


const enemyImage3 = new Image();



class Enemy3 {
    constructor() {
        this.image = new Image();
        this.image.src = './media/enemy3.png'

        this.speed = Math.random() * 4 + 1;

        this.spriteWidth = 218;
        this.spriteHeight = 177;

        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;

        this.x = Math.random() * (canvas3.width - this.width );
        this.y = Math.random() * (canvas3.height - this.height);

        this.frame = 0;

        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);

        this.angle = Math.random() * 10 + 395;

        this.angleSpeed = Math.random() * 1.5 + 0.5;

        this.curve = Math.random() * 200 + 50;
    }

    update3() {
        this.x = canvas3.width / 2 * Math.cos(this.angle * Math.PI / 100) + (canvas3.width / 2 - this.width / 2);
        
        this.y = canvas3.height / 2 * Math.sin(this.angle * Math.PI / 300) + (canvas3.height / 2 - this.height / 2);
        
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0) {
            this.x = canvas3.width
        }

        if (gameFrame % this.spriteAnimationSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    draw3() {
        ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < amountOfEnemys3; i++) {
    enemiesArray3.push(new Enemy3());
}

function animate3() {
    ctx3.clearRect(0, 0, canvas3_WIDTH, canvas3_HEIGHT);

    enemiesArray3.forEach(enemy => {
        enemy.update3();
        enemy.draw3();
    });

    requestAnimationFrame(animate3);
}
animate3()



//      ++ENEMY4+++

const canvas4 = document.getElementById('canvas4');

const ctx4 = canvas4.getContext('2d');

canvas4_WIDTH = canvas4.width = 500;
canvas4_HEIGHT = canvas4.height = 1000;

const amountOfEnemys4 = 6;

const enemiesArray4 = [];


const enemyImage4 = new Image();



//Factory for enemy objects
class Enemy4 {
    constructor() {
        this.image = new Image();
        this.image.src = './media/enemy4.png'

        this.speed = Math.random() * 4 + 1;

        this.spriteWidth = 213;
        this.spriteHeight = 212;

        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;

        this.x = Math.random() * (canvas4.width - this.width );
        this.y = Math.random() * (canvas4.height - this.height);

        this.newX = Math.random() * (canvas4.width - this.width );
        this.newY = Math.random() * (canvas4.height - this.height);

        this.frame = 0;

        this.spriteAnimationSpeed = Math.floor(Math.random() * 3 + 1);

        this.locationChangeInterval = Math.floor(Math.random() * 200 + 150);
    }

    update4() {
        if (gameFrame % this.locationChangeInterval === 0) {
            this.newX = Math.random() * (canvas4.width - this.width );
            this.newY = Math.random() * (canvas4.height - this.height);
        }
        
        let distanceX = this.x - this.newX;
        let distanceY = this.y - this.newY;

        this.x -= distanceX/160;
        this.y -= distanceY/80;
    
        if (this.x + this.width < 0) {
            this.x = canvas4.width
        }

        if (gameFrame % this.spriteAnimationSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
        
    }

    draw4() {
        ctx4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}


for (let i = 0; i < amountOfEnemys4; i++) {
    enemiesArray4.push(new Enemy4());
}


function animate4() {

    ctx4.clearRect(0, 0, canvas4_WIDTH, canvas4_HEIGHT);


    enemiesArray4.forEach(enemy => {
        enemy.update4();
        enemy.draw4();
    });

    requestAnimationFrame(animate4);
}
animate4()

