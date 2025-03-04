const routes = [

  {path: '/empresas', name: 'Empresas', title: 'Empresas', component: () => import('@/views/Empresas/empresas.vue')},
  {path: '/empresas/cadastro', name: 'CadastrarEmpresa', title: 'Cadastro Empresa', component: () => import('@/views/Empresas/empresa.vue')},


  {path: '/', name: 'Home', title: 'Home', component: () => import('@/views/Home.vue')},
  {path: '/login', name: 'Login', title: 'Login', component: () => import('@/views/Login.vue')},
  
  {path: '/produtos', name: 'Produtos', title: 'Produtos', component: () => import('@/views/Produtos/Produtos.vue')},
  {path: '/produto/cadastro', name: 'CadastrarProduto', title: 'Adicionar Produtos', component: () => import('@/views/Produtos/Produto.vue')},
  {path: '/produto/alterar/:id',  name: 'AlterarProduto', title: 'Alterar Produto',  component: () => import('@/views/Produtos/Produto.vue')},
  {path: '/produtos/:id',  name: 'ExcluirProduto', title: 'Excluir Produto', component: () => import('@/views/Produtos/Produtos.vue')},

  {path: '/clientes', name: 'Clientes', component: () => import('@/views/Clientes/Clientes.vue')},
  {path: '/cliente/cadastro', name: 'CadastrarCliente', component: () => import('@/views/Clientes/Cliente.vue')},
  {path: '/cliente/endereco', name: 'EnderecoCliente', component: () => import('@/views/Clientes/Endereco.vue')},
  {path: '/cliente/contato', name: 'ContatoCliente', component: () => import('@/views/Clientes/Contato.vue')},
  {path: '/clientes/alterar/:id', name: 'AlterarCliente', component: () => import('@/views/Clientes/Cliente.vue')},
  {path: '/clientes/excluir/:id', name: 'ExcluirCliente', component: () => import('@/views/Clientes/Clientes.vue')},
  {path: '/cliente/clienteid', name: 'BuscarID', component: () => import('@/views/Clientes/ID.vue')},

  {path: '/empresas', name: 'Empresas', component: () => import('@/views/Empresas/empresas.vue')},
  {path: '/empresa/:id', name: 'BuscarID', component: () => import('@/views/Empresas/empresa.vue')},
  {path: '/empresa/cadastro', name: 'CadastraEmpresas', component: () => import('@/views/Empresas/empresa.vue')},
  {path: '/empresa/alterar/:id', name: 'AlterarEmpresa', component: () => import('@/views/Empresas/empresa.vue')},
  {path: '/empresas/excluir/:id', name: 'DeleteEmpresas', component: () => import('@/views/Empresas/empresas.vue')},
  
  
  {path: '/os', name: 'OrdemDeServico', component: () => import('@/views/OrdemDeServicos/Os.vue')},

  {path: '/fluxodecaixa', name: 'FluxodeDeCaixa', component: () => import('@/views/Financeiro/caixa/FluxoDeCaixa.vue')}




]

export default routes;




// import { createRouter, createWebHistory } from 'vue-router'
// import Login from '@/views/Login.vue'
// import Home from '@/views/Home.vue'
// import Os from '@/views/OrdemDeServicos/Os.vue'
// import Produtos from '@/views/produtos/Produtos.vue'
// import Produto from '@/views/produtos/Produto.vue'
// import Clientes from '@/views/Clientes/Clientes.vue'
// import Cliente from '@/views/Clientes/Cliente.vue'
// import ClienteEndereco from '@/views/Clientes/Endereco.vue'
// import ClienteContato from '@/views/Clientes/Contato.vue'


// const routes = [
//   {path: '/', name: 'Dashboard', component: () => import('@/views/DashBoard.vue')},
//   {path: '/login', name: 'Login', component: () => import('@/views/Login.vue')},
//   {path: '/produtos', name: 'Produtos', component: () => import('@/views/Produtos.vue')},
//   {path: '/produto/cadastro', name: 'CadastrarProduto', component: () => import('@/views/Produto.vue')},
//   {path: '/produtos/alterar/:id',  name: 'AlterarProduto',  component: () => import('@/views/Produto.vue')},
//   {path: '/produto/excluir/:id',  name: 'ExcluirProduto',  component: () => import('@/views/Produtos.vue')},
//   {path: '/clientes', name: 'Clientes', component: () => import('@/views/Clientes.vue')},
//   {path: '/cliente/cadastro', name: 'CadastrarCliente', component: () => import('@/views/Cliente.vue')},
//   {path: '/clientes/alterar/:id', name: 'AlterarCliente', component: () => import('@/views/Cliente.vue')},
//   {path: '/cliente/excluir/:id', name: 'ExcluirCliente', component: () => import('@/views/Clientes.vue')},
//   {path: '/cliente/resgateid', name: 'BuscarID', component: () => import('@/views/Cliente.vue')},
// ]



// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login
//   },
//   {
//     path: '/produtos',
//     name: 'Produtos',
//     component: Produtos
//   },
//   {
//     path: '/produtos/new',
//     name: 'ProdutoNew',
//     component: Produto  
//   },
//   {
//     path: '/produtos/alterar',
//     name: 'ProdutoAlterar',
//     component: Produto  
//   },
//   {
//     path: '/produtos/excluir',
//     name: 'ProdutoExcluir',
//     component: Produto  
//   },
//   {
//     path: '/os',
//     name: 'OS',
//     component: Os  
//   },
//   {
//     path: '/clientes',
//     name: 'Clientes',
//     component: Clientes  
//   },
//   {
//     path: '/clientes/new',
//     name: 'ClienteNew',
//     component: Cliente  
//   },
//   {
//     path: '/clientes/endereco',
//     name: 'ClienteEndereco',
//     component: ClienteEndereco 
//   },
//   {
//     path: '/clientes/contato',
//     name: 'ClienteContato',
//     component: ClienteContato 
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
