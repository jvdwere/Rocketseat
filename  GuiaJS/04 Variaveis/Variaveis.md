# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos no código
  * significa que podemos determinar uma ordem de execução, pois a leitura não ocorre ao mesmo tempo que a própria execução. A variável apenas armazena um valor, que sera realmente utilizado ou surtira algum efeito apenar quando a executar ou chamar
* também conectadas como Identificadores ou Identifiers
* Possuem 3 palavras reservadas para sua declaração, cada uma com um comportamento diferente, para o seu uso.
  * var
  * let
  * const

Variáveis são como caixas organizadoras, podendo armazenar todos os tipos de dados (que já estudamos) e funções (que ainda vamos estudar), nos módulos anteriores vimos muitos exemplos usando variáveis, sempre que eu uso um atributo var, let ou const eu estou criando uma variável. Para criar uma variável a estrutura do código é:

    ex1

        ```js

            var caixa1
            let caixa2
            const caixa3

        ```
Aqui apenas criamos as variáveis, mas não ha qualquer dado dentro delas, pois eu ainda não os atribui. A palavra reservada var não é o mesmo que let ou const, todas são variáveis, mas cada atributo tem o seu uso, mas antes de explicar isso vamos ver como passar valores para elas,

    ex2

        ```js
        
            var caixa1
            caixa1 = "primeiro arquivo"

            let caixa2 
            caix2 = 1928

            const caixa3 = () => {
                console.log("a caixa3 é uma function anonima")
            }

        ```
No exemplo acima eu declarei a variável e atribui um valor a ela em outra linha, no caso foi logo abaixo da mesma, porem posso atribuir valor em qualquer lugar do código, desde seja abaixo de onde foi criada, lembrando que o JS executa o teu código de cima para baixo, como iria atribuir um valor antes de criar a variável que o recebe.
    obs 1: atentar para a ortografia, as palavras reservadas devem ser escritas estritamente em letras minusculas, já o nome declarado pode ter mais culas, desde que faca sentido, JS é case sensitive, caixa1 não é igual a Caixa1.
    obs 2: Posso atribuir qualquer nome a uma variável, como letras ou números, desde que nome comece com letra, por exemplo," var 1caixa" está incorreto e a variável não ira funcionar.
    obs 3: Uma boa prática adotada pela comunidade é declarar nomes que façam sentido para o uso daquela variável, para facilitar a leitura e compreensão de todos que o leem, até mesmo o próprio autor, já me deparei com problemas por implemente não lembrar o que a variável X ou Y está armazenando, ou qual o seu uso, a solução foi reler toda a lógica e modificar os nomes para assim assimilar oque esta sendo feito, claro que nos exemplos acima é fácil, porem quando se deparar com projetos mais complexos você deve se atentar para isso.
    obs 4: O sinar de = (igual) quando escrito dessa forma tem o sentido de "recebe", então lemos assim: caixa2 recebe 1928.
    obs 5: Vemos que a variável criada com o atributo const esta declarada de manira diferente, esta na forma de Função Anonima, veremos isso mais para frente.
    obs 6: Repare que, uma coisa é declarar a variável e outra é atribuir um valor a ela.

        ex 3:

            ```js
            
            //Declarar
                var caixa1

            //Atribuir
                caixa1 = "alguma coisa"

            ```

Temos também uma forma, digamos que, mais simples de declarar variáveis já atribuindo um valor a ela, por exemplo:

    ex 4:

        ```js

            var caixa 1 = "primeiro arquivo"

            let caixa2 = 1928

        ```
Basicamente o código do ex 3 tem o mesmo efeito do ex 2, uma forma diferente de escrita para obter o mesmo resultado. Essa forma do ex 3 é mais utilizada, porem a forma do ex 2 te a sua aplicação em determinadas tarefas.

As variáveis podem, sim, mudar de valor, eu posso reatribuir valores a elas, mesmo que, por exemplo, no ex 3 vemos que caixa1 recebe um valor do tipo string, se eu quiser eu posso reatribuir um valor a ela só que agora sendo do tipo number ou boolea, ou qualquer outro.

    ex 5:

        ```js

            var caixa1 = "primeiro arquivo"
            console.log(caixa1)

            caixa1 = 2023
            console.log(caixa1) 
        ```
No ex 4 temos dois consoles.log da mesma variável, porem quando este código for executado o valor sera diferente, pois primeiro eu criei a variável caixa recebendo a String "primeiro arquivo", depois, abaixo, reatribui um valor a ela, do tipo Number agora, mas como o JS executa o nosso código de cima para baixo o que ocorre é, quendo o JS encontra um console.log imediatamente nos retorna oque requisitamos, no caso a caixa1, porem a seguir nos atribuímos um valor a caixa1 e requisitamos novamente para que o seu valor seja mostrado. Lembrando que o console.log é uma função nativa que serve justamente para apresentar no console o que passarmos entre os seus parenteses, se passarmos variáveis o console.log ira buscar o valor dessa variável e ira nos mostrar, serve apenas para test, usamos para debugar o código (corrigir problemas), mas nesse casso estamos usando para exemplificar como o JS trabalha.(Leia mais sobre no módulo, 02 Primeiros passos.)

