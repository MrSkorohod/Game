"use strict";
const closeGame = document.getElementById("close");
const start = document.getElementById("start");
const startGame = document.querySelector(".startScreen");
const game = document.querySelector(".game");

start.addEventListener("click", (event)=>{
    startGame.style.display = "none";
    game.style.display = "block";
});
closeGame.addEventListener("click", (event)=>{
   window.close();
});