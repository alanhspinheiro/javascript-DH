
const fs = require('fs');
let moment = require('moment');

const herois = require('./superHeroes'); 

let data = moment().format('MMM do YY');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
 

console.log(herois);
