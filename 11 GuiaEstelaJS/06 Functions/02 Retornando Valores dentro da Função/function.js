
// Retornando valores

function divi(parametro1, parametro2) {

    let result = `${parametro1} Dividido por ${parametro2} é igua a ${parametro1 / parametro2}`
    return result
}

let dividendo = 10
let divisor = 2

console.log(divi(dividendo, divisor))


/* 
    Como no execício anterior, com outro Operador Aritmético agora, fiz a estrutura básica 
     de uma função, porem adicionei uma variável result que vai representar o resultado da 
     operação entre o parâmetro1 e parâmetro2. Agora com um return que faz com que o seja retornado 
     o valor de result na hora da execução.

    Veja que interessante, na linha 6, ao invés de result receber apenas a operação eu também adicionei
     uma mensagem que deixa tudo mais claro. Basicamente pedi para me mostrar o valor dos parâmetros
     e depois o resultado dá operação, tendo assim uma resposta mais completa de legal de ser lida  

    Como de costume a função precisa ser chamada, e podemos observar isso no console.log da 
     linha 13 onde a função é chamada e também é passado para ela dois argumentos. 
     Também, a fim de organização e de, propriamente, se parecer mais com uma tarefa
     real, foi criado duas variáveis para receber os valores a serem operados, porem ainda 
     iremos ver o seu resultado apenas no console 

    Assim como os parâmetros a variável result só exite dentro do escopo da função divi. Vale observar
     que para que assim seja deve ser colocado o atributo let - var ou const, não haveria quebras no código se a 
     variável fosse criada sem um desses atributos, porem poderia causar graves erros, pois se assim 
     fosse feito aquela variável, no nosso caso result, passaria a existir no escopo mãe também, e no
     caso de um código mais complexo poderia ocasionar muitos problemas, sendo assim, sempre crie variáveis
     com var - let ou const cada qual para seu uso específico  
*/

