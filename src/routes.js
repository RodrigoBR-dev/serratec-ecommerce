import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import CadastroClientes from './pages/clientes/cadastroClientes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/clientes/cadastro" component= {CadastroClientes} />
            {/* <Route path="/detalhes/:nome" component= {Details} /> */}
            {/* <Route path="/carrinho" component= {Cart} /> */}
            {/* <Route path="/produto/cadastro" component= {ProductRegister} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;