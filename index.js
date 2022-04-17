const saluta = require('./utils')
const nomi = require('./nomi')
console.log(nomi)

<<<<<<< HEAD
if (numero < 3){
    console.log("il numero e' minore di 3");
}
elseif(numero == 3){
    console.log("il numero e' minore di 3");
}
else{
    console.log("il numero e' minore di 3");
}
=======
console.log(nomi.persona3)
saluta(nomi.persona3)

const path = require('path')

const percorsoFile = path.join('/cartella', 'sottocartella', 'prova.txt');
const percorsoAssoluto = path.resolve(__dirname, 'cartella', 'sottocartella', 'prova.txt')
console.log(percorsoAssoluto)
>>>>>>> DEV
