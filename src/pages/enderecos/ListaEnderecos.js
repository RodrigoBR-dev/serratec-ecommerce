import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ListaEnderecos = ({endereco}) => (
    
  <div>
  <form className="lista-enderecos">
          
    <div className="endereco-info">
      
      <label>Nome:{endereco.nome}</label>
      <label> Cliente:{endereco.cliente} </label>
      <label> CEP:{endereco.cep} </label>
      <label> Número:{endereco.numero} </label>
      <label> Complemento:{endereco.complemento} </label>
      <button type="submit">Selecionar</button>
    </div>
    </form>
    
</div>

);

export default ListaEnderecos;