import React,{useEffect, useState} from 'react';
import util from '../../utils/dinheiro'
import { CardResumo, Info , Break} from './styles/resumo-styles';
import { Button } from './styles/global-style';
import { Link } from "react-router-dom";
import Card from './Card'
const Resumo = (props) => {
    const [frete,setFrete] = useState(props.frete)
    const [total,setTotal] = useState(0)
    const [totalFinal,setTotalFinal] =useState(0)

    useEffect(() => {
        calculaTotal()
    })
    const calculaTotal =() => {
        setTotal(parseFloat(localStorage.getItem("total")))
        setFrete(parseFloat(props.frete))
        let calculo = props.frete + total
        console.log(total + frete)
        setTotalFinal(util.formatarParaValorReal(calculo))

    }

    return(

            <CardResumo>
                <Info>
                    <p>Subtotal:{util.formatarParaValorReal(localStorage.getItem("total"))}</p>
                    <Break/>
                </Info>
                <Info>
                    <p>Frete:{util.formatarParaValorReal(props.frete)}</p>
                    <Break/>
                </Info>
                <Info>
                    <p><strong>Total:{totalFinal}</strong></p>
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