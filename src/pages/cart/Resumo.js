import React,{useEffect, useState} from 'react';
import util from '../../utils/dinheiro'
import { CardResumo, Info } from './styles/resumo-styles';
import { Button } from './styles/global-style';

const Resumo = (props) => {


    return(

            <CardResumo>
                <Info>
                    <p>Resumo:</p>
                </Info>
                <Info>
                    <p>Subtotal:{util.formatarParaValorReal(props.subtotal)}</p>
                </Info>
                <Button>
                    Pagamento
                </Button>
            </CardResumo>

    )
} 
export default Resumo;