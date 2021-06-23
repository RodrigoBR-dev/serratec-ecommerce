import React from 'react';
import Card from './Card'

const Carrinho = (props) => {
    return(
        <div className="card-produtos">
            <Card nome="Camisa simples" preco="2.90" quantidade="2" imagem=""/>
            <Card nome="Camisa simples" preco="2.90" quantidade="2" imagem=""/>

        </div>
    )
};
export default Carrinho;