## Tipos dinâmicos

Para entender esse tema temos que tratar de diferentes linguagens de programação, existem linguagens fortemente tipadas e linguagens fracamente tipadas. O que isso significa?
Vemos que para as variáveis que criamos com JS nós podemos atribuir qualquer tipo de dado a qualquer variável. Então eu posso ter uma variável que recebe um Number e depois atribuir a ela uma String, sem que haja qualquer problema, pois o JS entende o tipo de dado que estou passando para ele.

    ex 6:

        ```js

            var dados

             dados = 1998
            console.log(typeof dados)

              dados = "Somos todos iguais perante a lei"
            console.log(typeof dados)

              dados = true
            console.log(typeof dados)

              dados = {nome: "joao", idede: 24, Ativo: true}
            console.log(typeof dados)

        ```
        Quando eu uso typeof basicamente oque eu quero dizer ao JS é: qual o tipo do, então o JS me repondera conforme o tipo de dado que foi passado para a variável.

O que fiz acima, no ex 6 foi criar uma variável chamada dados e atribuído um determinado valor, o console.log() abaixo me diz qual é o tipo do valor passado, mudando a cada reatribuição.
Essa reatribuição mudando o tipo do dado só é possível porque o JS é uma linguagem fracamente tipada, em uma linguagem fortemente tipada o tipo do dado que sera passado para a variável é definido no momento de sua declaração.

    ex 7:

    ```ts
     
      var dados:String = "joao"

    ```
    Neste exemplo eu utilizo a linguagem TypeScipt (ts), quem é uma linguagem derivada do JS porem é fortemente tipada. A partir do momento que tipei a variável como String eu basicamente determinei que a mesma só poderá receber valores do tipo String, qualquer outro tipo ocasionara em um erro, e assim impossibilitando a execução do código.
        obs: O TypeScript não precisa necessariamente ter as suas variáveis tipadas, ele apenas possibilita esse método.

Ambos os métodos apresentados tem seus pros e contras, tudo depende da lógica que sera implementada.

### Regras de reatribuição

Com certeza você deve ser pensando no porquê de termos três atributos diferentes para criar uma variável, claro que anteriormente já foi falado que cada atributo posse um conjunto de regras para ser utilizado, uma dessas regras diz sobre a reatribuição da determinada variável.
Tanto o var como o let você pode reatribuir o valor quando e eu como quiser, já o const não, quando eu crio uma variável const eu basicamente estou determinando que a mesma não poderá sofrer qualquer alteração, ela é constante. Por isso o const é usado para variáveis que não irão mudar, podendo ser também de qualquer tipo.
O Atributo var ou let só é utilizado na declaração da variável, após isso, para reatribuir valores a mesmo basta apenas indicar a variável com o seu nome, podemos ver isso no ex 6, onde a variável dados é reatribuída varias vezes, mas o atributo var é utilizado apenas em sua declaração.

## Regras de Escopo

* Block Statement → Declaração de Bloco

Em variáveis as regras de escopo irão determinar qual a visibilidade da variável criada, e o atributo usado em sua declaração ira determinar onde ela pode ser vista. O escopo é determinado por {}, todo block Block Statement possui um par de {} ao seu redor, mesmo que você não o veja, por exemplo, em todos os exemplos que digitamos um código seja la qual for a sua lógica, ha um par de {} ao seu redor, é como se isso ficasse por baixo dos panos no JS, podemos chamar esse escopo de escopo mãe, ou master, ou determinar neveis para tais, que seja, podemos criar um escopo dentro do outro infinitamente. Pensemos em um país, temos o Brasil que possui São Paulo que possui Sorocaba que possui Éden que possui Rua tal de alguma coisa.

    Brasil > São Paulo > Sorocaba > Éden > Rua tal de alguma coisa

Chegando nas variáveis e seus atributos de declaração, temos o var o let e o const.

 var é um atributo global que não importa onde for criado ele valera para todos os escopos

    ex 8:

        ```js
        
        //Escompo Mãe
            {
                //escopo1
                {
                    //escopo2
                    {
                        //escopo3
                        {
                            //escopo4
                            {
                                //escopo5
                                {
                                    //escopo6
                                    var brasil = "brasileiro"
                                }
                            }
                        }
                    }
                }
            }

            console.log(brasil)

        ```
    No exemplo acima é criado uma quantidade ridícula de escopos, um dentro do outro, formando assim vários "níveis", no nível mais baixo temos uma variável declarada com var, porem ela esta sendo lida apenas no escopo mãe, que seria o nível mais alto, isso só é possível porque a variável foi declarada com var. Para isso funcionar a única regra que precisa ser respeitada é a de declarar a variável antes de a executar, não me cansarei de dizer o JS lê/executa o código de cima para baixo.

