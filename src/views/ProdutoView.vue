<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <button @click="sair" class="btn btn-primary float-end btn-sm mr-2" type="button">Sair</button>
                <button @click="salvar" class="btn btn-primary float-end btn-sm mr-2" type="button">Salvar</button>
                <h1 class="titulo">{{ cadastro ? "Adcionar" : "Alterar"}} Produtos</h1>
                <hr class="total">
            </div>
        </div>
        <div class="row">
            <input type="hidden" v-model="produto.prod_id" id="id">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="data">Data</label>
                    <input type="date" v-model="produto.prod_data" id="data" class="form-control">
                </div>
            </div>
        </div>   
        <div class="row">
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <input  maxlength="45" type="text" v-model="produto.prod_descricao"  id="descricao" class="form-control">
                </div>
                <div class="form-group">
                    <label for="referencia">Referência</label>
                    <input maxlength="60" type="text" v-model="produto.prod_referencia" id="referencia" class="form-control">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="qtd">Qtd</label>
                    <input type="text" v-model="produto.prod_qtd" id="qtd" class="form-control">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="custo">Preço Custo</label>
                    <input type="text" v-model="produto.prod_custo" id="custo" class="form-control">
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="venda">Preço Venda</label>
                    <input type="text" v-model="produto.prod_venda" id="venda" class="form-control">
                </div>
            </div>

            <div class="col-sm-5">
                <div class="form-group">
                    <label for="endereco">Endereço</label>
                    <input type="text" v-model="produto.prod_end" id="endereco" class="form-control">
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label for="numero">Nr</label>
                    <input type="text" v-model="produto.prod_num" id="numero" class="form-control">
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="observacao">Observação</label>
                    <textarea type="text" v-model="produto.prod_obs" id="observacao"  class="form-control"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Produto from '@/models/Produto'
import produtoService from '@/services/produto-service'
import converterData from '@/utils/conversor-data'
import mskMoeda from '@/utils/mask-moeda'
import { TheMask } from 'vue-the-mask'

export default {
    name: "Produto_V",
    components: TheMask,
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