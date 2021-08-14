import { useState } from 'react';

import usuarioApi from '../../services/usuario-api'
import { DivPersonalizada } from '../../styles/geral';
import { InputText, Button2 } from '../../styles/forms';

const Recupera = () => {

    const [cpf, setCpf] = useState("");

    const receberToken = () => {
        if (!cpf) {
            alert('Favor informar seu CPF')
            return;
        }

        usuarioApi.recebeToken(cpf)
            .then(resposta => {
                alert('Um link, para recuperação de senha, foi enviado para o seu e-mail');
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert('Cpf não cadastrado');
                    return
                }
                console.log(error)
            })
    }

    return(
        <DivPersonalizada width="300px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <label>Digite seu cpf</label>
            <InputText value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="123456789-00"></InputText>
            <Button2 onClick = {()=> {receberToken()}}>Enviar</Button2>
        </DivPersonalizada>
    );
}

export default Recupera;