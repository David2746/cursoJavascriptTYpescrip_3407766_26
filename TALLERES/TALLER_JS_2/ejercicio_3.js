let mes = 8;

switch (true) {
    case (mes >= 1 && mes <= 3):
        console.log("Primer trimestre");
        break;

    case (mes >= 4 && mes <= 6):
        console.log("Segundo trimestre");
        break;

    case (mes >= 7 && mes <= 9):
        console.log("Tercer trimestre");
        break;

    case (mes >= 10 && mes <= 12):
        console.log("Cuarto trimestre");
        break;

    default:
        console.log("Mes inválido");
}