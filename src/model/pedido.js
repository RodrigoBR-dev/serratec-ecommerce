export default class Pedido {
    
    constructor(obj){
        obj = obj || {};
        this.numeroDoPedido = obj.numeroDoPedido;
        this.totalProdutos = obj.totalProdutos;
        this.frete = obj.frete;
        this.valorTotalDoPedido = obj.valorTotalDoPedido;
        this.dataEntrega = obj.dataEntrega;
        
    }
}