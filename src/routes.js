import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import Nacionais from './pages/home/categoria/nacional';
import Internacionais from './pages/home/categoria/internacionais';
import Carrinho from './pages/cart/Carrinho';
import CadastroClientes from './pages/clientes/cadastroClientes';
import Login from './pages/login/login';
import Recupera from './pages/login/recupera';
import EnderecoForm from './pages/enderecos/PageEnderecos';
import ListaEnderecos from './pages/enderecos/ListaEnderecos';
import Pagamento from './pages/pagamentos';
import Details from './pages/details/details';
import Cliente from './pages/clientes/cliente';
import BuscaEnderecos from './pages/enderecos/BuscaEnderecos';
import Token from './pages/login/token';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/login" component= {Login} />
            <Route path="/recupera-senha" component= {Recupera} />
            <Route path="/detalhes/:nome" component= {Details} /> */}
            <Route path="/carrinho" component= {Carrinho} />
            <Route path="/clientes/cadastro" component= {CadastroClientes} />
            <Route path="/nacionais" component= {Nacionais} />
            <Route path="/importadas" component= {Internacionais} />
            <Route path="/detalhes/:nome" component= {Details} />
            <Route path="/enderecos" component= {ListaEnderecos} />
            <Route path="/cliente" component= {Cliente} />
            <Route path="/endereco" component= {BuscaEnderecos} />
            <Route path="/cadastro-endereco" component= {EnderecoForm} />
            <Route path="/pagamento" component= {Pagamento} />
            <Route path="/token/:token" component= {Token} />
            {/* <Route path="/produto/cadastro" component= {ProductRegister} /> */}

        </Switch>
    </BrowserRouter>
);

export default Routes;