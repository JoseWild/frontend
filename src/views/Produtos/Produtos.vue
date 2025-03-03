<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="titulo">{{ mensagem }}</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <Button :callback="incluir" value="Adicionar"></Button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th disable></th>
                            <th class="data">Data</th>
                            <th class="descricao">Descrição</th>
                            <th class="qtd">Qtd</th>
                            <th>Preço Vendas</th>
                            <th class="end">End</th>
                            <th class="end">Num</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in produtos" :key="item.prod_id" style="white-space: nowrap;">
                            <td>{{ item.prod_id }}</td>
                            <td>{{ Data(item.prod_datacad) }} </td>
                            <td>{{ Data(item.prod_data) }} </td>
                            <td class="descricao">{{ item.prod_descricao }}</td>
                            <td class="qtd">{{ item.prod_qtd }}</td>
                            <td class="venda">{{ Real(item.prod_venda) }}</td>
                            <td class="end">{{ item.prod_end }}</td>
                            <td class="end">{{ item.prod_num }}</td>
                            <td>
                                <span @click="alterar(item)"><i class="fa-solid fa-pencil icones"></i></span>
                                <span @click="excluir(item)"><i class="fa-regular fa-trash-can icones"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import produtosControl from '@/controllers/produtos-control';
import Produto from '@/models/produto-models';
import conversoMonetario from '@/util/conversoMonetario';
import conversorData from '@/util/conversorData';


export default {
    name: 'Produtos',
    data() {
        return {
            mensagem: 'Produtos',
            produtos: []
        }
    },
    components: {
        Button
    },
    methods: {
        obterTodosProdutos() {
            produtosControl.obterTodos()
            .then( response => {
                this.produtos = response.data.map(p => new Produto(p)) 
            })
            .catch(error => {
                console.log(error)
            })
        },
        incluir() {
            this.$router.push({ name: 'CadastrarProduto'})
        },
        alterar(produto) {
            this.$router.push({ name: 'AlterarProduto', params: { id: produto.prod_id } })
        },
        excluir(produto) {
        // if (confirm(`Deseja realmenter excluir este item ??? "${produto.prod_descricao}, ${produto.prod_id}"`)) {
            produtosControl.excluir(produto.prod_id)
            .then(() => {
                let indice = this.produtos.findIndex(p => p.id == produto.prod_id);
                this.produtos.splice(indice, 1)
                //this.$swal({
                //  icon: 'success',
                // title: "Produto excluido com sucesso !!!",
                // confirmButtonColor: '#388E3C'
                //})
                alert('Produto excluido com sucesso !!!')
                this.$router.push({name: 'Produtos'})
            })
            .catch(error => {
                console.log(error)
             })
            //this.$route.delete({ name: "ExcluirProduto", params: { id: produto.prod_id } })
        },
        Data(data) {
            return conversorData.MaskDataIso(data);
        },
        Real(valor) {
            return conversoMonetario.MaskReal(valor);
        }
    },
    mounted() {
        this.obterTodosProdutos() ;
    }

}
</script>

<style scoped>
.container {
    margin-top: 10px;
}

.icones {
    margin: 0;
    padding: 0;
    color: var(--cor-primaria);
    cursor: pointer;
    margin: 5px;
    height: 15px;
}

.venda {
    
    text-align: right;
}

.end {
    text-align: center;
}

table tbody tr {
    line-height: 1px;
    margin-bottom: 1px;
}

/* .venda {
    text-align: right;
    width: 150px;
}
.qtd {
    width: 150px;
    text-align: right;
}

table {
    word-wrap: break-word;
}


.icones {
    color: var(--cor-primaria);
    cursor: pointer;
    margin: 5px;
}

.data {
    text-align: center;
    width: 90px;
}
.descricao {
    width: 300px;
    text-align: left;
}

.end {
    width: 50px;
    text-align: right;
    margin: 5px;
    padding: 5px;
}

table tbody tr td {
    padding: 2px;
    padding-bottom: 2px;
    margin: 2px;
} */

</style>