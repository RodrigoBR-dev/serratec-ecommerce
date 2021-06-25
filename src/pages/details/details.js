import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Product from '../../model/product';
import api from '../../services/api';
import formatarParaReal from '../../utils/money';
import { DetalheProd } from '../../styles/divs';
import utilStorage from '../../utils/storage';
import { Button , ButtonDiv} from '../cart/styles/global-style';
import storage from '../../utils/storage';

const Details = (props) => {
    const [nomeProduto, setNomeProduto] = useState("");
    const [product, setProduct] = useState({});
    const [userName, setUserName] = useState("");
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        setNomeProduto(props.match.params.nome);
        obterProduto();
    })

    const obterProduto = async () => {
        let resposta = await api.get("/produto/" + nomeProduto);
        setProduct(resposta.data);
    }

    function obterUser() {
        setUserName(utilStorage.obterUser());
        if (userName) {
            criarPedido()
        }
        console.log(userName)
//        window.open('/login', '_self');
    }

    const criarPedido = async () => {
        let endEntrega = "casa";
        let resposta = await api.post("/pedido", { nomeProduto, userName, endEntrega, quantidade});
        let numeroPedido = resposta.data.numeroPedido
        console.log(numeroPedido);
        storage.armazenarEstoque(nomeProduto, product.quantidade)
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
            <center>
                <img src={product.url}></img>
                <div>Categoria {product.categoria}</div>
                <div>{product.nome}</div>
                <div>{product.descricao}</div>
                <div>{product.preco}</div>
                <div>{product.quantEstoque}</div>
                <ButtonDiv>
                    <Button onClick={handleDiminuiQuantidade}>-</Button>
                    <p>{quantidade}</p>
                    <Button onClick={handleAumentaQuantidade}>+</Button>
                </ButtonDiv>

                <button onClick={obterUser}>Enviar carrinho</button>
            </center>
        </DetalheProd>
    )
}

export default Details;