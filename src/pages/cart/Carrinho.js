import React, { useState,useEffect } from 'react';
import Card from './Card'
import utilsStorage from '../../utils/storage'
import pedidoApi from '../../services/pedido-api';
import Produto from '../../model/produto-carrinho'


const Carrinho = () => {

    const [numeroPedido,setNumeroPedido] = useState(""); 
    const [produto,setProduto] = useState([]); 
    const [pedido,setPedido] = useState({}); 


    useEffect(() => {
        utilsStorage.armazenarNumeroPedido("80106064")
        setNumeroPedido(utilsStorage.obterNumeroDoPedido());
        if(!numeroPedido){
            <div> Carrinho vazio </div>
            return;
        }
       
        obterPedido()
    })

    const obterPedido = () => {
        pedidoApi.obterPorNumero(numeroPedido)
            .then(resposta => { 
                setPedido(resposta.data)
                setProduto(resposta.data.produto.map (obj => new Produto(obj) ))
            }).catch(erro => {
                console.log(erro)
            })
    }

    return(            

        <center>
        <div className="card-produtos">
        {produto.map(produto => (
                    <div className="produtos" key={produto.nome}>
                        <Card imagem={produto.imagem} nome={produto.nome} quantidade={produto.quantidade} valor={produto.valor} />
                    </div>
                ))}
        </div>
        </center>
    );
}



export default Carrinho;