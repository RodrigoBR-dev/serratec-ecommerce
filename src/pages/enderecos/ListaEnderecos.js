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

const BuscaEndereco = () => {
  const [enderecos, setEndereco] = useState([]);
  

  useEffect(() => {
      //local onde vou buscar a lista de endereço
    axios.get('https://serratec.herokuapp.com/enderecos')
      .then((response) => {
        setEndereco(response.data);
      });
  }, );

  return (
    <div className="lista-endereços">
      <header className="header-endereço">
        <h1>Endereços Cadastrados</h1>
        <Link to="/cadastro-endereco">Novo Endereço</Link>
      </header>

        {/* cada endereço em ListEnderecos criará um card  */}
      <ListaEnderecos enderecos={enderecos} loading={!enderecos.length} />
    </div>
  );
};

export default BuscaEndereco;