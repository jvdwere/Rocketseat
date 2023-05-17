# Introdução

* Gramatica
  * Elementos da linguagem e suas combinações
  * A arte de fala e escrever corretamente

* Vocabulário
  * Conjunto de termos e expressões
  * Agrupamento de palavras

* Como escrever
* O que significa
* Estudo e revisão continuo
  * Você não precisa saber todas as palavras de uma linguá para a entender, porem quanto mais você a fala, quanto mais você a prática, maior sera o seu vocabulário, fluência, técnica, no caso do JS melhor você ira solucionar as tarefas.

## Tipos de dados

### Strings

    Strings contempla toda a cadeia de caractere, podendo ser qualquer caractere.

* Cadeia de caracteres
  * Letras → ASDFGHJKL...
  * Números → 1234567890
  * Símbolos →  + - _ ? / . ,

  Só que, se eu quero escrever textos ou reconhecer certo caracteres como símbolos e números apenas com o efeito de leitura, eu devo o envolve com:

  * Aspas Duplas "aqui vai o texto"
  * Aspas Simples 'aqui vai o texto'
  * Crase `aqui vai o texto`

  Cada qual para o seu uso.

  * Aspas Duplas e Aspas Simples:
    * Para envolver qualquer texto. Atentar para, eu não consigo usar Aspas Duplas em um texto que está envolvido por Aspas Duplas, por exemplo:

            ex1

            ```js

                "gosto muito de "laranja" azeda"

            ```
    O JS não consegue entender que um par Aspas Duplas está dentro do outro, o que ele entende é que existem dois pares de Aspas Duplas um após o outro. Repare bem que na frase a palavra laranja está com outra coloração, isso se deve porque ela esta solta no código.
    Neste caso haveria um erro de sintaxe, porque eu deveria utilizar as Aspas Simples para envolver o texto completamente, e as Aspas Duplas para enfatizar algo no meu texto ou na minha fala, e ter o efeito gramatico desejado, por exemplo:

            ex2

            ```js

                'gosto muito de "laranja" azeda'

            ```
    Agora, sim, podemos ver a coloração esperada. O VS code nos indica erros e escopos através desse esquema de cores, a fim de facilitar a leitura e identificação dos erros e das expressões.
    Do contrário também funciona, caso queira usas Aspas Simples, por exemplo:

            ex3

            ```js

                "gosto muito de 'laranja' azeda"

            ```
    Outra coisa que não podemos fazer é quebrar a linha, por exemplo

            ex4

            ```js

                "gosto muito de 
                 laranja azeda"

            ```
    Algo que podemos fazer em JS é concatenar mensagens estáticas com respostas dinâmicas usando operadores

            ex5

            ```js

                var name = "Joao Victor"

                var mensage = "Ola " + nome

                console.log(mensage)

            ```
    Isso é muito interessante de ser fazer, tudo ficara mais claro quando tratarmos sobre o uso das variáveis, não se preocupe. Uma explicação breve do que ocorre no exemplo acima é:
        Temos duas variáveis, name e mensage, a variável name recebe uma string "Joao Victor", já a variável mensage recebe uma string e a variável name. Então oque fizemos foi concatenar o resultado da variável name na variável mensage para formar uma frase, o resultado será "Ola Joao Victor". Isso tem a aplicação em mensagem dinâmicas, onde ha uma interação do usuário e a ele é apresentado uma mensagem personalizada. Também podemos concatenar resultados de outros tipos de dados
