<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Produtos</h1>
        <hr>
      </div>
    </div>   
    <div class="row sub-container">
      <div class="col-sm-2">
        <ButtonView 
          :callback="cadastrarProduto" 
          value="Adicionar" 
        />
      </div>
      <div class="col-sm-8">
        <input 
          v-model="search"
          class="pesquisa"
          placeholder="Descrição ou Referência"
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Referência</th>
              <th>Qtd</th>
              <!--<th>Preço Custo</th> -->
              <th>Preço Venda</th>
              <th>Endereço</th>
              <th>Numero</th>
              <!-- <th>Obs:</th> -->
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="item in produtosFiltered" 
              :key="item.id"
              class="products"
            >
              <th>{{ data(item.prod_data) }}</th>
              <th>{{ item.prod_descricao }}</th>
              <th>{{ item.prod_referencia }}</th>
              <th>{{ item.prod_qtd }}</th>
              <!--  <th>{{ item.prod_custo}}</th> -->
              <th>{{ item.prod_venda }}</th>
              <th>{{ item.prod_end }}</th>
              <th>{{ item.prod_num }}</th>
              <!-- <th>{{ item.prod_obs }}</th> -->
              <th>
                <span @click="alterarProduto(item)"><i class="fas fa-pen icones-tabela mr-2" /></span>
                <span @click="excluirProduto(item)"><i class="fas fa-trash-can icones-tabela mr-2" /></span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>   
  </div>
</template>

<script>
import ButtonView from '@/components/button/ButtonView.vue';
import produtoService from '@/services/produto-service';
import Produto from '@/models/Produto';
import converterData from '@/utils/conversor-data';
import InputText from '@/components/search/PesquisaView.vue'


export default {
    name: 'ProdutosView',
    components:{
        ButtonView, 
    },
    data(){
        return{
            produtos: [],
            search: ""
        }
    },
    computed: {
        produtosFiltered() {
            let valores = [] ;
            valores = this.produtos.filter((item) => {
                return (
                    item.prod_descricao.toLowerCase().indexOf(this.search.toLowerCase()) > -1 
                );
            });
            return valores;
        }
    },
    mounted() {
        this.obterTodosOsProdutos();
        converterData.dataIso(this.produtos.prod_data)
    }, 
    methods: {
        cadastrarProduto(){
            this.$router.push({name: "CadastrarProduto"})
        },
        alterarProduto(produto){
            this.$router.push({name: "AlterarProduto", params: {id: produto.prod_id}})
        },
        excluirProduto(produto){
            if (confirm(`Deseja realmenter excluir este item ??? "${produto.prod_descricao}, ${produto.prod_id}"`)){
                produtoService.excluir(produto.prod_id)
                    .then(() => {
                        let indice = this.produtos.findIndex(p => p.id == produto.prod_id);
                        this.produtos.splice(indice, 1)
                        this.$swal({
                            icon: 'success',
                            title: "Produto excluido com sucesso !!!",
                            confirmButtonColor: '#388E3C'
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                this.$route.delete({name: "ExcluirProduto", params: {id: produto.prod_id}})
            }     
        },
        obterTodosOsProdutos(){
            produtoService.obterTodos()
                .then(response => {
                    let produtos = response.data.map(p => new Produto(p)); 
                    this.produtos = produtos.reverse();
                })
                .catch( error => {
                    console.log(error);
                })
        },
        data(data) {
            return converterData.dataIso(data) ;
        }
    }  
}   
</script>


<style scoped>
 h1 {
  color: green;
 }
 tbody th {
     color: blue;
     
     font-family: 'Times New Roman';  
 }

 .products {
   font-size: 10px;
   margin: 5px;
 }
.icones-tabela {
   margin: 1px;
   cursor: pointer;
   color: var(--cor-primaria)
}
 
 span:first-of-type {
   padding-left: 15px ;
 }

 .mr-2 {
   margin: 5px;
 }

 .pesquisa {
   width: 80%;
 }
</style>