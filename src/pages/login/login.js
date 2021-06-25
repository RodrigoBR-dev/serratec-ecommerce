import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import usuarioApi from '../../services/usuario-api'
import utilStorage from '../../utils/storage';
import { DivPersonalizada } from '../../styles/geral';
import { InputText, Button2 } from '../../styles/forms';

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const efetuarLogin = () => {
        if (!email || !senha) {
            alert("Favor informar e-mail e senha");
            return;
        }
        
        usuarioApi.logar(email, senha)
            .then(resposta => {             
                const token = resposta.data[0].Authorization;
                const user = resposta.data[1].userName;
                utilStorage.armazenarToken(token);
                utilStorage.armazenarUser(user);
                window.open('/', "_self");
            })
            .catch(error => {
                let erroStatus = error.response.status;
                if (erroStatus == 403) {
                    alert("Usuário ou senha inválido");
                    return
                }
                console.log(error)
            })
    }

    useEffect(() => {
        let token = utilStorage.obterToken();
        if (token) {
            window.open("/", "_self");
        }
    });

    return (
        <DivPersonalizada width="400px" border="1px solid #ddd" margin="auto" marginTop="10px">
            <h1>Login</h1>
            <h2>Olá! Para continuar, digite seu email!</h2>
            <label htmlFor="email">Email</label>
            <InputText itemID="email" value={email} onChange={e => setEmail(e.target.value)}></InputText>
            <label htmlFor="senha">Senha</label>
            <InputText itemID="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}></InputText>
            <Button2 onClick={efetuarLogin}>Entrar</Button2>
            <Link to="/clientes/cadastro">
            <Button2>Criar Conta </Button2>
            </Link>
        </DivPersonalizada>
    );
}

export default Login;