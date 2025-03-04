<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h2>Fluxo de Caixa</h2>
        </div>
        <div class="col-sm-2">
            <Button :callback="incluirEntrada" value="Adicionar"></Button>
        </div>
    </div>
    
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Complemento</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="fluxo in Fluxo" :key="fluxo.flux_id">
                        <td>{{ fluxo.flux_datacad }}</td>
                        <td>{{ fluxo.flux_tipo }}</td>
                        <td>{{ fluxo.flux_categoria }}</td>
                        <td>{{ fluxo.flux_complemento }}</td>
                        <td>{{ fluxo.flux_valor }}</td>
                        <td>
                            <span @click="alterar(fluxo)"><i class="fa-solid fa-pencil icones"></i></span>
                            <span @click="excluir(fluxo)"><i class="fa-regular fa-trash-can icones"></i></span>
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
import fluxoControl from '@/controllers/fluxo-control';
import Fluxo from '@/models/fluxo-model';



export default {
    name: 'FluxoDeCaixa',
    mounted() {
        this.obtertodos()
    },
    data() {
        return {
            Button,
            Fluxos: []    
        }
    },
    components: {
        
    },
    methods: {
        obtertodos() {
            fluxoControl.obterTodos()
            .then ( response => { this.Fluxos = response.data.map(f => new Fluxo(f))})
            .catch(error => {console.log(error)})
        },
        cadastrar() {

        },
        alterar(fluxo) {
            this.$router.push({name: 'AlterarFluxo', paramas: ({id: fluxo.flux_id})})
        },
        excluir() {

        }
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


</style>