let player1 = 0;
let player2 = 0;
let results = ['first','second','third'];
let previous = [0,0,0];
let diceFace = 0;
let endRoll = 0;
let lastNum = 0;
let myInterval;

//console.log(animationNumbers);


window.onload = function() {
    let runButton = document.getElementById("run-button");
    runButton.src = "./images/run-button.png"
    runButton.addEventListener("click", startAnimation);


}

function startAnimation() {
    myInterval = setInterval(updateImage, 100);
}

function updateImage(){

    //console.log('Previous number: ' + previous[0]);
    diceFace = Math.ceil(Math.random()*6);
    if (diceFace == lastNum && diceFace == 6){
        diceFace--;
    }
    else if (diceFace == lastNum) {
        diceFace++;
    }

    lastNum = diceFace;
    console.log(diceFace);
    
    document.getElementById("dice").src = "./images/" + diceFace.toString() + ".png";
    endRoll++;
    
    if(endRoll == 10){
        console.log('End animation')
        endRoll = 0;
        clearInterval(myInterval);
        updateScore();
    }
}

function updateScore() {

    console.log('I am in update score')

    playerOneGuess = document.getElementById("guess-1").value;
    playerTwoGuess = document.getElementById("guess-2").value;

    if (diceFace.toString() == playerOneGuess){
        player1++;
        console.log('Hey');
    } else if (diceFace.toString() == playerTwoGuess) {
        player2++;
        console.log('Hey');
    }

    document.getElementById('player1').innerText = "Player 1 score: " + player1;

    document.getElementById('player2').innerText = "Player 2 score: " + player2;


    previous[2] = previous[1];
    previous[1] = previous[0]
    previous[0] = diceFace;


    for (let i = 0; i<3;i++) {
        //Update previous results
        document.getElementById(results[i]).innerText = "-- " + previous[i].toString() + " --"
    }
}

