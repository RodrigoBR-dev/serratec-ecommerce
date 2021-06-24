import api from "./api";

function cadastrarCliente(dadosCliente){
    return new Promise((resolve, reject) => {
        return api.post('/clientes', {dadosCliente})
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

export default {
    cadastrarCliente
};