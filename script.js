//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
   console.log("Olá!!")
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name){
    console.log(name)
}
nome("Gabriel")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function data(namee,age,music){
    console.log(`Meu nome é ${namee} , minha idade é ${age} e meu estilo de musical preferido é ${music}`)
}
data("Gabriel",24,"rock")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function favorite(movie,musica){
    console.log(`Meu filme favorito é ${movie} e a minha musica favorita é ${musica}`)   
}

favorite("O labirinto do Fauno","New Perspective")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(number){
    return number*3
}

let triplica = triplo(7)

console.log(triplica)
