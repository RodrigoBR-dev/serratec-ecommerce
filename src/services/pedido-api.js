import api from './api';
function obterPorNumero(numeroPedido){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get(`/pedido/${numeroPedido}`);
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function criarNovo(userName, endEntrega, nomeProduto, quantidade){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post(`/pedido`, { "cliente": userName, "endEntrega": endEntrega, "produto": nomeProduto, "quantidade": quantidade });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function atualizar(numPedido, nomeProduto, quantidade){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.put(`/pedido`, { "numeroDoPedido": numPedido, "produto": nomeProduto, "quantidade": quantidade });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

const pedidoApi = {
    obterPorNumero,
    criarNovo,
    atualizar
}

export default pedidoApi;