import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BuscaEndereco = () => {
  const [enderecos, setEndereco] = useState([]);
  

  useEffect(() => {
      
    axios.get('https://serratec.herokuapp.com/endereco/rodrigo')
      .then((response) => {
        setEndereco(response.data);
      });
  }, );

  return (
    <div className="lista">
      <header className="header-endereço">
        <h1>Endereços Cadastrados</h1>
        <Link to="/cadastro-endereco">Novo Endereço</Link>
      </header>

        {/* cada endereço em ListEnderecos criará um card  */}
      <BuscaEndereco enderecos={enderecos} loading={!enderecos.length} />
    </div>
  );
};

export default BuscaEndereco;