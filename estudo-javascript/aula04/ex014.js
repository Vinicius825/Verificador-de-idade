var agora = new Date()
var dia = agora.getDay()
//dia = 6;
if (dia == 0) {
    console.log("Domingo")

} else if (dia == 1) {
    console.log("segunda")
} else if (dia == 2) {
    console.log("terça ")
} else if (dia == 3) {
    console.log("quarta")
} else if (dia == 4) {
    console.log("Quinta")
} else if (dia == 5) {
    console.log("Sexta")
} else if (dia == 6) {
    console.log("Sabado")
} else {
    console.log("ERRO")
}