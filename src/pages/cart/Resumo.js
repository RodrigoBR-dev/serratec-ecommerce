import React,{useState} from 'react';
import util from '../../utils/dinheiro'
import { CardResumo, Info } from './styles/resumo-styles';

const Resumo = (props) => {
    return(

            <CardResumo>
                <Info>
                    <p>Resumo</p>
                </Info>
                <Info>
                    <p>Subtotal:</p>
                </Info>
            </CardResumo>

    )
} 
export default Resumo;