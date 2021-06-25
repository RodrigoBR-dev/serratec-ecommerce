export default class Cliente {
    
    constructor(obj){
        obj = obj || {};

        this.email = obj.email;
        this.userName = obj.userName;
        this.senha = obj.senha;
        this.nome = obj.nome;
        this.cpf =  obj.cpf;
        this.telefone =  obj.telefone;
        this.dataNascimento =  obj.dataNascimento;
    }
}