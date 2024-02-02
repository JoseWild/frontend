<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button 
          class="btn btn-primary float-end btn-sm mr-2" 
          type="button"
          @click="sair"
        >Sair
        </button>
        <button 
          class="btn btn-primary float-end btn-sm mr-2" 
          type="button"
          @click="salvar" 
        >Salvar
        </button>
        <h1 class="titulo">{{ cadastro ? "Adcionar" : "Alterar" }} Produtos</h1>
        <hr class="total">
      </div>
    </div>
    <div class="row">
      <input 
        id="id"
        v-model="produto.prod_id"
        type="hidden" 
      >
      <div class="col-sm-2">
        <div class="form-group">
          <label for="data">Data</label>
          <input 
            id="data" 
            v-model="produto.prod_data" 
            class="form-control"
            type="date"
          >  
        </div>
      </div>
    </div>   
    <div class="row">
      <div class="col-sm-10">
        <div class="form-group">
          <label for="descricao">Descrição</label>
          <input  
            id="descricao" 
            v-model="produto.prod_descricao"  
            class="form-control"
            type="text" 
            maxlength="45" 
          >
        </div>
        <div class="form-group">
          <label for="referencia">Referência</label>
          <input 
            id="referencia" 
            v-model="produto.prod_referencia" 
            type="text" 
            class="form-control"
            maxlength="60" 
          >
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="qtd">Qtd</label>
          <input 
            id="qtd" 
            v-model="produto.prod_qtd" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="custo">Preço Custo</label>
          <input 
            id="custo" 
            v-model="produto.prod_custo" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="venda">Preço Venda</label>
          <input 
            id="venda" 
            v-model="produto.prod_venda" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-5">
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input 
            id="endereco" 
            v-model="produto.prod_end" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-5">
        <div class="form-group">
          <label for="numero">Nr</label>
          <input 
            id="numero" 
            v-model="produto.prod_num" 
            type="text" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-10">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea 
            id="observacao"  
            v-model="produto.prod_obs" 
            type="text" 
            class="form-control"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from '@/models/Produto'
import produtoService from '@/services/produto-service'
import converterData from '@/utils/conversor-data'


export default {
    name: "ProdutoV",

    data(){
        return {
            produto: new Produto(),
            cadastro: true,
        }
    },
    mounted(){
        let id = this.$route.params.id
        if (!id) return;
        
        this.cadastro = false;
        this.obterProdutoId(id);
    },
    methods:{
        obterProdutoId(id){
            produtoService.obterPorId(id)
                .then(response => {
                    this.produto = new Produto(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        sair(){
            this.produto = new Produto();
            this.$router.push({name: "Produtos"})
        },
        cadastrarProduto(){
            this.produto.prod_cad = converterData.dataAmericana(this.produto.prod_cad)
            if (!this.produto.modeloValidoParaCadastro()){
                this.$swal({
                    icon: 'warning',
                    title: "Alguns campos são obrigatorios para cadastro !!!",
                    confirmButtonColor: '#388E3C'
                })
                return
            }

            produtoService.cadastrar(this.produto)
                .then(() => {
                    this.$swal({
                        icon: 'success',
                        title: "Produto cadastrado com sucesso !!!",
                        confirmButtonColor: '#388E3C'
                    })
                    this.produto = new Produto()
                }
                )
                .catch(error => {
                    console.log(error)
                })
        },     
        handleInput() {
            this.inputValue = this.inputValue.toUpperCase();
        },    
        converterDat(){
            this.inputValue = converterData(this.inputValue);
        },     
        AtualisarProduto(){
            if (!this.produto.modeloValidoParaAtualizar()){
                this.$swal({
                    icon: 'warning',
                    title: "Código e nome de produto são obrigatorios para atualizar um cadastro!!!",
                    confirmButtonColor: '#388E3C'
                })
                return
            }
            
            produtoService.alterar(this.produto)
                .then(() => {
                    this.$swal({
                        icon: "success",
                        title: "Produto Alterado com sucesso !!!",
                        confirmButtonColor: '#388E3C',
                        Animation: 'true'
                    })
                    this.$router.push({name: 'Produtos'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        salvar(){
            (this.cadastro) ? this.cadastrarProduto() : this.AtualisarProduto();
        },
         
    }
}

</script>

<style scoped>

textarea {
    resize: none;
}
.mr-2 {
    margin: 5px;
}
.total {
   width: 100%;
   color: var(--cor-primaria)
}

</style>