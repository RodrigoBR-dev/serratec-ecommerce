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

const obterUser = () => {
    return localStorage.getItem("userName");

}

function armazenarUser(userName){
    localStorage.setItem("userName" , userName)
}

function obterEstoque(nomeProduto){
    let token = localStorage.getItem(nomeProduto);
    return token;

}

function armazenarEstoque(nomeProduto, quantidade){
    localStorage.setItem(nomeProduto , quantidade)
}
function armazenarTotal(total){
    localStorage.setItem("total",total);
}
function obterTotal(){
    localStorage.getItem("total")
}

export default {
    obterNumeroDoPedido,
    armazenarNumeroPedido,
    obterToken,
    armazenarToken,
    obterUser,
    armazenarUser,
    obterEstoque,
    armazenarEstoque
}