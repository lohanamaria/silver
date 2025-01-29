const CryptoJS = require("crypto-js");

const chave = "lohana";

function criptografar(texto) {
    return CryptoJS.AES.encrypt(texto, chave).toString();
}

function descriptografar(textocriptografado) {
    let bytes = CryptoJS.AES.decrypt(textocriptografado, chave);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { criptografar, descriptografar };
