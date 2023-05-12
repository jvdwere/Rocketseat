/*  ### Sistema de gastos familiar


Crie um objeto que possuira duas propriedades, ambas do tipo Array:
    * Receita: []
    * Despesas: []

Agora, crie uma function que ira calcular o tatal de receitas e despesas e ira
 mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido
 do valor do saldo.

 */


 let renda = {
    entrada: [2500, 450.58, 287.99, 356.75],
    saida: [1200, 699.88, 80.25, 200.57, 129.99, 120]
 }

 function soma(array){
    let total = 0

    for( let value of array){
        total += value
    }

    return total

 }

function calcularBalanço() {
    const calcularReceita = soma(renda.entrada)
    const calcularDespesas = soma(renda.saida)

    const total = calcularReceita - calcularDespesas

    const itsOk = total >= 0

    let mensagem = "Negativo"

    if (itsOk) {
        mensagem = "Positivo"
    }
    
    return `Seu saldo é ${mensagem}: ${total.toFixed(2)}`
}

console.log(calcularBalanço())
