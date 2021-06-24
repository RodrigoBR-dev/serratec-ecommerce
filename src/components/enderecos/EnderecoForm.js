import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const initialValue = {
    email: '',
    cep: '',
    cliente: '',
    numero: 0,
    complemento: '',
  }
const  EnderecoForm = () => {
    const [values, setValues] = useState(initialValue);
    const history = useHistory();
  
    function onChange(ev) {
      const { name, value } = ev.target;
  
      setValues({ ...values, [name]: value });
    }
  
    function onSubmit(ev) {
      ev.preventDefault();
        //endereço de onde vou inserir o endereço
      axios.post('https://serratec.herokuapp.com/enderecos', values)
      //verificar com o pessoal a URL correta
        .then((response) => {
          history.push('/enderecos');
        });
    }
  
    return (
      <div>
        <h1>Serra-Commerce</h1>
        
  
        <form className="form" onSubmit={onSubmit}>
          <div className="Email">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" onChange={onChange} />
          </div>

          <div className="cep">
            <label htmlFor="cep">CEP</label>
            <input id="cep" name="cep" type="text" onChange={onChange} />
          </div>

          <div className="cliente">
            <label htmlFor="cliente">Cliente</label>
            <input id="cliente" name="cliente" type="text" onChange={onChange} />
          </div>
          <div className="numero">
            <label htmlFor="numero">Numero</label>
            <input id="numero" name="numero" type="text" onChange={onChange} />
          </div>
          <div className="complemento">
            <label htmlFor="complemento">complemento</label>
            <input id="complemento" name="complemento" type="text" onChange={onChange} />
          </div>
          <div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    )
  };
  

  export default EnderecoForm;