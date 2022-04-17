const saluta = require('./utils')
const nomi = require('./nomi')
console.log(nomi)

console.log(nomi.persona3)
saluta(nomi.persona3)

const path = require('path')

const percorsoFile = path.join('/cartella', 'sottocartella', 'prova.txt');
const percorsoAssoluto = path.resolve(__dirname, 'cartella', 'sottocartella', 'prova.txt')
console.log(percorsoAssoluto)
