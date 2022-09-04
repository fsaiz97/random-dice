let yourScore = 0;
let opponentScore = 0;
let results = ['first','second','third'];
let previous = [0,0,0];


window.onload = function() {
    let runButton = document.getElementById("run-button");
    runButton.src = "./images/run-button.png"
    runButton.addEventListener("click", diceRun)


}

function diceRun() {

    let num = Math.ceil(Math.random()*6)
    updateScore(num);

    document.getElementById("dice").src = "./images/" + num.toString() + ".png"

    for (let i = 0; i<3;i++) {
        document.getElementById(results[i]).innerText = "-- " + previous[i].toString() + " --"
    }
}

function updateScore(num) {
    previous[2] = previous[1];
    previous[1] = previous[0]
    previous[0] = num;
}




/*
function displayResult (e) {
    const diceNum = Math.floor(Math.random()*6) + 1;
    
    switch(diceNum){
        case 1:
        // show dice 1            
        case 2:
        // show dice 2
        case 3:
        // show dice 3
        case 4:
        // show dice 4
        case 5:
        // show dice 5
        case 6:
        // show dice 6
    }

}

dice.addEventListener("click", displayResult);
*/
