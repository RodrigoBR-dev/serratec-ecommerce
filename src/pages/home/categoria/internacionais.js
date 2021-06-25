import React from 'react';
import { Link } from "react-router-dom";

import Product from '../../../model/product';
import api from '../../../services/api';
import formatarParaReal from '../../../utils/money'
import { MeuCard } from "../../../components/cards/cards";
import { NomeProduto, ContainerProduto } from "../../../styles/divs";

export default class Internacionais extends React.Component {

    state = {
        produtos: []
    }

    componentDidMount() {
        this.obterProdutos();
    }


    obterProdutos = async () => {
        const resposta = await api.get("/produto/categoria/Futebol internacionais");
        this.setState({ produtos: resposta.data.map(obj => new Product(obj)) });
    }

    render() {
        const { produtos } = this.state;
        return (
            <ContainerProduto>
                {produtos.map(produto => (
                    <div key={produto.nome}>
                        <MeuCard>
                            <Link to={`/detalhes/${produto.nome}`}>
                                <div>
                                    <img src={produto.url} alt="Imagem produto"></img>
                                    <div>
                                        <NomeProduto><p><strong>{produto.descricao}</strong></p></NomeProduto>
                                        <div>
                                            <p>Valor {formatarParaReal(produto.preco)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </MeuCard>
                    </div>
                ))
                }
            </ContainerProduto>
        );
    }
}