const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scisor = document.getElementById("scisor");

const com = Math.round(Math.random() * 2);
var comImg;

switch (com) {
    case 0:
        comImg = "rock";        
        break;
    case 1:
        comImg = "paper";
        break;
    default:
        comImg = "scisor";
        break;
}

function game(user, com) {
    
    if (user === "rock" && com === "scisor" || user === "paper" && com === "rock" || user === "scisor" && com === "paper") {
        alert("Ganaste");
    }

    else if (user === "paper" && com === "scisor" || user === "scisor" && com === "rock" || user === "rock" && com === "paper") {
        alert("Perdiste");
    }

    else if (user === com) {
        alert("Empate");
    }

    else {
        return "Error: Has ingresado algún valor incorrecto. Escribe las opciones correctamente y en minúscula.";
    }

}

rock.addEventListener("click", function(){ game('rock', comImg); });
paper.addEventListener("click", function(){ game('paper', comImg); });
scisor.addEventListener("click", function(){ game('scisor', comImg); });