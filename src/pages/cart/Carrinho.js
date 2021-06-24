import React, { useState,useEffect } from 'react';
import Card from './Card'
import utilsStorage from '../../utils/storage'
import pedidoApi from '../../services/pedido-api';
import Produto from '../../model/produto-carrinho'
import Resumo from './Resumo'
import { CardProdutos, Container , DivProd, BotaoDiv} from './styles/carrinho-styles'; 
import { Button } from './styles/global-style';

const Carrinho = () => {

    const [numeroPedido,setNumeroPedido] = useState(""); 
    const [produtos,setProdutos] = useState([]); 

    const [pedido,setPedido] = useState({}); 
    const [subtotal,setSubtotal] = useState(0); 
    


    
    useEffect(() => {
        utilsStorage.armazenarNumeroPedido("80106064")
        setNumeroPedido(utilsStorage.obterNumeroDoPedido());
        if(!numeroPedido){
            <div> Carrinho vazio </div>
            return;
        }
       
        obterPedido()
    })

    const removerProduto = (nome) => {
        const quantidade = 0;
        pedidoApi.removerProduto(numeroPedido,nome,quantidade)
            .then(resposta => { 
                
            }).catch(erro => {
                console.log(erro)
            })
    }

    const obterPedido = () => {
        pedidoApi.obterPorNumero(numeroPedido)
            .then(resposta => { 
                setSubtotal(resposta.data.totalProdutos)
                //não está sendo usado
                setPedido(resposta.data)

                setProdutos(resposta.data.produto.map (obj => new Produto(obj) ))
            }).catch(erro => {
                console.log(erro)
            })
    }
 

    return(            
        <Container>
                <CardProdutos>
                    {produtos.map(produto => (                                                                 
                                <DivProd className="produtos" key={produto.nome}>
                                    <Card imagem={produto.imagem} 
                                    nome={produto.nome} 
                                    quantidade={produto.quantidade} 
                                    valor={produto.valor}
                                    evento={removerProduto}
                                    />
                                    <BotaoDiv>
                                        <Button   onClick={() => removerProduto(produto.nome)}>X</Button>
                                    </BotaoDiv>
                                </DivProd>
                               
                            ))}
                </CardProdutos>
                <Resumo subtotal = {subtotal}/>
        </Container>
        
    );
}



export default Carrinho;