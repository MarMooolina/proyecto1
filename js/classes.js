class Background {
    /**
     * 
     * @param {number} w  => canvas.width
     * @param {number} h  => canvas.height
     */
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.speed = speed;

        this.image = new Image()
        this.image.src = "../images/bg.png" 
    }

    update(){
    
        if(this.y > canvas.height){
            this.y = 0;
        }
        this.y ++;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.image,
            this.x,
            this.y - this.height,
            this.width,
            this.height,
        )
    }
}

class Dona{
    /**
     * @param {number} x  => x position
     * @param {number} y  => y position
     * @param {number} w  => width
     * @param {number} h  => height
     */
    constructor(x,y,w,h,speed,lives){
        this.x = x;
        this.y = 480;
        this.width = w;
        this.height = h;
        this.lives = 3;

        this.image = new Image();
        this.image.src = "../images/dona.png" 


        this.userPull = 0;
        

        this.imageGameOver = new Image()
        this.imageGameOver.src = "../images/gameover.png"

    }

    update(){
    this.x = this.x + this.userPull;
    this.x = this.x - this.userPull;

        if(this.x <= 0){
            this.userPull = 0;
            this.x = 0;
            this.position = 0;
        }

        ctx.drawImage(
            this.image, 
            this.x, 
            this.y,
            this.width,
            this.height)
    }

    colission(obstacle){
        return(this.x < obstacle.x + obstacle.width &&
            this.x + 30 + this.width > obstacle.x &&
            this.y + 30 < obstacle.y + obstacle.height &&
            this.y + 30 + this.height > obstacle.y)
}
}

class Obstacle{
        constructor (x,image,good,speed){
            this.x = x;
            this.y = 0;
            this.width = 80;
            this.height = 80;
            //this.boundary = this.image + 80;
            this.speed = speed;
            this.image = new Image();
            this.image.src = image;
            this.good = good;
    }   
        update(){
            this.y = this.y + this.speed;
            ctx.drawImage (this.image, this.x, this.y, this.width, this.height)
            //ctx.strokeRect(this.x, this.y, this.width, this.height, this.boundary);
            }
}