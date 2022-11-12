
window.onload = function() {

    const gameOver1 = new Image();
    gameOver1.src = '../images/gameover.png';

    const winImage = new Image();
    winImage.src = '../images/winImage.png';

    const instructionsImage = new Image();
    instructionsImage.src = '../images/instructions.png';

    const bg = new Background(canvas.width, canvas.height);
    const dona = new Dona (300,500,209,260);

    const menu = document.querySelector(".principal")

    document.getElementById("button-startgame").onclick = function() {
    menu.style.display = "none"
    startGame();
    };

    document.getElementById("button-instructions").onclick = function() {
    menu.style.display = "none"
    instructions();
    }

    function startGame() {

    if(!requestId){
    audio.play();
    requestId = requestAnimationFrame(updateGame);
    }
    }

    function updateGame(){
        frames ++;
        ctx.clearRect(0,0, canvas.height, canvas.width)

        bg.update();
        dona.update();

        generateObstacle()
        drawObstacle()
    
        ctx.fillStyle = "black";
        ctx.fillText(`Coins: ${points}`, 60, 100)
        ctx.font="bold 32px verdana";
        ctx.strokeRect(40,47, 240,80);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000'; 
        ctx.stroke();

        ctx.fillStyle = "black";
        ctx.fillText(`Lives: ${dona.lives}`, 800, 100)
        ctx.font="bold 32px verdana";
        ctx.strokeRect(780,47, 180, 80);

        if(requestId){
        audio.play();
        requestAnimationFrame(updateGame);
        }

        addEventListener("keydown", (event) =>{
            if(event.keyCode === 87){
            winWindow();
            }
            })

    }

    function instructions(){
        instructionsImage.onload = function () {
        fill_canvas(instructionsImage);
        }
    
        ctx.drawImage(instructionsImage, 0,0)
        ctx.fillStyle = "rgba(200, 0, 0, 0)";
        ctx.fillRect(0, 0, 1000, 800);

        addEventListener("keydown", (event) =>{
        if(event.keyCode === 83){
        startGame();
        }
            
        })
    }

    function winWindow(){
        songWin.play()
        audio.pause()
        
        requestId = undefined;

        winImage.onload = function () {
        fill_canvas(winImage);
        startConfetti();
        }
    
        ctx.drawImage(winImage, 0,0)
        ctx.fillStyle = "rgba(200, 0, 0, 0)";
        ctx.fillRect(0, 0, 1000, 800);        

    }

    function gameOver (){

        audio.pause();
        requestId = undefined;

        arrObstacles.splice(0)
        
        gameOver1.onload = function () {
        fill_canvas(gameOver1);
        }

        ctx.drawImage(gameOver1, 0,0)
        ctx.fillStyle = "rgba(200, 0, 0, 0)";
        ctx.fillRect(0, 0, 1000, 800);

    }


    function generateObstacle(){

        if(!(frames % 160 === 0)){
        return true
        }

        if((frames % 20 === 0)){
        const xRandom = Math.floor(Math.random() * 900 - 200) + 20;
        const bomb = new Obstacle(xRandom + 100, obstacleImages[0], false, speed = 4)

        arrObstacles.push(bomb);
        console.log("bomba", bomb.x);
        }

        if((frames % 2 === 0)){
        const xRandom1 = Math.floor(Math.random() * 900 - 200) + 20;
        const light = new Obstacle(xRandom1 + 200, obstacleImages[1], false, speed = 3)
    
        arrObstacles.push(light);
        //console.log("Enemigos generados:", arrObstacles);
        }

        if((frames % 10 === 0)){
        const xRandom2 = Math.floor(Math.random() * 900 - 200) + 20;
        const coin = new Obstacle(xRandom2 + 80, obstacleImages[2], true, speed = 5)
        
        arrObstacles.push(coin);
        console.log("moneda", coin.x);
        }

    }

    function drawObstacle(){
        arrObstacles.forEach((obstacle, obstacle_index) =>{
        obstacle.update()
        if(obstacle.y > canvas.height){ 
        arrObstacles.splice(obstacle_index, 1)
        }

        
        if(dona.colission(obstacle) && !obstacle.good){
            if (dona.lives === 0) return gameOver()
            dona.lives -= 1;
            arrObstacles.splice(obstacle_index, 1);
            console.log(dona.lives);
        } 
            
        if (dona.colission(obstacle) && obstacle.good){
            points ++;
            speed ++;
            arrObstacles.splice(obstacle_index, 1)
        }
    });

        }

    addEventListener("keydown", (event) =>{
        if(event.keyCode === 39){
        dona.x += 30;
        }
    
        if(event.keyCode === 37){
        dona.x -= 30;
        }
    })
    
}



