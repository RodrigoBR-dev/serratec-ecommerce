import { useState } from 'react';

import usuarioApi from '../../services/usuario-api'

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
                if (error.response.status == 404) {
                    alert('Cpf não cadastrado');
                    return
                }
                console.log(error)
            })
    }

    return(
        <div>
            <label>Digite seu cpf</label>
            <input value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
            <button onClick = {()=> {receberToken()}}>Enviar</button>
        </div>
    );
}

export default Recupera;