import React,{useEffect, useState} from 'react';
import { CardCustom, Image, Info,  Container } from "./styles/card-styles"
import { Button , ButtonDiv} from './styles/global-style';
import util from '../../utils/dinheiro'
const Card = (props) => {

    const [quant, setQuantidade] = useState(props.quantidade);

    const handleAumentaQuantidade = () => {
        if(quant < props.quantidade){
            setQuantidade(quant + 1)
        
        }
    }
    //controla o mínimo de itens
    const handleDiminuiQuantidade = () => {
        if(quant >= props.quantidade){
            setQuantidade(quant - 1)            
        }
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
                        <p>{quant}</p>
                        <Button onClick={handleAumentaQuantidade}>+</Button>
                    </ButtonDiv>
                </Container>

                <Container>
                    <Info>{util.formatarParaValorReal( props.valor * quant ) }</Info>
                </Container>
                
            </CardCustom>
        
            
   
    )
}
export default Card;