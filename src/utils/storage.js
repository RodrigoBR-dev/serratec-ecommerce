function obterNumeroDoPedido(){
    return localStorage.getItem("numeroPedido");
}

function armazenarNumeroPedido(numero){
    localStorage.setItem("numeroPedido" , numero)
}

function obterToken(){
    let token = localStorage.getItem("token");
    return token;

}

function armazenarToken(token){
    localStorage.setItem("token" , token)
}

function obterUser(){
    let token = localStorage.getItem("userName");
    return token;

}

function armazenarUser(userName){
    localStorage.setItem("userName" , userName)
}

export default {
    obterNumeroDoPedido,
    armazenarNumeroPedido,
    obterToken,
    armazenarToken,
    obterUser,
    armazenarUser
}