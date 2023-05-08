
// Retornando valores

function divi(parametro1, parametro2) {

    let result = `${parametro1} Dividido por ${parametro2} é igua a ${parametro1 / parametro2}`
     return(result)
}        

let dividendo = 10
let divisor = 2

console.log(divi(dividendo, divisor))

/* 
    Como no execicio anterior, com outro Operador Aritimetico agr, fiz a estrutura basica 
     de uma funcao, porem adicionei uma variavel result q vai representar o resultado da 
     operacao entre o parametro1 e parametro2. Agora com um return q faz com q o seja retornado 
     o valor de result na hora da execução.

    Veja que interessante, na linha 6, ao invez de result receber apenas a operacao eu tbm adicionei
     uma mensagem q deixa tudo mais claro. Basicamente pedi para q me mostrasse o valor dos parametros
     e dps o resultado da o peracao, tendo assim uma resposta mais completa de legal de ser lida  

    Como de costume a funcao precisa ser chamada, e podemos observar isso no console.log da 
     linha 13 onde a funcao é chamada e tbm é passado pra ela dois argumentos. 
     Tambem, a fim de organizacao e de, propriamente, se parecer mais com uma tarefa
     real, foi criado duas variaveis para receber os valores as serem operados, porem ainda 
     iremos ver o seu resultado apenas no console 

    Assim como os parametros a variavel result so exite dentro do escopo da funcao divi. vale observar
     que para q assim seja deve ser colocado let - var ou const, nao averia quebras no codigo se a 
     variavel fosse crianda sem um desse atributos, porem poderia causar graves erros, pois se assim 
     fosse feito aquela variavel, no nosso caso result, passaria a exitir em no escopo mae tbm, e no
     caso de um codigo mais complexo poderia ocasionar muitos problemas, sendo assim, sempre crie variaveis
     com var - let ou const, cada qual para seu uso especifico  
*/
                                       
