import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { FormEnderecos } from "../../styles/forms";
import { FormEnderecos, DivCep, DivCliente } from '../../styles/forms';
import styled from "styled-components";




const initialValue = {
  email: "",
  cep: "",
  cliente: "",
  numero: 0,
  complemento: "",
};
const EnderecoForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    //endereço de onde vou inserir o endereço
    axios
      .post("https://localhost:3000/endereco", values)
      //verificar com o pessoal a URL correta
      .then((response) => {
        history.push("/endereco");
      });
  }
  return (
    <FormEnderecos > 
      <h1>Faça seu cadastro</h1>
      <form className="Newform" onSubmit={onSubmit}>
        <div className="DivCep">
          <label htmlFor="DivCep">CEP</label>
          <input id="cep" name="cep" type="text" placeholder="informe um CEP válido"   onChange={onChange} />
        </div><br></br>

        <div className="DivCliente">
          <label htmlFor="cliente">Cliente</label>
          <input id="cliente"
            name="cliente"
            placeholder="digite seu nome"
            type="text"
            onChange={onChange}
          />
        </div><br></br>

        <div className="DivNumero">
          <label htmlFor="numero">Numero</label>
          <input
            id="numero"
            name="numero"
            placeholder="número"
            type="text"
            onChange={onChange}
          />
        </div><br></br>

        <div className="DivComplemento">
          <label htmlFor="complemento">complemento</label>
          <input
            id="complemento"
            name="complemento"
            placeholder="complemento"
            type="text"
            onChange={onChange}
          />
          </div><br></br>

          <div className="DivBairro">
            <label htmlFor="bairro">Bairro</label>
            <input id="bairro" name="bairro" type="text" placeholder="bairro" onChange={onChange} />
          </div><br></br>

          <div className="DivCidade">
            <label htmlFor="cidade">Município</label>
            <input id="cidade" name="cidade" type="text" placeholder="Município" onChange={onChange} />
          </div><br></br>

          <div className="DivEstado">
            <label htmlFor="estado">UF</label>
            <input id="estado" name="estado" type="text" placeholder="UF" onChange={onChange} />
          </div><br></br>

          <div className="DivEmail">
            <label htmlFor="email">email</label>
            <input id="email" name="email" type="email" placeholder="email@email.com" onChange={onChange} />
          </div><br></br>

      
        <div className="BotaoSalvar">
          <button type="submit" a href="/endereco">Salvar</button>
        </div>
      </form>
      </FormEnderecos>
  );
};
export default EnderecoForm;