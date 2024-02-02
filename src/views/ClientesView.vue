<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Clientes</h1>
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <ButtonView 
          value="Adicionar" 
          :callback="cadastrar" 
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Data Cad.</th>
              <th>Data Nasc.</th>
              <th>Pessoa</th>
              <th>Nome</th>
              <th>CPF / CNPJ</th>
              <th>I.D / Inscrição</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="item in clientes"
              :key="item.id"
            >
              <th>{{ data(item.cli_datacad) }}</th>
              <th>{{ data(item.cli_datanasc) }}</th>
              <th>{{ item.cli_pessoa }}</th>
              <th>{{ item.cli_nome }}</th>
              <th>{{ item.cli_cpfcnpj }}</th>
              <th>{{ item.cli_ciinsc }}</th>
              <th>
                <span @click="alterar(item)"><i class="fas fa-pen icones-tabela mr-2" /></span>
                <span @click="excluir(item)"><i class="fas fa-trash-can icones-tabela mr-2" /></span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import clienteService from '../services/cliente-service'
import ButtonView from '@/components/button/ButtonView.vue';
import Cliente from '@/models/Cliente';
import converterData from '@/utils/conversor-data'



export default {
    name: 'ClientesView',
    
    components: {
        ButtonView
    },

    data(){
        return{
            clientes: []
        }
    },
    mounted() {
        this.obterTodosOsClientes();      
    },
    methods: {
        cadastrar(){
            this.$router.push({name: "CadastrarCliente"})
        },

        alterar(cliente){
            this.$router.push({name: "AlterarCliente", params: {id: cliente.cli_id}})
        },

        excluir(cliente){
            if (confirm(`Deseja realmente excluir este cliente "${cliente.cli_nome}"`)){
                clienteService.excluir(cliente.cli_id)
                    .then(() =>{
                        let indice = this.clientes.findIndex(p => p.id == cliente.cli_id) ;
                        this.clientes.splice(indice, 1) ;
                        this.$swal({
                            icon: 'success',
                            title: "Produto excluido com sucesso !!!",
                            confirmButtonColor: '#388E3C'
                        })
                    })
                    .catch(error => {
                        console.log(error) ;
                    })
            }
        },

        obterTodosOsClientes(){
            clienteService.obterTodos()
                .then(response => {
                    let clientes = response.data.map(p => new Cliente(p))
                    this.clientes = clientes.reverse()
                })
                .catch( error => {
                    console.log(error)
                })
        },
        data(data) {
            return converterData.dataIso(data) ;
        }
    },
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

</style>