<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="sair">Sair</button>
            <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="salvar">Salvar</button>
            <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Empresa </h1>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <label for="">ID</label>
                <input v-model="empresa.emp_id" type="text" class="form-control" disabled>
            </div>
            <div class="col-sm-3">
                    <label>Data Cadastro</label>
                    <input v-model="empresa.emp_datacad" type="date" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <label for="">Razão Social</label>
                <input v-model="empresa.emp_razao" type="text" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <label for="">Fantasia</label>
                <input v-model="empresa.emp_fantasia" type="text" class="form-control">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <label for="">CNPJ</label>
                <input v-model="empresa.emp_cnpj" type="text" class="form-control">
            </div>
            <div class="col-sm-6">
                <label for="">Inscrição</label>
                <input v-model="empresa.emp_insc" type="text" class="form-control">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import empresasControl from '@/controllers/empresas-control';
import Empresa from '@/models/empresa-model'

export default {
    name: 'Empresa',
    data() {
        return {
            cadastro: true,
            empresa: new Empresa(),
        }
    },
    mounted() {
        let id = this.$route.params.id
        if (!id) return;

        this.cadastro = false;
        this.obterPorID(id);
    },
    methods: {
        cadastrar() {
            empresasControl.adicionar(this.empresa)
            .then(() => (
                alert('Empresa cadastrada com sucesso !!!')
            ))
        },
        alterar() {
            empresasControl.alterar(this.empresa)
            .then(() => {
                alert('Empresa alterada com sucesso !!!')
                this.$router.push({name: 'Empresas'})
            })
        },
        obterPorID(id) {
            empresasControl.obterPorID(id)
            .then(response => {
                this.empresa = new Empresa(response.data)
            }) 
            .catch(error => {
                console.log(error)
            })
        },
        sair() {
            this.$router.push({ name: 'Empresas'})
        },
        salvar() {
           (this.cadastro) ? this.cadastrar() : this.alterar() ; 
        },
        updateText(newValue) {
            this.value = newValue.toUpperCase();
        },
    }       
}
</script>

<style>

</style>