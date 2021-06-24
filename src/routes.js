import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import Nacionais from './pages/home/categoria/nacional';
import Internacionais from './pages/home/categoria/internacionais';
import Carrinho from './pages/cart/Carrinho';
import CadastroClientes from './pages/clientes/cadastroClientes';
import Login from './pages/login/login';


const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/login" component= {Login} />
            {/* <Route path="/detalhes/:nome" component= {Details} /> */} */}
            <Route path="/carrinho" component= {Carrinho} />
            <Route path="/clientes/cadastro" component= {CadastroClientes} />
            <Route path="/nacionais" component= {Nacionais} />
            <Route path="/importadas" component= {Internacionais} />
            {/* <Route path="/produto/cadastro" component= {ProductRegister} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;