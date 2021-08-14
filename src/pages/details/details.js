import React, { useEffect, useState } from 'react';

import pedidoApi from '../../services/pedido-api';
import formatarParaReal from '../../utils/money';
import { DetalheProd, NomeProduto, PrecoProduto } from '../../styles/divs';
import utilStorage from '../../utils/storage';
import { Button, ButtonDiv } from '../cart/styles/global-style';
import produtosApi from '../../services/produtos-api';

const Details = (props) => {
    const [nomeProduto, setNomeProduto] = useState("");
    const [product, setProduct] = useState({});
    const [userName, setUserName] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    const [numPedido, setNumPedido] = useState("");

    useEffect(() => {
        setNomeProduto(props.match.params.nome);
        obterProduto();
        setUserName(utilStorage.obterUser());
        setNumPedido(utilStorage.obterNumeroDoPedido());
    });

    const obterProduto = async () => {
        await produtosApi.obterPorNome(nomeProduto)
            .then(resposta => {
                setProduct(resposta.data);
            });
    }

    function testaUsuario() {
        if (!userName) {
            window.open('/login', '_self');
        }
        testarPedido()
    }

    function testarPedido() {
        if (numPedido) {
            atualizarPedido()
            return;
        }
        criarPedido();
    }

    const criarPedido = async () => {
        let endEntrega = "Casa";
        await pedidoApi.criarNovo(userName, endEntrega, nomeProduto, quantidade)
            .then(resposta => {
                utilStorage.armazenarNumeroPedido(resposta.data.numeroDoPedido);
                utilStorage.armazenarEstoque(nomeProduto, product.quantEstoque);
            });
        window.open('/', '_self');
    }

    const atualizarPedido = async () => {
        await pedidoApi.atualizar(numPedido, nomeProduto, quantidade)
            .then(resposta => {
                utilStorage.armazenarEstoque(nomeProduto, product.quantEstoque);
            })
        window.open('/', '_self');
    }

    const handleAumentaQuantidade = () => {
        if (quantidade < product.quantEstoque) {
            setQuantidade(quantidade + 1)

        }
    }
    //controla o mínimo de itens
    const handleDiminuiQuantidade = () => {
        if (quantidade >= 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <DetalheProd>
            <div>
                <img src={product.url} alt="Imagem do produto"></img>
            </div>
            <div>
                <NomeProduto>{product.nome}</NomeProduto>
                <div>{product.descricao}</div>
                <PrecoProduto>{formatarParaReal(product.preco)}</PrecoProduto>
                <div>
                    <ButtonDiv>
                        <Button onClick={handleDiminuiQuantidade}>-</Button>
                        <p>{quantidade}</p>
                        <Button onClick={handleAumentaQuantidade}>+</Button>
                    </ButtonDiv>
                    <button onClick={() => testaUsuario()}>Enviar carrinho</button>
                </div>
            </div>
        </DetalheProd>
    )
}

export default Details;