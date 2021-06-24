import React from 'react';
import { Link } from "react-router-dom";

import Product from '../../model/product';
import api from '../../services/api';
import formatarParaReal from '../../utils/money'

export default class Details extends React.Component {

    state = {
        produto: {}
    }

    componentDidMount() {
        this.obterProduto();
        let url = window.location.href.toString().split(window.location.host);
        console.log(url+"a")
    }

    obterProduto = async () => {
        const resposta = await api.get("/produto/");
        this.setState({ produtos: resposta.data.map(obj => new Product(obj)) });
    }
}