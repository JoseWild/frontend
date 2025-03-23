<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-7">
            <h2>CNPJ:</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-7">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Digite aqui seu cnpj:" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
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