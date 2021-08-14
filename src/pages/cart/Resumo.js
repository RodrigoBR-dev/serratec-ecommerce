import React from 'react';
import { Link } from "react-router-dom";

import formatarParaReal from '../../utils/money'
import { CardResumo, Info , Break} from './styles/resumo-styles';
import { Button } from './styles/global-style';

const Resumo = (props) => {

    return(
            <CardResumo>
                <Info>
                    <p>Subtotal:{formatarParaReal(props.subtotal)}</p>
                    <Break/>
                </Info>
                <Info>
                    <p>Frete:{formatarParaReal(props.frete)}</p>
                    <Break/>
                </Info>
                <Info>
                    <p><strong>Total:{formatarParaReal(props.total)}</strong></p>
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