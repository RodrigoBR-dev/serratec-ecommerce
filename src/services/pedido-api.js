import api from './api';
function obterPorNumero(numeroPedido){
    return new Promise((resolve, reject) => {
        return api.get(`/pedido/${numeroPedido}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
function removerProduto(numeroPedido,produto,quantidade){
    return new Promise((resolve, reject) => {
        console.log(numeroPedido,produto,quantidade)
        return api.put(`/pedido`, {numeroPedido,produto,quantidade})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}


export default {
    obterPorNumero,
    removerProduto
}
