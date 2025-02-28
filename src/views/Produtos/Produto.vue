<template>
  
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="sair">Sair</button>
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="salvar">Salvar</button>
                <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Produto</h1>
                <hr class="total">
            </div>
    </div>

    <div class="row">
        <div class="col-sm-2">
            <label for="prod_id">ID</label>
            <input type="text" id="prod_id" v-model="produto.prod_id" disabled class="form-control">
        </div>
        <div class="col-sm-2">
            <label for="prod_data">Data Cadastro</label>
            <input type="date" v-model="produto.prod_data" id="prod_data" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10">
            <label for="prod_descricao">Descrição</label>
            <input type="text" v-model="produto.prod_descricao" id="prod_descricao" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10">
            <label for="prod_referencia">Referênica.</label>
            <input type="text" v-model="produto.prod_referencia" id="prod_descricao" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3">
            <label for="prod_qtd">Qtd</label>
            <input type="text" v-model="produto.prod_qtd" class="form-control">
        </div>

        <div class="col-sm-3">
            <label for="prod_custo">Valor Custo</label>
            <input type="text" id="prod_custo" v-model="produto.prod_custo" class="form-control">
        </div>

        <div class="col-sm-4">
            <label for="prod_venda">Valor Vendas</label>
            <input type="text" id="prod_venda" v-model="produto.prod_venda" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-5">
            <label for="prod_end">Endereço</label>
            <input type="text" id="prod_end" v-model="produto.prod_end" class="form-control">
        </div>

        <div class="col-sm-5">
            <label for="prod_num">Número</label>
            <input type="text" id="prod_num" v-model="produto.prod_num" class="form-control">
        </div>
    </div>

    <div class="row">
        <label for="prod_obs">Observação</label>
        <div class="col-sm-10">
            <textarea name="Observação" v-model="produto.prod_obs" id="prod_obs" class="form-control"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
import Produto from '@/models/produto-models'
import produtosControl from '@/controllers/produtos-control';


export default {
    name: "Produto",
    data() {
        return {
            produto: new Produto(),
            cadastro: true 
        }
    },
    mounted() {
        let id = this.$route.params.id
        if (!id) return;

        this.cadastro = false;
        this.obterProdutoId(id);
    },
    methods: {
        sair() {
            this.produto = new Produto(),
            this.$router.push({ name: 'Produtos'})
        },
        cadastrarProduto() {
            if (! this.produto.validarCadastro()){
                alert('E preciso de uma descrição para cadastro de produto !!!')
                return 
            } 

            produtosControl.adicionar(this.produto)
            .then(() => {
                this.IDproduto() ;
                alert('Produto cadastrado com sucesso')
                // this.produto = new Produtos() ;
            })
        },
        alterarProduto() {
            if (!this.produto.validarAlteracao()) {
                alert('Para alterar um produto é necessário ter cadastrado !!!')
                return 
            }

            produtosControl.alterar(this.produto)
            .then(() => {
                alert('PRoduto alterado com sucesso !!!')
            })
        },
        salvar() {
            (this.cadastro) ? this.cadastrarProduto() : this.salvarProduto() ;
        },

        obterProdutoId(id) {
            produtosControl.obterPorID(id)
            .then(response => {
                this.produto = new Produto(response.data)
            }) 
            .catch(error => {
                console.log(error)
            })
        },

        IDproduto() {
            produtosControl.pegarID() 
            .then(response => {
                alert('Cheguei Brasil') ;
                alert(response.prod_id) ;
            })
            .catch(error => {
                alert(error) ;
            })
        }

    }

}
</script>

<style scoped>
textarea {
    resize: none;
}
</style>