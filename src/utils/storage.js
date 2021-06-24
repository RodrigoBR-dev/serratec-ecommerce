function obterNumeroDoPedido(){
    return localStorage.getItem("numeroPedido");
}

function armazenarNumeroPedido(numero){
    localStorage.setItem("numeroPedido" , numero)
}

function obterToken(){
    return localStorage.getItem("token");
}

function armazenarToken(token){
    localStorage.setItem("token" , token)
}

export default {
    obterNumeroDoPedido,
    armazenarNumeroPedido,
    obterToken,
    armazenarToken
}