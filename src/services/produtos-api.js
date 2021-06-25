import api from "./api";


function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorCategoria(categoria){
    return new Promise((resolve, reject) => {
        return api.get('/produto/'+categoria)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorBusca(nomeProduto){
    return new Promise((resolve, reject) => {
        return api.get('/produto/busca'+nomeProduto)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obterTodos,
    obterPorCategoria,
    obterPorBusca
}