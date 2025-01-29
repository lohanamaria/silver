const chavesecreta = "lohana";

function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let criptografado = CryptoJS.AES.encrypt(mensagem, chavesecreta).toString();
    document.getElementById("criptografado").value = criptografado;
}

function descriptografar() {
    let criptografado = document.getElementById("criptografado").value;
    let bytes = CryptoJS.AES.decrypt(criptografado, chavesecreta);
    let descriptografado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("descriptografado").value = descriptografado;
}
