<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h2>{{ mensagem }}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <Button :callback="IncluirEmpresa" value="Adicionar"></Button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Razão</th>
                        <th>CNPJ</th>
                        <th>Inscrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empresa in empresas" :key="empresa.emp_id">
                        <td>{{ empresa.emp_razao}}</td>
                        <td>{{ empresa.emp_cnpj}}</td>
                        <td>{{ empresa.emp_insc}}</td>
                        <td>
                            <span @click="alterar(empresa)"><i class="fa-solid fa-pencil icones"></i></span>
                            <span @click="excluir(empresa)"><i class="fa-regular fa-trash-can icones"></i></span>
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
import empresasControl from '@/controllers/empresas-control';
import Empresa from '@/models/empresa-model';


export default {
    name: 'Empresas',
    data() {
        return {
            empresas: [],
            mensagem: 'Empresas'
        }
    },
    mounted(){
        this.obterTodos()
    },
    components: {
        Button
    },
    methods: {
        obterTodos() {
            empresasControl.obterTodos()
            .then( response => {
                this.empresas = response.data.map(p => new Empresa(p))
            })
        },
        IncluirEmpresa() {
            this.$router.push({name: 'CadastrarEmpresa'})
        },
        alterar(empresa) {
            this.$router.push({name: 'AlterarEmpresa', params: {id: empresa.emp_id }})
        },
        excluir() {

        }
    }
}

</script>

<style>

</style>