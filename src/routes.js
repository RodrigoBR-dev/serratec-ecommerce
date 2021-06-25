import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Carrinho from './pages/cart/Carrinho';
import CadastroClientes from './pages/clientes/cadastroClientes';
import EnderecoForm from './pages/enderecos/PageEnderecos';
import BuscaEnderecos from './pages/enderecos/BuscaEnderecos';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Home} />
            {/* <Route exact path="/produto" component= {ProductScreen} />
            <Route path="/detalhes/:nome" component= {Details} /> */}
            <Route path="/carrinho" component= {Carrinho} />   
            <Route path="/clientes/cadastro" component= {CadastroClientes} />
            <Route path="/enderecos" component= {BuscaEnderecos} />
            <Route path="/cadastro-endereco" component= {EnderecoForm} />

            {/* <Route path="/detalhes/:nome" component= {Details} /> */}
            {/* <Route path="/carrinho" component= {Cart} /> */}
            {/* <Route path="/produto/cadastro" component= {ProductRegister} /> */}

        </Switch>
    </BrowserRouter>
);

export default Routes;