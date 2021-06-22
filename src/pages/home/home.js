import React from "react";
import { Link } from "react-router-dom";

import Product from '../../model/product';
import api from '../../services/api';
import { MeuCard } from "../../components/cards/cards";

export default class Home extends React.Component {

    state = {
        produtos: []
    }

    componentDidMount() {
        this.obterProdutos();
    }


    obterProdutos = async () => {
        const resposta = await api.get("/produto");
        this.setState({ produtos: resposta.data.map(obj => new Product(obj)) });
    }

    render() {
        const { produtos } = this.state;
        return (
            <div className="container-produtos">
                {produtos.map(produto => (
                    <div className="produtos" key={produto.nome}>
                        <MeuCard>
                            <Link to={`/detalhes/${produto.nome}`} className="btn-detalhes">
                                <div><img src={produto.url} alt="Imagem produto"></img></div>
                                <div><p><strong>Nome:</strong> {produto.nome} </p>
                                <p><strong>Descrição:</strong> {produto.descricao} </p>
                                <p><strong>Valor</strong> {produto.preco} </p>
                                <p><strong>Categoria</strong> {produto.categoria} </p></div>
                            </Link>
                        </MeuCard>
                    </div>
                ))}
            </div>
        );
    }
}