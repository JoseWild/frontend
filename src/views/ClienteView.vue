<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button 
          class="btn btn-primary float-end bt-sm mr-2"  
          type="button"
          @click="sair"
        >Sair</button>
        <button  
          class="btn btn-primary float-end bt-sm mr-2"
          type="button"
          @click="salvar"
        >Salvar</button>
        <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Clientes</h1>
        <hr class="total">
      </div>
    </div>
    <div class="row">
      <input 
        id="id"
        v-model="cliente.cli_id" 
        type="hidden" 
      >
      <div class="col-sm-3">
        <div class="form-group">
          <label for="data">Data Cad</label>
          <input 
            id="data" 
            v-model="cliente.cli_datacad"
            type="date"  
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="data">Data Nasc</label>
          <input 
            id="data"
            v-model="cliente.cli_datanasc"
            type="date" 
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="pessoa">Pessoa</label>
          <input 
            id="pessoa"
            v-model="cliente.cli_pessoa"
            type="text" 
            class="form-control"
          >
        </div>
      </div>
    </div>  
    <div class="col-sm-10">
      <div class="form-group">
        <label 
          v-if="cliente.cli_pessoa =='JURIDICA'" 
          for="nome"
        >Razão social</label>
        <label 
          v-esle 
          for="nome"
        >Nome</label>
        <input 
          id="nome"
          v-model="cliente.cli_nome"
          type="text" 
          class="form-control"
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <div class="form-group">
          <label 
            v-if="cliente.cli_pessoa =='JURIDICA'"
            for="cpfcnpj" 
          >CNPJ</label>
          <label 
            v-else
            for="cpfcnpj"
          >CPF</label>
          <input 
            id="cpfcnpj"
            v-model="cliente.cli_cpfcnpj"
            type="text"   
            class="form-control"
          >
        </div>
      </div>
      <div class="col-sm-5">
        <div class="form-group">
          <label 
            v-if="cliente.cli_pessoa =='JURIDICA'"
            for="cli_ciinsc" 
          >Inscrição</label>
          <label 
            v-else
            for="cli_ciinsc"
          >C.I</label>
          <input 
            id="cli_ciinsc"
            v-model="cliente.cli_ciinsc"
            type="text" 
            class="form-control"
          >
        </div>
      </div>
    </div>    
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Contato</th>
              <th scope="col">Telefone</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
        </table>
      </div>  
    </div>
    <div class="row">
      <div class="col-sm-4">
        <button 
          class="btn btn-primary bt-sm mr-2" 
          @click="adicionarTelefones(id)"  
        >Adicionar Telefones</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Cep</th>
              <th>Rua</th>
              <th>Complemento</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Uf</th>
            </tr>
          </thead>
        </table>  
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <button 
          class="btn btn-primary bt-sm mr-2"
          @click="AdicionarEnderecos()"
        >Adicionar endereços</button>
      </div>
    </div>
  </div>
</template>


<script>
import Cliente from '@/models/Cliente';
import clienteService from '@/services/cliente-service';
import ClientTelefones from '@/models/ClienteTelefones'
import ClientTelefones_Service from '@/services/clienttelefones_service'
import ClientEnderecos from '@/models/ClienteEnderecos'
import ClientEnderecos_service from '@/services/clientenderecos_service'
import converterData from '@/utils/conversor-data';



export default {
    name: 'Clients',
    data() {
        return {
            cliente: new Cliente(),
            clieTel: new ClientTelefones(),
            clieEnd: new ClientEnderecos(),
            cadastro: true,
        }
    },

    mounted() {
        let id = this.$route.params.id
        if (!id) return;
    
        this.cadastro = false ;
        this.obterClienteId(id) ;
    },

    methods: {
        adicionarTelefones() {
            this.$router.push({name: 'AdicionarTelefones'})   
        },
        AdicionarEnderecos(){
            this.$router.push({name: 'AdicionarEnderecos'})
        },
        obterClienteId(id){
            clienteService.obterPorId(id)
                .then(response => {
                    this.cliente = new Cliente(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        cadastrar(){
            this.cliente.cli_datacad  = converterData.dataAmericana(this.cliente.cli_datacad) ;
            this.cliente.cli_datanasc = converterData.dataAmericana(this.cliente.cli_datanasc) ;
            if (!this.cliente.validarCadastro()){
                this.$swal({
                    icon: 'warning' ,
                    title: "Alguns campos são obrigatorios para cadastro !!!",
                    confirmButtonColor: '#388E3C'
                })
                return
            }
        
            clienteService.cadastrar(this.cliente) 
                .then(() => {
                    this.$swal({
                        icon: 'success',
                        title: "Cliente cadastrado com sucesso !!!",
                        confirmButtonColor: '#388E3C'
                    })
                    this.cliente = new Cliente();
                })  
                .catch(error => {
                    console.log(error)
                })
        },

        alterar() {
            this.cliente.cli_datacad  = converterData.dataAmericana(this.cliente.cli_datacad);
            this.cliente.cli_datanasc = converterData.dataAmericana(this.cliente.cli_datanasc);
            clienteService.alterar(this.cliente)
                .then(() => {
                    this.$swal({
                        icon: 'success',
                        title: 'Alteração realizada com sucesso !!!',
                        confirmButtonColor: '#388E3C',
                        Animation: true
                    })
                    this.$router.push({name: 'Clientes'})
                })
                .catch(error =>{
                    console.log(error)
                })
        },

        sair(){
            this.cliente = new Cliente();
            this.$router.push({name: 'Clientes'})
        },
        handleInput() {
            this.inputValue = this.inputValue.toUpperCase();
        },    
        converterData(){
            this.inputValue = converterData(this.inputValue);
        },
        salvar(){
            (this.cadastro) ? this.cadastrar() : this.alterar();
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
</style>@/services/clienttelefones_service