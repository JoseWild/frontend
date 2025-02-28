<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>{{ mensagem }}</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2">
                <Button :callback="incluirCliente" value="Adicionar"></Button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Data Cadastro</th>
                            <th>Data Nascimento</th>
                            <th>Tipo Pessoa</th>
                            <th>Razão / Nome </th>
                            <th>CPF / CNPJ</th>
                            <th>INSCRIÇÃO / C.I</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="client in clientes" :key="client.cli_id">
                            <td>{{ Data(client.cli_datacad) }}</td>
                            <td>{{ Data(client.cli_datanasc) }}</td>
                            <td>{{ client.cli_pessoa }}</td>
                            <td>{{ client.cli_nome }}</td>
                            <td>{{ client.cli_cpfcnpj }}</td>
                            <td>{{ client.cli_ciinsc }}</td>
                            <td>
                                <span @click="alterarCliente(client)"><i class="fa-solid fa-pencil icones"></i></span>
                                <span @click="excluirCliente(client)"><i class="fa-regular fa-trash-can icones"></i></span>
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
import clientesControl from '@/controllers/clientes-control';
import Cliente from '@/models/cliente-model';
import conversorData from '@/util/conversorData';


export default {
    name: 'Clientes',
    data() {
        return {
            mensagem: 'Lista de Clientes',
            clientes: []
        }
    },
    components:{
        Button
    },  
    methods: {
        obterTodosClientes() {
            clientesControl.obterTodos()
            .then(response => {
                this.clientes = response.data.map(C => new Cliente(C)) ;
            })
            .catch(error => {
                console.log(error)
            })
        },
        alterarCliente(cliente) {
            this.$router.push({ name: 'AlterarCliente', params: {id: cliente.cli_id}})
        },
        excluirCliente() {

        },
        Data(data) {
            return conversorData.MaskDataIso(data);
        },
        incluirCliente() {
            this.$router.push({ name: 'CadastrarCliente' });
        }
    },
    mounted() {
        this.obterTodosClientes();
    }

}
</script>

<style scoped>
.container {
    margin-top: 10px;
}

.icones {
    color: var(--cor-primaria);
    cursor: pointer;
    margin: 5px;
    height: 15px;
}

</style>