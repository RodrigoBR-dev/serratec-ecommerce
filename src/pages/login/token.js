import { useEffect, useState } from 'react';

import api from '../../services/api';
import { DivPersonalizada } from '../../styles/geral';
import { InputText, Button2 } from '../../styles/forms';

const Token = (props) => {
    const [token, setToken] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [repSenha, setRepSenha] = useState("");

    useEffect(() => {
        setToken(props.match.params.token);
    }) 
    function comparar() {
        if (senha != repSenha) {
            alert("As senhas digitadas devem ser iguais")
            return;
        }
        gravarSenha();
    }

    const gravarSenha = async () => {
        await api.put("/cliente/recupera?token="+token, {"cpf": cpf, "senha": senha})
        .then(resposta => {
            window.open('/login', '_self');
        })
        .catch(error => {
            alert("Cpf não corresponde ao link utilizado");
            console.log(error)
        })
    }

    return (
        <DivPersonalizada width="300px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <label>Digite seu CPF</label>
            <InputText value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="123456789-00"/>
            <label>Nova senha</label>
            <InputText type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <label>Repita a senha</label>
            <InputText type="password" value={repSenha} onChange={(e) => setRepSenha(e.target.value)}/>
            <Button2 onClick={comparar}>Enviar</Button2>
        </DivPersonalizada>
    );
}

export default Token;