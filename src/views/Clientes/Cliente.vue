<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="sair">Sair</button>
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="salvar">Salvar</button>
                <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Cliente</h1>
                <hr class="total">
            </div>
        </div>    
        <div class="row">
            <div class="col-sm-2">
                <label for="id">ID</label>
                <input type="text" v-model="cliente.cli_id" id="id" disabled class="form-control">
            </div>
            <div class="col-sm-3">
                <label for="datacad">Data Cadastro</label>
                <input type="date" v-model="cliente.cli_datacad" id="datacad" class="form-control">
            </div>

            <div class="col-sm-3">
                <label for="datanasc">Data Natalidade</label>
                <input type="date" v-model="cliente.cli_datanasc" id="datanasc" class="form-control">
            </div>

            <div class="col-sm-2">
                <label for="pessoa">Tipo Pessoa</label>
                <input type="text" v-model="cliente.cli_pessoa" id="pessoa" class="form-control">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-10">
                <label for="nome">Razão Social / Nome </label>
                <input type="text" v-model="cliente.cli_nome" id="nome" class="form-control">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-5">
                <label for="cpfcnpj">CPF / CNPJ</label>
                <input type="text" v-model="cliente.cli_cpfcnpj" id="cpfcnpj" class="form-control">
            </div>
        
            <div class="col-sm-5">
                <label for="ciinsc">C.I / Inscrição</label>
                <input type="text" v-model="cliente.cli_ciinsc" id="ciinsc" class="form-control">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <hr>
            </div>
            <div class="col-sm-2">
                <Button :callback="enderecoCliente" value="Endereço"></Button>
            </div>
            <div class="col-sm-2">
                <Button :callback="contatoCliente" value="Contatos"></Button>
            </div>
            
        </div>

    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import clientesControl from '@/controllers/clientes-control';
import Cliente from '@/models/cliente-model';

export default {
    name: 'Cliente',
    data() {
        return {
           cliente: new Cliente(),
           cadastro: true,
           UserID: null,
        }
    },
    components: {
        Button
    },
    mounted() {
        let id = this.$route.params.id
        //let CPF = this.$route.params.CPF
        if (!id) return;
        this.cadastro = false;
        this.obterClienteId(id);
    },
    methods: {
        obterClienteId(id){
            clientesControl.obterPorID(id)
            .then(response => {
                this.cliente = new Cliente(response.data) ;
            })
            .catch(error => {
                console.log(error)
            })
        },

        cadastrarCliente() {
            // if (! this.cliente.validarCadastro()){
                //     alert('É preciso preencher os campos corretamente !!!')
                //     return
                // }
                
                clientesControl.adicionar(this.cliente)
                .then(() => {
                alert('Cliente cadastrado com sucesso !!!!') 
                
                this.obterID()
            })
        },

        salvar() {
           (this.cadastro) ? this.cadastrarCliente() : this.alterarCliente() ; 
        },

        enderecoCliente() {
            this.$router.push({ name: 'EnderecoCliente'})
        },

        contatoCliente() {
            this.$router.push({ name: 'ContatoCliente'})
        },

        alterarCliente() {

        },

        sair() {
            this.$router.push({ name: 'Clientes'})
        },

        obterID() {
            clientesControl.obterID()
            alert(this.$route.params.id )
        }       
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