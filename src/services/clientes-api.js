import api from "./api";

function cadastrarCliente(dadosCliente){
    return new Promise((resolve, reject) => {
        console.log(dadosCliente)
        return api.post('/cliente', dadosCliente)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

const clientesAPI = {
    cadastrarCliente
};

export default clientesAPI;