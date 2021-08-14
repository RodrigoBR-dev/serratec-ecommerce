import React,{useEffect} from 'react';
import { CardCustom, Image, Info,  Container } from './styles/card-styles';
import { Button , ButtonDiv} from './styles/global-style';

import pedidoApi from '../../services/pedido-api';
import formatarParaReal from '../../utils/money';

const Card = (props) => {

    let cont = props.quantidade;

    useEffect (() => {
        calculaTotal()
    })

    const handleAumentaQuantidade = () => {
        pedidoApi.atualizar(props.pedido, props.nome, props.quantidade + 1)
            .then(() => {props.setAtualiza(props.atualiza + 1)})
            .catch((error) => {console.log(error)});
    }
    const handleDiminuiQuantidade = () => {
        pedidoApi.atualizar(props.pedido, props.nome, props.quantidade - 1)
            .then(() => {props.setAtualiza(props.atualiza + 1)})
            .catch((error) => {console.log(error)});
    }
    const calculaTotal = () => {
        localStorage.setItem( "total" , props.valor * cont)
    }

    return(

            <CardCustom>
                <Container>
                    <Image src={props.imagem}/>
                </Container>

                <Container>
                    <Info>{props.nome}</Info>
                </Container>

                <Container>
                    <ButtonDiv>
                        <Button onClick={handleDiminuiQuantidade}>-</Button>
                        <p>{cont}</p>
                        <Button onClick={handleAumentaQuantidade}>+</Button>
                    </ButtonDiv>
                </Container>

                <Container>
                    <Info>{formatarParaReal( props.valor * cont ) }</Info>
                </Container>
                
            </CardCustom>
        
            
   
    )
}
export default Card;