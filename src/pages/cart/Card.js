import React,{useEffect, useState} from 'react';
import { CardCustom, Image, Info,  Container } from "./styles/card-styles"
import { Button , ButtonDiv} from './styles/global-style';
import util from '../../utils/dinheiro'
import utilStorage from '../../utils/storage'
const Card = (props) => {

    const [estoque, setEstoque] = useState(utilStorage.obterEstoque(props.nome));
    const [cont, setContador] = useState(props.quantidade);


    const handleAumentaQuantidade = () => {
        
        if(cont < estoque){
            setContador(cont + 1)
        }
    }
    //controla o mínimo de itens
    const handleDiminuiQuantidade = () => {
        if(cont > 0  ){
            setContador(cont - 1)            
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
                        <p>{cont}</p>
                        <Button onClick={handleAumentaQuantidade}>+</Button>
                    </ButtonDiv>
                </Container>

                <Container>
                    <Info>{util.formatarParaValorReal( props.valor * cont ) }</Info>
                </Container>
                
            </CardCustom>
        
            
   
    )
}
export default Card;