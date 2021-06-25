import React, { useState } from "react"
import { DivBox, DivEspaco1, DivEspaco2, Section, InputData, Button } from "../../styles/forms";
import clientesApi from "../../services/clientes-api";
import Cliente from "../../model/cliente";
import api from "../../services/api";

const CadastroClientes = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const enviarDados =  async () => {

        let dadosCliente = new Cliente({
            email: email,
            userName: userName,
            senha: senha,
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            dataNascimento: dataNascimento

        })

        clientesApi.cadastrarCliente(dadosCliente).then(function (response) {

          })
          .catch(function (error) {
            alert("Não foi possível criar este cliente");
          });


    }
    return (
        <Section>
            <DivBox>
                <DivEspaco1>
                    <label htmlFor="email">E-mail</label>
                    <InputData id="email"  type="email" placeholder="seuemail@provedor.com"value={email} onChange={(e) => setEmail(e.target.value)}></InputData>
                </DivEspaco1>
                <DivEspaco2>
                    <DivEspaco1>
                        <label htmlFor="userName">User Name</label>
                        <InputData id="userName" type="text" placeholder="nickname"value={userName} onChange={(e) => setUserName(e.target.value)}></InputData>
                    </DivEspaco1>
                    <DivEspaco1>
                        <label htmlFor="senha">Senha</label>
                        <InputData id="senha" type="password" placeholder="******"value={senha} onChange={(e) => setSenha(e.target.value)}></InputData>
                    </DivEspaco1>
                </DivEspaco2>
                <DivEspaco2>
                    <DivEspaco1>
                        <label htmlFor="nome">Nome</label>
                        <InputData id="nome" type="text" placeholder="seu nome"value={nome} onChange={(e) => setNome(e.target.value)}></InputData>
                    </DivEspaco1>
                    <DivEspaco1>
                        <label htmlFor="cpf">CPF</label>
                        <InputData id="cpf" type="text" placeholder="123456789-00" value={cpf} onChange={(e) => setCpf(e.target.value)}></InputData>
                    </DivEspaco1>
                </DivEspaco2>
                <DivEspaco2>
                    <DivEspaco1>
                        <label htmlFor="dataNascimento">Nascimento</label>
                        <InputData id="dataNascimento" type="date"value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}></InputData>
                       
                    </DivEspaco1>
                    <DivEspaco1>
                    <label htmlFor="telefone">Telefone</label>
                        <InputData id="telefone" type="telephone" placeholder="00 9988-7766" value={telefone} onChange={(e) => setTelefone(e.target.value)}></InputData>
                    </DivEspaco1>

                </DivEspaco2>
                <DivEspaco1> 
                    <Button onClick={ () => { enviarDados() }} >Cadastrar</Button>

                </DivEspaco1>



            </DivBox>
            </Section>
        
    );
}
export default CadastroClientes;