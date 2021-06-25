import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import formatarParaReal from '../../utils/money';
import { DetalheProd } from '../../styles/divs';
import utilStorage from '../../utils/storage';
import { Button , ButtonDiv} from '../cart/styles/global-style';

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
    })

    const obterProduto = async () => {
        let resposta = await api.get("/produto/" + nomeProduto);
        setProduct(resposta.data);
    }

    function testaUsuario() {
        if (!userName) {
           window.open('/login', '_self');
        }
        testarPedido()
    }

    function testarPedido() {
        if (numPedido){
            atualizarPedido()
            return;
        }
        criarPedido();
    }

    const criarPedido = async () => {
        let endEntrega = "casa";
        await api.post("/pedido", {"produto" : nomeProduto, "cliente" : userName, "endEntrega" : endEntrega, "quantidade" : quantidade})
        .then(resposta => {
            utilStorage.armazenarNumeroPedido(resposta.data.numeroDoPedido);
            utilStorage.armazenarEstoque(nomeProduto, product.quantEstoque);
        })
      //  window.open('/', '_self');
    }

    const atualizarPedido = async ()=> {
        let endEntrega = "casa";
        await api.put("/pedido", {"numeroDoPedido": numPedido,"produto" : nomeProduto, "quantidade" : quantidade})
        .then(resposta => {
            utilStorage.armazenarEstoque(nomeProduto, product.quantEstoque);
        })
     //   window.open('/', '_self');
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
                <div>{formatarParaReal(product.preco)}</div>
                <div>{product.quantEstoque}</div>
                <ButtonDiv>
                    <Button onClick={handleDiminuiQuantidade}>-</Button>
                    <p>{quantidade}</p>
                    <Button onClick={handleAumentaQuantidade}>+</Button>
                </ButtonDiv>

                <button onClick={() => testaUsuario()}>Enviar carrinho</button>
            </center>
        </DetalheProd>
    )
}

export default Details;