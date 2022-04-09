let carro = {
    nome: "porsche",
    ano: 1999,
    cor: "prata",
    ligar: function(){
        console.log("O carro"+ " " + this.nome + " " + "está ligado")
    }
}
carro.ligar()

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", "2019");
console.log(civic);