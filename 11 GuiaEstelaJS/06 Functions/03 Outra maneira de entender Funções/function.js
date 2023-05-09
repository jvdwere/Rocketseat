
// Function é como um liquidificador

function fazerSuco(fruta1, fruta2){

    return(`Suco de ${fruta1} com ${fruta2}`)

}

const copo = fazerSuco('Morango', 'Acerola')

console.log(copo)
            
/*
    Lendo ao contrario.
        Eu tenho um copo q recebe algo, neste caso a funcao fazerSuco com dois argumentos.
        A funcao fazerSuco me retorna uma fraser concatenando com as propriedades.
        As propriedades receberam os respectivos argumentos passados.

        Sendo assim o meu console.log(copo) me mosta oq tem dentro do copo.

    Dessa vez passei duas Strings como argumento, q serão concatenadas na frase q eu determinei em return.


    É quase como se o JS tivesse escrito pra mim dentro do escopo da funcao assim
                
                    let fruta1 = 'Morango'
                    let fruta2 = 'Acerola' 
                    
        COMO SE!!! Variaveis e propriedades nao sao a msm coisa.
 */
