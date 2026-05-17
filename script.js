let turn=1; // 1:X and 0:O
let gameOver=false;
let winner = "none";
let box = document.querySelectorAll(".box");

let winLine = document.querySelector(".win-line");

let clickCnt = 0;

let indicator = document.querySelector("#turn-indicator");

let statusMsg = document.querySelector("#status-msg");

let scoreX = 0, scoreO = 0, scoreDraw = 0;
let scoreXEl = document.querySelector("#score-x");
let scoreOEl = document.querySelector("#score-o");
let scoreDEl = document.querySelector("#score-d");

//Game Section
for (let place of box) {
    place.addEventListener("click", () => {
        // Checking if game is already over
        if(gameOver) return;

        // Checking if place is empty
        if (place.innerText != "") return;

        // Putting X or O
        if(turn==1) {
            place.innerText = "X";
            place.style.color = "#e63946";
        }
        else {
            place.innerText = "O";
            place.style.color = "#4db8ff";
        }
        
        clickCnt++;
        
        //Turn Indicator
        if(turn == 1) {
            place.innerText = "X";
            place.style.color = "#e63946";
            place.classList.remove("pop");
            void place.offsetWidth; // forces browser to reset the animation
            place.classList.add("pop");
            turn = 0;
            indicator.innerText = "Player O's Turn";
            indicator.style.color = "#4db8ff";
        }
        else {
            place.innerText = "O";
            place.style.color = "#4db8ff";
            place.classList.remove("pop");
            void place.offsetWidth; // forces browser to reset the animation
            place.classList.add("pop");
            turn = 1;
            indicator.innerText = "Player X's Turn";
            indicator.style.color = "#e63946";
        }

        // Win Conditions
        if(box[0].innerText==box[1].innerText && box[1].innerText==box[2].innerText && box[0].innerText!="") {winner = box[0].innerText; winLine.setAttribute("id","win-line-r1");}
        else if(box[3].innerText==box[4].innerText && box[4].innerText==box[5].innerText && box[3].innerText!="") {winner = box[3].innerText; winLine.setAttribute("id","win-line-r2");}
        else if(box[6].innerText==box[7].innerText && box[7].innerText==box[8].innerText && box[6].innerText!="") {winner = box[6].innerText; winLine.setAttribute("id","win-line-r3");}
        else if(box[0].innerText==box[3].innerText && box[3].innerText==box[6].innerText && box[0].innerText!="") {winner = box[0].innerText; winLine.setAttribute("id","win-line-c1");}
        else if(box[1].innerText==box[4].innerText && box[4].innerText==box[7].innerText && box[1].innerText!="") {winner = box[1].innerText; winLine.setAttribute("id","win-line-c2");}
        else if(box[2].innerText==box[5].innerText && box[5].innerText==box[8].innerText && box[2].innerText!="") {winner = box[2].innerText; winLine.setAttribute("id","win-line-c3");}
        else if(box[0].innerText==box[4].innerText && box[4].innerText==box[8].innerText && box[0].innerText!="") {winner = box[0].innerText; winLine.setAttribute("id","win-line-d1");}
        else if(box[2].innerText==box[4].innerText && box[4].innerText==box[6].innerText && box[2].innerText!="") {winner = box[2].innerText; winLine.setAttribute("id","win-line-d2");}
        
        if(winner != "none") {
            gameOver = true;
            if(winner == "X") { scoreX++; scoreXEl.innerText = scoreX; }
            else { scoreO++; scoreOEl.innerText = scoreO; }
            statusMsg.innerText = `Player "${winner}" Wins! 🎉`;
        }
        else if(clickCnt == 9) {
            gameOver = true;
            scoreDraw++; scoreDEl.innerText = scoreDraw;
            statusMsg.innerText = `It's a Draw! 🤝`;
        }
    });    
}

// Replay button

let replay = document.querySelector("#replay");

replay.addEventListener("click", () => {
    box.forEach(b => {
        b.innerText = "";
        b.style.color = "";
    });
    winLine.removeAttribute("id");
    turn = 1;
    gameOver = false;
    winner = "none";
    clickCnt = 0;
    statusMsg.innerText = "";
    indicator.innerText = "Player X's Turn";
    indicator.style.color = "#e63946";
});






