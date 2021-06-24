import api from "./api";

function logar(email, senha){
    return new Promise((resolve, reject) => {
        return api.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

export default {
    logar
};