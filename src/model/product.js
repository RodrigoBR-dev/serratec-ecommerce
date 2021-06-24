export default class Product {
    
    constructor(obj){
        obj = obj || {};
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.preco = obj.preco;
        this.categoria = obj.categoria;
        this.url = obj.url;
        this.quantEstoque = obj.quantEstoque;
    }
}