import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import Produtos from '@/views/ProdutosView.vue';
import ClientesView from '@/views/ClientesView.vue';
import ProdutoView from '@/views/ProdutoView.vue';

const routes = [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
      title: 'Login',
      meta: { riquiredAuth: false }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      title: 'Dashboard',
      meta: { riquiredAuth: true }
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos,
      title: 'Produtos',
      meta: { riquiredAuth: true }
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: ClientesView,
      title: 'Clientes',
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
      path: '/ProdutosView/alterar',
      name: 'ExcluirProduto',
      component: ProdutoView,
      title: 'Excluir Produto',
      meta: { riquiredAuth: true }
    }
  ]
  
  export default routes;
  