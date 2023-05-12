/* ### Fahrenheit para Ceulsius 

    Crie uma function q receba uma string em celsius ou fahrenheit e faça a 
     conversao de uma unidade para outra

     C = (F - 32) * 5/9

     F = (C * 9/5) + 32

*/


function converter(graus) {
    const celsiusFormato = graus.toUpperCase().includes("C")
    const fahrenheitFormato = graus.toUpperCase().includes("F")

    if (!celsiusFormato && !fahrenheitFormato) {
        throw new Error("Formato Invalido")
    }

    let atualizarGraus = Number(graus.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let grausFormato = " C"

    if (celsiusFormato) {
        atualizarGraus = Number(graus.toUpperCase().replace("C", ""));
        formula = celcius => (celcius * 5 / 9 ) + 32
        grausFormato = " F"

    }

    return formula(atualizarGraus).toFixed(0) + grausFormato

}

try {
    console.log(converter("70 F"))
    console.log(converter("20 C"))

} catch (error) {
    console.log(error.message)
}