import React,{useEffect, useState} from 'react';
import util from '../../utils/dinheiro'
import { CardResumo, Info , Break} from './styles/resumo-styles';
import { Button } from './styles/global-style';
import { Link } from "react-router-dom";

const Resumo = (props) => {


    return(

            <CardResumo>
                <Info>
                    <p>Resumo:</p>
                    <Break/>
                </Info>
                <Info>
                    <p>Subtotal:{util.formatarParaValorReal(props.subtotal)}</p>
                    <Break/>
                </Info>
                <Info>
                    <p><strong>Total:{util.formatarParaValorReal(props.subtotal)}</strong></p>
                    <Break/>
                </Info>
                <Link to={`/pagamento`}>
                <Button>
                    Pagamento
                </Button>
                </Link>
            </CardResumo>

    )
} 
export default Resumo;