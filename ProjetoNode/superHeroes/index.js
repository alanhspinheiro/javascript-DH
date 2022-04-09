const superHerois = [
    {
    nome:"Daredevil",
        poder: "radar de sentidos",
    cumprimentar:function(){
        return "Olá, sou" + this.nome;
    }
    },

    {
        nome: "Iron Man",
        poder:"armadura tecnológica",
    cumprimentar:function(){
        return "Olá, sou" + this.nome;
    }
}
]
module.exports = superHerois;