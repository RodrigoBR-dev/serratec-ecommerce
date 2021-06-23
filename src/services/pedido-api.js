import api from './api';
function obterPorNumero(numeroPedido){
    return new Promise((resolve, reject) => {
        return api.get(`/pedido/${numeroPedido}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
export default {
    obterPorNumero
}
