// Carregando Módulos

//GUardando o módulo dentro da variável SomaFunk
var SomaFunc = require("./somar") // Necessário criar uma variável para cada requisição
var dividirFunc = require("./dividir")
var multiplicarFunc = require("./multiplicar")
var subtrairFunc = require("./subtrair")


//Chamando o módulo
console.log(SomaFunc(230, 23490))
console.log(dividirFunc(230, 990))
console.log(multiplicarFunc(230, 1090))
console.log(subtrairFunc(230, 50))