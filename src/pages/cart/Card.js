import React,{useState} from 'react';
import { CardCustom, ButtonDiv, Image, Info } from "./styles/styles"
import utilFormatarReal from '../../utils/dinheiro'
const Card = (props) => {

    //destructor para pegar a quantidade do objeto produto
 
    //
    const [quant, setQuantidade] = useState(1);

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

                <Image src={props.imagem}/>
                <Info>{props.nome}</Info>
                <ButtonDiv>
                <button onClick={handleAumentaQuantidade}>+</button>
                <Info>{quant}</Info>
                <button onClick={handleDiminuiQuantidade}>-</button>
                </ButtonDiv>                
                <Info>{props.valor}</Info>
            </CardCustom>
        </div>    
    )
}
export default Card;