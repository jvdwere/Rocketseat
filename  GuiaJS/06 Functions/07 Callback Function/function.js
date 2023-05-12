
// Callback Fuction

function carros(modelo) {
    console.log('antes de ter um carro')
    modelo()
    console.log('agora tenho um carro')
}

carros(
    () => {
        console.log("Ferrari")
    }
)






