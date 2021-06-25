import React from 'react';
import { Link } from "react-router-dom";
import produtosApi from '../../services/produtos-api';

import { Menu } from "../../styles/geral";
import storage from '../../utils/storage';

const Header = () => {
    const userName = storage.obterUser();
    
    function user() {
        if (!userName) {
            return(<Link to={"/login"}>Login</Link>)
        }
        return(<Link to={"/cliente"}>Olá {userName}</Link>)
    }

   
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
                {user()}
            </li>
            </li>
        </Menu>
    );
}

export default Header;