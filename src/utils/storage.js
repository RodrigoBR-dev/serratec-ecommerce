function obterNumeroDoPedido(){
    return localStorage.getItem("numeroPedido");
}

function armazenarNumeroPedido(numero){
    localStorage.setItem("numeroPedido" , numero)
}

function obterToken(){
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        let currentDate = new Date().getTime();
        return token.expires <= currentDate ? removeToken() : token.value;
    }
}

function armazenarToken(token){
    let expira = new Date().getTime() + (3600000);
    localStorage.setItem("token" , JSON.stringify({ 
        "value": token,
        "expires": expira
    }))
}

function removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName")
}

const obterUser = () => {
    return localStorage.getItem("userName");

}

function armazenarUser(userName){
    localStorage.setItem("userName" , userName)
}

function obterEstoque(nomeProduto){
    return localStorage.getItem(nomeProduto);

}

function armazenarEstoque(nomeProduto, quantidade){
    localStorage.setItem(nomeProduto , quantidade)
}

const storage = {
    obterNumeroDoPedido,
    armazenarNumeroPedido,
    obterToken,
    armazenarToken,
    obterUser,
    armazenarUser,
    obterEstoque,
    armazenarEstoque
}

export default storage;
    