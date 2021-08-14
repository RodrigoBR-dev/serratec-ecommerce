import React,{useEffect, useState} from 'react';
import formatarParaReal from '../../utils/money'
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
        setTotalFinal(formatarParaReal(calculo))

    }

    return(

            <CardResumo>
                <Info>
                    <p>Subtotal:{formatarParaReal(localStorage.getItem("total"))}</p>
                    <Break/>
                </Info>
                <Info>
                    <p>Frete:{formatarParaReal(props.frete)}</p>
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