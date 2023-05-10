
// Callback Fuction


    function User(nome, idade){
        this.nome = nome
        this.idade = idade
        this.work = function() {
            return `O ${nome} tem ${idade} anos, e esta estudando JavaScript`
        }
    }
    const joao = new User("Joao Victor",24)
    console.log(joao.work())






