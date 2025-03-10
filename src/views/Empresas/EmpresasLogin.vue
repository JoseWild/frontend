<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-7">
            <h2>Escolha a empresa para usar o sistema</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-7">
            <table class="table table-hover ">
                <thead class="table-dark">
                    <tr>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empresa in empresas" :key="empresa.emp_id">
                        <td>{{ empresa.emp_razao }}</td>
                        <td>{{ empresa.emp_cnpj }}</td>
                        <td @click="cnpj(empresa)"><i class="fa-solid fa-check icones"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import empresasControl from '@/controllers/empresas-control.js'
import Empresa from '@/models/empresa-model.js'

export default {
    name: 'EmpresaLogin',
    data() {
        return {
            empresas: []
        }    
    },
    mounted() {
        this.obterTodos() ;
    },
    methods: {
        obterTodos() {
            empresasControl.obterTodos()
            .then( response => {
                this.empresas = response.data.map(e => new Empresa(e))
            })
            .catch(error => {
                 console.log(error)
            })
        },

        cnpj(empresa) {
            //this.$router.push({name: 'EmpresasLogin', params: ( {id: empresa.emp_id})})
            alert(empresa.emp_cnpj)
            this.$router.push({ name: "Login"})
        }    
    }
 }
</script>

<style scoped>
.container {
    width: 60%;
    /* height: 100vh; */
    /* background: #1e8225; */
    /* display: flex; */    
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
}
.row {
    width: 100vw;
}
h2 {
    color: #1e8225;
    text-align: center;
}

.icones {
    margin: 0;
    padding: 0;
    color: var(--cor-primaria);
    cursor: pointer;
    margin: 5px;
    height: 15px;
}
</style>