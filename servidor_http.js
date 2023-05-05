//carrega o modulo HTTP do Node
const http = require("http");

//Cria um servidor HTTP na porta 8000
http.createServer(function(request,response){
    
    //Configura o cabeçalho da resposta HTTP
    response.writeHead(200,{'Content-Type':'text/plain; charset=utf8'});

    //Manda o corpo da resposta "Olá Mundo"
    response.end("Olá mundo node.js\n");
}).listen(8000,'localhost');

//Imprime no console a URL de acesso ao servidor
console.log("Servidor rodando em http://localhost:8000/");
