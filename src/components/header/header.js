import React from 'react';
import { Link } from "react-router-dom";

import { Menu } from "../../styles/geral";

const Header = () => {
    return (
        <Menu>
            <li>
                <Link to={"/"}>Início</Link>
            </li>
            <li>
                <Link to={"/nacionais"}>Nacionais</Link>
            </li>
            <li>
                <Link to={"/importadas"}>Importadas</Link>
            </li>
            <li>
            <input type="search" placeholder="Faça sua busca aqui!"></input>
            </li>
            <li>
            <li>
                <Link to={"/carrinho"}>Carrinho</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
            </li>
        </Menu>
    );
}

export default Header;