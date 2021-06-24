import React, { useState,useEffect } from 'react';
import Card from './Card'
import utilsStorage from '../../utils/storage'
import pedidoApi from '../../services/pedido-api';
import Produto from '../../model/produto-carrinho'
import Resumo from './Resumo'
import { CardProdutos, Container } from './styles/carrinho-styles'; 


const Carrinho = () => {

    const [numeroPedido,setNumeroPedido] = useState(""); 
    const [produto,setProduto] = useState([]); 
    const [pedido,setPedido] = useState({}); 
    const { nome } = produto;
    const { quantidade } = produto;

    
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
    const removerProduto = () => {
        pedidoApi.removerProduto(numeroPedido,nome,0)
            .then(resposta => { 

            }).catch(erro => {
                console.log(erro)
            })
    }

    return(            
        <Container>
                <CardProdutos>
                    {produto.map(produto => (
                        
                                <div className="produtos" key={produto.nome}>
                                    <Card imagem={produto.imagem} 
                                    nome={produto.nome} 
                                    quantidade={produto.quantidade} 
                                    valor={produto.valor} 

                                    />
                                    
                                </div>
                               
                            ))}
                </CardProdutos>
                        <button ></button>
                <Resumo />
                
        </Container>
    );
}



export default Carrinho;