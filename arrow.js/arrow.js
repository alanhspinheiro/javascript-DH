//const somar = numero => console.log("recebi um numero: "+ numero)

//somar(20);

//arrow function serve para só um parâmetro, a partir de dois usa-se função normal

const somar = (numeroA, numeroB) => {console.log("recebi um numero: "+ numeroA)
                                    return numeroA + numeroB
}
console.log(somar(20,30));