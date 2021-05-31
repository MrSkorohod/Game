"use strict";
const gameArea = document.getElementById("gameArea");
gameArea.style.background = `url(img/bg.png) no-repeat`;
gameArea.style.width = `600px`;
gameArea.style.height = `600px`;
gameArea.style.margin = `0 auto`;
gameArea.style.position = `relative`;
gameArea.style.left = `0`;
gameArea.style.top = `0`;
let interval;
let points = 0;


let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
gameArea.appendChild(canvas);
let x = 0, x2 = 0;
let test = 100;
let startPositionDemon = 100;
let drop = 0;
let img = new Image();
let ground = new Image();
let demon = new Image();
let gem = new Image();
img.src = "img/bg.png";
ground.src = "img/ground.png";
demon.src = "img/demon.png";
gem.src = "img/gem.png";
gem.onload = function(){
    ctx.drawImage(ground, (img.width - ground.width)/2, test);
    let posX = (img.height - demon.width)/2;
    let posY = startPositionDemon - demon.height;
    ctx.drawImage(demon, posX, posY);
    let arrGrounds = [];
    let arrGems = [];
    arrGrounds[0] = {
        x: Math.floor(Math.random()*img.width),
        y: img.height,
    };
    arrGems[0] = {
        gemX: img.height+200,
        gemY: img.height,
    };

    function draw(event){
        ctx.drawImage(img, 0,0);
        if(x >= img.width){
            x = 0;
            x2 = 0;
        }
        ctx.drawImage(img,0,x+=2,canvas.width,canvas.height - x2,0,0,canvas.width, canvas.height - x2);
        if( x >= img.height - canvas.height){
            x2+=2;
            ctx.drawImage(img, 0, 0, canvas.width, x2, 0, canvas.height - x2, canvas.width, x2);
        }
        for(let i = 0; i < arrGrounds.length; i++) {
            ctx.drawImage(ground, arrGrounds[i].x, arrGrounds[i].y);
            arrGrounds[i].y--;

            if(arrGrounds[i].y === 500){
                arrGrounds.push({
                    x: Math.floor(Math.random()*img.width),
                    y: img.height,
                })
            }
        }
        for(let i = 0; i < arrGems.length; i++) {
            ctx.drawImage(gem, arrGems[i].gemX, arrGems[i].gemY);
            arrGems[i].gemY--;
            if (arrGems[i].gemY === 400) {
                arrGems.push({
                    gemX: Math.floor(Math.random() * img.width),
                    gemY: img.height,
                })
            }
        }
        for(let i = 0; i < arrGems.length; i++){
            if(posY+demon.height> arrGems[i].gemY && posY < arrGems[i].gemY + gem.height){
                if(posX + 30 > arrGems[i].gemX && posX + demon.width - 30 < arrGems[i].gemX + gem.width){
                    points++;
                    arrGems.splice(i,1);
                    break;
                }
            }
        }
        drawPerson(arrGrounds);
    }

    function drawPerson(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (posY+demon.height > arr[i].y && posY+demon.height < arr[i].y + ground.height) {
                drop++;
                if (posX + 30< arr[i].x || posX + demon.width - 30 > arr[i].x + ground.width ){
                    drop = 0;
                }
            }
        }
        if(drop === 0){
            if (posY < 600){
                ctx.drawImage(demon, posX, posY++);
            }
        }else{
                ctx.drawImage(demon,posX, posY--);
        }

        if(posY+demon.height  >= 600 || posY <= 0){
            alert(`End game! Your point:${points}`);
            clearInterval(interval);
            location.reload();
        }
    }

    document.addEventListener("keydown", (event) =>{
        if(event.code === "Enter"){
            interval = setInterval(draw,15);
        }

    });
    document.addEventListener("keydown", event=>{
        if(event.code === "ArrowLeft" ){
            requestAnimationFrame(()=>{
                posX-=10;
            });
        }
        if(event.code === "ArrowRight" ){
            requestAnimationFrame(()=>{
                posX +=10;
            });
        }
    });
};





