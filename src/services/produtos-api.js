import api from "./api";


function obterTodos(){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get('/produto');
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}
function obterPorNome(nomeProduto){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get(`/produto/${nomeProduto}`);
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function obterPorCategoria(categoria){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get('/produto/' + categoria);
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function obterPorBusca(nomeProduto){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get('/produto/busca' + nomeProduto);
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

const produtosApi = {
    obterTodos,
    obterPorNome,
    obterPorCategoria,
    obterPorBusca
};

export default produtosApi;