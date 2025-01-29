const { criptografar, descriptografar } = require("./crypto");

const mensagem = "lohana";
const mensagemcriptografada = criptografar(mensagem);
const mensagemdescriptografada = descriptografar(mensagemcriptografada);

console.log("Mensagem original:", mensagem);
console.log("Mensagem criptografada:", mensagemcriptografada);
console.log("Mensagem descriptografada:", mensagemdescriptografada);