Se fizermos o mesmo com o atributo let ou const resultara em um erro de referência, Pois o let e o const são variáveis locais, existem apenas no escopo onde foram criadas

O JS tem uma maneira de agir muito doida em determinas situações, veja o seguinte:

    ex 9:

        ```js

            console.log("existe",doido)
            {
              var doido = "sim"
            }
            console.log("existe",doido)

        ```
        Ai você lê isso e espera que o JS te retorne um erro de referência, afinal ele lê o código de maneira vertical, linha por linha e o comando do ex 9 no primeiro console.log pede para mostrar a variável doido antes da mesma ser criada, correto? Errado porque o JS ira nos retornar a mensagem existe que foi e esta como undefined, como se a variável tivesse sim sido criada anteriormente porem sem valor atribuído, e a resposta do segundo console.log sera a correta existe, sim, e não haverá qualquer erro no código, então ele transformaria o código do ex 9 nisso aqui:

            ```js
            
                var doido 
                console.log("existe", doido)
                {
                    doido = "sim"
                }
                console.log("existe",doido)
                
            ```
        Repare, ou melhor, teste isso e vera o mesmo resultado, o nome disso é hosting, elevação, que foi exatamente o que o JS fez por baixo dos panos, ele elevou a declaração da variável para que a mesma funcione.

Entender isso é muito importante, pois pode ser prejudicial ao seu condigo. Mas por que pode ser ruim se o JS me ajudou a não ter erros?
Veja bem, não é porque o código não apresenta erros que ele ira funcionar corretamente. Imagine que você esta digitando uma lógica muito mais complexa do que essa, onde não da para ver claramente oque esta ocorrendo, então você testa e interage com o app, mas simplesmente não funciona, então você como um bom dev confere o console e ali também não encontra erros, então você tera que verificar cada variável para saber qual não está retornando o valor corretamente e por quê. Já pensou no tempo perdido por conta de um erro de lógica, quando o JS possui erros de sintaxe é fácil de encontrar e resolver, pois o código quebra, fica tudo vermelho, o console retorna os erro e etc agora neste caso oque não funciona é a lógica que você aplicou, está tudo digitado da maneira correta, por conta disso códigos modernos não utilizam o atributo var, pois os atributos let e const não sofrem este hoisting, essa elevação, dentro ou fora dos escopos.

Exemplos com let e const:

    ex 10 A:

    ```js
    
        console.log(normal)

         {
            let normal = "ok"
         }

        console.log(normal)

    ```
    No exemplo (A) teremos um erro de referência com a mensagem indicando que normal não exite, porque let é uma variável local e não existe no escopo a cima, ok.
    Entao vamos deixar tudo no mesmo escopo 

    ex 10 B:

    ```js
        {
            console.log(normal)

            let normal = "ok"

            console.log(normal)
        }
    ```
    Temermos novamente um erro de referência, porem agora indicando que não é possível acessar a variável antes de uma inicialização ou declaração e variáveis let não sofrem elevação. Neste caso para que o JS siga o seu curso eu irei remover o primeiro console.log.

    ex 10 B:

    ```js
        {
            let normal = "ok"
        
            console.log(normal)
        }
    ```
    Agora, sim, temos o resultado desejado. Com o atributo const o efeito de regras de escopo e hoisting é o mesmo.

Outra informação que deve ser acrescentada é que caso eu queira reatribuir uma variável em um determinado escopo inferior ao escopo que a mesmo foi declarada eu consigo, mesmo se for um let.

   ex 11

    ```js
    //Escopo Mãe
    let onde = "ok";

        {
         {
          {
           {
            {
              //Escopo 5
              onde = "Escopo 5";
              console.log(onde);
            }
           }
          }
         }
        }
    onde = "Escopo Mãe";
    console.log(onde)
    ```
    Isso ocorre porque JS chega na variável onde no escopo 5 entendi que ela deve ser reatribuída e não criada, então ele busca essa variável nos escopos acima, como se os escopos de nível mais baixo herdasse as variáveis dos escopos de nível mais alto, porem o contrário não ocorre "de filho para mãe", se quiser posso também criar varia vei de mesmo nome em escopos diferentes, observe:

           ex 12

                ```js
                    //Escopo Mãe
                    let onde = "ok";

                        {
                         {
                          {
                           {
                            {
                            //Escopo 5
                            let onde = "Escopo 5";
                            console.log(onde);
                            }
                           }
                          }
                         }
                        }
                    onde = "Escopo Mãe";
                    console.log(onde)
                ```
        Neste caso não estou reatribuindo apenas criei uma variável com o mesmo nome. A variável onde do Escopo Mãe não é a mesma do Escopo 5

### Conclusao

