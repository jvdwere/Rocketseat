
/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistema de
 notas em caracteres tipo A B C D F sendo A a nota maxima 100.


  * De 95 pra cima - A
  * Entre 80 e 94 - B
  * Entre 70 e 79 - C
  * Entre 60 e 69 - D
  * menos q 60 - F
  
  */





                               // com if else

// function getScore(score){
//     let scoreA = score > 95 && score <= 100
//     let scoreB = score >= 80 && score <= 94
//     let scoreC = score >= 70 && score <= 79
//     let scoreD = score >= 60 && score <= 69
//     let scoreF = score < 60 && score >= 0

//     let scoreFinal

//     if (scoreA) {
//         scoreFinal = 'A'
//     } else if (scoreB) {
//         scoreFinal = 'B'
//     } else if (scoreC) {
//         scoreFinal = 'C'
//     } else if (scoreD) {
//         scoreFinal = 'D'
//     } else if (scoreF) {
//         scoreFinal = 'F'
//     } else (
//         scoreFinal = "Nota invalida"
//     )

//         return scoreFinal
// }

// console.log(getScore(96))
// console.log(getScore(90))
// console.log(getScore(70))
// console.log(getScore(60))
// console.log(getScore(40))
// console.log(getScore(120))
// console.log(getScore(-1))








                                    // com switch case

const getScore = (score) => {

    

    switch (true) {

        case score > 100 || score < 0:
            scoreFinal = 'Nota invalida'
            break
        case score >= 90:
            scoreFinal = "A";
            break;
        case score >= 80:
            scoreFinal = "B";
            break;
        case score >= 70:
            scoreFinal = "C";
            break;
        case score >= 60:
            scoreFinal = "D";
            break

        default:
            scoreFinal = "F";
    }
    return scoreFinal

}
console.log(getScore(87))
console.log(getScore(96))
console.log(getScore(90))
console.log(getScore(70))
console.log(getScore(60))
console.log(getScore(40))
console.log(getScore(101))
console.log(getScore(-101))



