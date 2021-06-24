import React,{useState} from 'react';
import util from '../../utils/dinheiro'
import { CardResumo, Info } from './styles/resumo-styles';

const Resumo = (props) => {
    const [subTotal,setSubTotal] = useState(0); 
    {console.log(props.subTotal)}
    const calcularSubTotal = () => {
       
    }
    return(

            <CardResumo>
                <Info>
                    <p>Resumo</p>
                </Info>
                <Info>
                    <p>Subtotal:{props.subTotal}</p>
                </Info>
            </CardResumo>

    )
} 
export default Resumo;