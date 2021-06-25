import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListaEnderecos from './ListaEnderecos';

const BuscaEndereco = ({search}) => {
  const [enderecos, setEndereco] = useState([]);
  /* const [search, setSearch] = useState(''); */
 

  useEffect(() => {
    const params = {};
   
    if (search) {
      params.nome = search;
    }
    axios.get('https://serratec.herokuapp.com/endereco?_order=desc&_sort=id',{ params })
      .then((response) => {
        setEndereco(response.data);
      });
  }, [search]);
  console.log(enderecos);
  return (
    <div className="lista">
      <header className="header-endereço">
        <h1>Endereços Cadastrados</h1>
        <Link to="/cadastro-endereco">Novo Endereço</Link>
      </header>
      

      {/* comentado porque a requisição tá dando erro */}
      {/* <ListaEnderecos enderecos={enderecos} loading={!enderecos.length} /> */}
    </div>
  );
};

export default BuscaEndereco;