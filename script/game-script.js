function game(user, com) {
    
    if (user === "piedra" && com === "tijera" || user === "papel" && com === "piedra" || user === "tijera" && com === "papel") {
        return "Ganaste";
    }

    else if (user === "papel" && com === "tijera" || user === "tijera" && com === "piedra" || user === "piedra" && com === "papel") {
        return "Perdiste";
    }

    else if (user === com) {
        return "Empate"
    }

    else {
        return "Error: Has ingresado algún valor incorrecto. Escribe las opciones correctamente y en minúscula."
    }

}

function clicked(e) {
    if (e === "rock") {
        alert("Piedra");
    } else if (e === "paper") {
        alert("Papel");
    } else {
        alert("Tijera");
    }
    
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scisor = document.getElementById("scisor");

rock.addEventListener("click", function(){ clicked('rock'); });
paper.addEventListener("click", function(){ clicked('paper'); });
scisor.addEventListener("click", function(){ clicked('scisor'); });