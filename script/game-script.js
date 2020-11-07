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

