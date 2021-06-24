import React,{useState} from 'react';
import { CardCustom, ButtonDiv, Image, Info, Break, Button, Container } from "./styles/card-styles"
import util from '../../utils/dinheiro'
const Card = (props) => {

    //destructor para pegar a quantidade do objeto produto 

    const [quant, setQuantidade] = useState(props.quantidade);

    //controla o máximo de itens
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
        <div className="card-produto">
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

                <Container>
                    <ButtonDiv>
                        <Button>
                            Remover Produto
                        </Button>
                    </ButtonDiv>
                </Container>
                
            </CardCustom>
            <Break/>
        </div>    
    )
}
export default Card;