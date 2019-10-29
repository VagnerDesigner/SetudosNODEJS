// console.log("Olá Viviane, os seus SEIOS são Maravilhosos")




// CRiando aplicações web
// Usando o módulo http

var http = require('http') //Módulo http  interno no NODEJS

//Abrindo o Servidor http

//Opção .Listen Informando em qual porta será abertoo servidor
//function res, enviando mensagem para quem está acessando a página
http.createServer(function(req, res) {
    //End servi para enviar uma mensagem
    res.end("Hello Word! Welcome to my website!")
}).listen(8082)

console.log("O Servidor está rodando!")