* Crase
  * A crase é um pouco diferente, eu consigo usar Aspas Duplas e Aspas Simples sem problemas dentro delas, por exemplo:

            ex6

            ```js

            ` "gosto muito" de 'laranja' azeda`

            ```
    Outra coisa que ela nos possibilita é quebrar linhas, é como se ela criasse um escopo de texto, por exemplo:

            ex7

            ```js
                `
                    lista de compra
                    pao
                    leite
                    queijo
                    cafe
                        
                        `
            ```
    Outra aplicação da crase é concatenar com variáveis, funções e expressões aritméticas através da Interpolação, por exemplo:

            ex8

            ```js
                `1 + 1 = ${1+1}`
            ```

            ex9

            ```js

                var nome = "Joao Victor"

                function trabalho(programando){
                    return "Programando"   
                }

                `meu nome é ${nome} e estou ${trabalho()}`
            ```
    Chamamos isso de Interpolação é usado para criar mensagens dinâmicas que mudam conforme o usuário interage com o sistema, não se preocupe com isso agora.
    Atenção, todo caractere que for passado dentro das Aspas Duplas, Aspas Simples e crase, tem efeito apenas de leitura. Salvo as exceções apresentadas no exemplo de interpolação.
    Como no uso das Aspas, não é possível usar crase como apóstrofo dentro do texto envolvido por Crases

        ex10

            ```js

                `I don`t speck JavaScript`

            ```

    Já no uso da crase como acentuação, não ha problemas.

        ex11 

            ```js

                `Vamos à loja para comprar outras coisas.`

            ```

### Number

  O Number é um tipo de dado bem fácil de ser compreendido e usado. Ao contrário da String o Number não precisa ser envolvido por qualquer por nada além do próprio escopo do código ou da função que se aplica, precisa apenas ser um número. Temo números inteiros temos os números decimais, que na programação chamamos de float (por conta do ponto flutuante) e temos também o Ifinity que se tratam de números infinitos.

* exemplo do tipo Number
  * inteiros, naturais → 1  2  3  ...  87  ...
  * reais, decimais, Float → 3.75  10.98 ...
  * Infinity, infinitos → 45879887630097... ou 1.44444444444444...
  * NaN, Not a Number, Não é um número → quando tentamos passar algum valor que não se trata de um Number → letras, etc

    ex12

        ```js
            function soma(){
                console.log( 3 + 4 )
            }
        ```

    ex13

        ```js
            function soma(){
                console.log("3 + 4 ")
            }
        ```

   Primeiramente podemos notar que ha uma coloração diferente entre os tipos Number e String, isso se da exatamente para um auxílio na leitura, no ex1 o resultado do console.log sera o valor da soma dos Numbers, já no ex2 o console ira nos mostrar exatamente o que digitamos nele, pois não ha efeito algum para os valores e caracteres passados a não ser o de leitura.
   Na explicação do uso da crase em Strings podemos ver como aplicar Numbers e Strings em uma mesma resposta usando atributos de concatenação.

### Boolean

    Booleans são um tipo de dado binário, ele me retorna um resultado true (verdadeiro) ou false (falso).
    É muito simples de entender, em programação nos deparamos sempre com resultados e condições, que serão testadas e o seu resultado sera representado por um booblean, true ou false.
    Por exemplo, digamos que eu queira testar uma condição e executar uma ação apenas se o resultado dessa condição for verdadeira.

    ex14 

    ```js

        var res = 5 >= 4
        console.log(res)

    ```

    Eu criei uma variável res e passei um valor a ela declarado como condição 5 é maior igual a 4, e sim 5 é maior igual a 4, neste caso o console ira me retornar true, porque essa declaração é verdadeira

### Undefined vs Null

    Teremos situacoes em que o valor a ser apresentado sera Undefined (indefinido) ou Null (nulo, nada), e temos que ter em mente a diferença entre os dois, Undefined não é igual a Null, porque, digamos que eu crie uma variável chamada table:

    ex15

        ```js

            var table

            console.log(table)

        ```
        Porem eu não atribuo valor a ela, eu apenas a criei. E consigo usar um console.log() para ver oque ha nessa variável, e neste casa o console.log me retornara o valor Undefined, simplesmente porque eu não atribuo nada àquela variável.

        ```js

            var table
            table = "book"

            console.log(table)
     
        ```

        O que acabei de fazer acima foi passar um valor do tipo string para a variável table, e a partir de agora ela tem um valor definido, "book". Também posso passar o valor na mesma linha onde criei a variável 

        ```js
        
            var table = "book"

            console.log(table)

        ```
        Da na mesma, duas formas de se obter o mesmo resultado. Adiante falaremos mais sobre variáveis.

    Agora quando o resultado é Null significa que é um obeject vazio

### Object

    Object é um tipo de estrutura de dados, onde eu posso passar propriedades e funcionalidades.
    Digamos que eu queira fazer um perfil de um cliente para saber quem está com pendências ou não:

    ex17

        Para criar um object, basta apenas adicionar um par de {} chaves, estruturar da seguinte forma:

          { Propridade1: Atributo1, Propridade2: Atributo2, Funcionalidade1: Método1 }

        Sempre se atentando a vírgula que separa as propriedades e funcionalidades. Uma boa prática é quebrar a linha após a vírgula, facilitando assim a leitura do código.

            ```js

            var customer = {
                firstName: 'Joao', 
                lestName: 'Silva',
                divide: function(){
                    console.log("Quitadas")
                }
                }

            ```
            Então o que temos aqui são Propriedades que recebem atributos e funcionalidades que recebem métodos.

                Propriedade 
                    firstName recebe Atributo 'Joao'
                    lestName recebe Atributo 'Silva'
                Funcionalidade 
                    divide recebe Método function
                
                Veremos mais sobre function a diante

### Array
  
    Assim como Objects, Arrays, também conhecido como Vetores, são um tipo estrutura de dados, porem funciona como um agrupamento onde posso passar todo tipo de dados, que serão organizados como uma lista. Sendo assim, ao invez de criar um object para salvar o perfil do cliente como no ex17, eu posso agora criar um array com vários objetcs, ter vários perfis

        ex18

            ```js

                var customers = [
                        customer1: {firstName: 'Joao', lestName: 'Silva', divide: function(){console.log("Quitadas")}},                                              
                        customer2: {firstName: 'Nicholas',lestName: 'Eduardo',divide: function(){console.log("Quitadas")}},
                        customer4: {firstName: 'Neymar',lestName: 'Junior',divide: function(){console.log("Pendente")}},
                        customer5: {firstName: 'Nando',lestName: 'Moura',divide: function(){console.log("Quitadas")}},
                        customer5: {firstName: 'Luiz',lestName: 'Inacio',divide: function(){console.log("Fraude indentificada")}},
                        customer5: {firstName: 'Jair',lestName: 'Bolsonaro',divide: function(){console.log("Pendente")}}, 
                    ]
                   
            ```

## Conclusão
