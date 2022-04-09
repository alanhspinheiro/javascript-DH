//for in itera sobre objetos
let carro = {
    nome: "fox",
    cor: "vermelho"
}
for(let prop in carro){
    console.log(carro[prop])
}

//for of itera sobre arrays

let series = ["Lost", "True Detective", "Simpsons"];
for(let valor of series){
    console.log(valor)
}