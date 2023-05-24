//script file

let [computerscore, yourscore] = [0,0];

let  results = document.getElementById("gameresult");

let winprediction = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'lose',
        'paper' : 'win'
    },

    'scissor' : {
        'rock' : 'win',
        'scissor' : 'draw',
        'paper' : 'lose'
    },

    'paper' : {
        'rock' : 'lose',
        'scissor' : 'win',
        'paper' : 'draw'
    }
}

function check(input){
    var choices = ["rock", "paper", "scissor"];
    var computer = Math.floor(Math.random()* 3);

    document.getElementById("computerchoice").innerHTML = `Computer -> ${choices[computer].toUpperCase()}`;
    document.getElementById("yourchoice").innerHTML = `You -> ${input.toUpperCase()}`

    var computerchoice = choices[computer];

    switch(winprediction[input][computerchoice]){
        case 'win':
            results.innerHTML = "You Win";
            yourscore++;
            break;

        case 'lose':
            results.innerHTML = "Computer Win"
            computerscore++;
            break;

        default:
            results.innerHTML = "Draw"
            break;

    }

    document.getElementById("computerscore").innerHTML = computerscore;
    document.getElementById("yourscore").innerHTML = yourscore;


}