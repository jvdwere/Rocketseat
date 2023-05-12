
// Function é como um liquidificador

function fazerSuco(fruta1, fruta2){

    return(`Suco de ${fruta1} com ${fruta2}`)

}

const copo = fazerSuco('Morango', 'Acerola')

console.log(copo)
            
/*
    Lendo ao contrário.
        Eu tenho um copo que recebe algo, neste caso a função fazerSuco com dois argumentos.
        A função fazerSuco me retorna uma frase concatenando com as propriedades.
        As propriedades receberam os respectivos argumentos passados.

        Sendo assim o meu console.log(copo) mostra oque tem dentro do copo.

    Dessa vez passei duas Strings como argumento, que serão concatenadas na frase que determinei em return.


    É quase como se o JS tivesse escrito para mim dentro do escopo da função assim
                
                    let fruta1 = 'Morango'
                    let fruta2 = 'Acerola' 
                    
        COMO SE!!! Variáveis e propriedades não são a mesma coisa.
 */
