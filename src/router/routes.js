import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import Produtos from '@/views/ProdutosView.vue';
import ProdutoView from '@/views/ProdutoView.vue';
import Clientes from '@/views/ClientesView.vue';
import ClienteView from '@/views/ClienteView.vue';
import ClienteTelefones from '@/views/ClienteTelefones.vue';
import ClienteEnderecos from '@/views/ClienteEnderecos.vue';



const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        title: 'Login',
        meta: { riquiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
        title: 'Dashboard',
        meta: { riquiredAuth: true }
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: Clientes,
        title: 'Clientes',
        meta: { riquiredAuth: true }
    },
    {
        path: '/ClientesView/novo',
        name: 'CadastrarCliente',
        component: ClienteView,
        title: 'Adicionar Clientes',
        meta: { riquiredAuth: true }
    },
    {
        path: '/ClientesView/alterar',
        name: 'AlterarCliente',
        component: ClienteView,
        title: 'Alterar Cliente',
        meta: { requiredAuth: true}
    },
    {
        path: '/ClienteTelefones',
        name: 'AdicionarTelefones',
        component: ClienteTelefones,
        title: 'Cliente Telefones'
    },
    {
        path: '/ClienteEnderecos',
        name: 'AdicionarEnderecos',
        component: ClienteEnderecos,
        title: 'Cliente Endereços'
    },
    {
        path: '/Produtos',
        name: 'Produtos',
        component: Produtos,
        title: 'Produtos',
        meta: { riquiredAuth: true }
    },
    {
        path: '/ProdutosView/novo',
        name: 'CadastrarProduto',
        component: ProdutoView,
        title: 'Adicionar Produto',
        meta: { riquiredAuth: true }
    },
    {
        path: '/ProdutosView/alterar',
        name: 'AlterarProduto',
        component: ProdutoView,
        title: 'Alterar Produto',
        meta: { riquiredAuth: true }
    },
    {
        path: '/ProdutosView/excluir',
        name: 'ExcluirProduto',
        component: ProdutoView,
        title: 'Excluir Produto',
        meta: { riquiredAuth: true }
    }
]
  
export default routes;
  