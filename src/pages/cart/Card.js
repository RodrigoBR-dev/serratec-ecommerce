import React,{useState} from 'react';
import { CardCustom } from "./styles/styles"
const Card = (props) => {

    //destructor para pegar a quantidade do objeto produto
    const { quantidade } = props;
    //
    const [contador, setContador] = useState(0);

    //controla o máximo de itens
    const handleAumentaQuantidade = () => {
        if(contador < quantidade){
            setContador(contador+1)
        }
    }
    //controla o mínimo de itens
    const handleDiminuiQuantidade = () => {
        if(contador >= quantidade){
            setContador(contador-1)
        }
    }
    return(
        <div className="card-produto">
            <CardCustom>
                <p>{props.nome}</p>
                <p>{props.preco}</p>
                <button onClick={handleAumentaQuantidade}>+</button>
                <p>{contador}</p>
                <button onClick={handleDiminuiQuantidade}>-</button>                
                <p>{props.imagem}</p>           
            </CardCustom>
        </div>    
    )
}
export default Card;