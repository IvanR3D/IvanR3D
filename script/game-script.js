const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scisor = document.getElementById("scisor");

var playerPoints = document.getElementById("player-points");
var comPoints = document.getElementById("com-points");
var playerScore = 0;
var comScore = 0;

playerPoints.innerText = playerScore + '';
comPoints.innerText = comScore + '';

function comChoose() {
    let com = Math.round(Math.random() * 2);

    if (com == 0) {
        return "rock";
    } else if (com == 1) {
        return "paper";
    } else {
        return "scisor";
    }
}

function game(user, com) {
    
    if (user === "rock" && com === "scisor" || user === "paper" && com === "rock" || user === "scisor" && com === "paper") {
        playerScore++;
        playerPoints.innerText = playerScore + '';
        Swal.fire({
            title: '¡Ganaste!',
            html:
            '<div style="display:flex; flex-direction:row; justify-content:center;align-items:center;width:100%;">' +
            '<img src="./img/'+user+'.png" style="width:50px;"/>' + '<h3> VS </h3>' +
            '<img src="./img/'+com+'.png" style="width:50px;"/>' +
            '</div>',
            icon: 'success',
            confirmButtonText: 'Volver a jugar'
          })
    }

    else if (user === "paper" && com === "scisor" || user === "scisor" && com === "rock" || user === "rock" && com === "paper") {
        comScore++;
        comPoints.innerText = comScore + '';
        Swal.fire({
            title: '¡Perdiste!',
            html:
            '<div style="display:flex; flex-direction:row; justify-content:center;align-items:center;width:100%;">' +
            '<img src="./img/'+user+'.png" style="width:50px;"/>' + '<h3> VS </h3>' +
            '<img src="./img/'+com+'.png" style="width:50px;"/>' +
            '</div>',
            icon: 'error',
            confirmButtonText: 'Volver a jugar'
          })
    }

    else if (user === com) {
        Swal.fire({
            title: '¡Empate!',
            html:
            '<div style="display:flex; flex-direction:row; justify-content:center;align-items:center;width:100%;">' +
            '<img src="./img/'+user+'.png" style="width:50px;"/>' + '<h3> VS </h3>' +
            '<img src="./img/'+com+'.png" style="width:50px;"/>' +
            '</div>',
            icon: 'info',
            confirmButtonText: 'Volver a jugar'
          })
    }

    else {
        return "Error: Has ingresado algún valor incorrecto. Escribe las opciones correctamente y en minúscula.";
    }

}

rock.addEventListener("click", function(){ game('rock', comChoose()); });
paper.addEventListener("click", function(){ game('paper', comChoose()); });
scisor.addEventListener("click", function(){ game('scisor', comChoose()); });