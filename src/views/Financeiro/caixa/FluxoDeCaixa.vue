<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h2>Fluxo de Caixa</h2>
            <hr>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-2">
            <Button :callback="incluir" value="Adicionar"></Button>
        </div>
        <div class="col-sm-4">
            <input v-model="search" type="text" class="form-control">
        </div>
        <!-- <div class="col-sm-1">
            <input v-model="dataInicial" type="date">
        </div>
        <div class="col-sm-1">
            <input v-model="dataFinal" type="date">
        </div> -->
        <div class="col-sm-4">
            <select v-model='selected'  class="mr-2">
                <option value="">Selecione..</option>
                <option>SAIDA</option>
                <option>ENTRADA</option>
            </select>
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
                    <tr v-for="flux in fluxofiltered" :key="flux.flux_id">
                        <td>{{ Data(flux.flux_datacad) }}</td> 
                        <td>{{ flux.flux_tipo }}</td>
                        <td>{{ flux.flux_categoria }}</td>
                        <td>{{ flux.flux_complemento }}</td>
                        <td>{{ flux.flux_valor }}</td>
                        <td>
                            <span @click="alterar(flux)"><i class="fa-solid fa-pencil icones"></i></span>
                            <span @click="excluir(flux)"><i class="fa-regular fa-trash-can icones"></i></span>
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
import conversoMonetario from '@/util/conversoMonetario';
import conversorData from '@/util/conversorData';





export default {
    name: 'FluxoDeCaixa',
    mounted() {
        this.obtertodos()
    },
    data() {
        return {
            fluxos: [],
            search: '',
            dataInicial: '',
            dataFinal: '',
            selected: '',
            options: [
                { value: null, text: 'Selecione...' },
                { value: null, text: 'ENTRADA'},
                { value: null, text: 'SAIDA'}
            ]
        }
    },
    components: {
        Button
    },
    computed: {
        fluxofiltered() {
            let valores = []
            valores = this.fluxos.filter((flux) => {
                return (
                    flux.flux_categoria.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                    flux.flux_complemento.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                    // flux.flux_tipo.toLowerCase().indexOf(this.selected.toLowerCase()) > -1 
                )
            });

            valores = valores.filter((flux) => {
                if (this.selected === '' ) { return flux}

                return flux.flux_tipo === this.selected
            });

            return valores
        }    
        //     if (!this.dataInicial)
        //         return  this.flux;
        //         return  this.flux.filter((flux) => flux.flux_datacad >= this.dataInicial) 
        //                 this.flux.filter((flux) => flux.flux_datacad <= this.dataFinal )                             
        // }                
    },
    methods: {
        obtertodos() {
            fluxoControl.obterTodos()
            .then ( response => { this.fluxos = response.data.map(f => new Fluxo(f)) })
            .catch(error => {console.log(error)})
        },

        incluir() {
            this.$router.push({name: 'CadastrarFluxo'})
        },

        alterar(fluxo) {
            this.$router.push({name: 'AlterarFluxo', params: { id: fluxo.flux_id }})
        },

        excluir(fluxo) {
            fluxoControl.excluir(fluxo.flux_id)
            .then(() => { 
                let indice = this.fluxos.findIndex(f => f.id == fluxo.flux_id)
                this.fluxos.splice(indice, 1) 

                alert('Fluxo Excluido com sucesso !!!')
                this.$router.push({name: 'FluxoDeCaixa'})
            })
            .catch(error => {
                console.log(error)
            })
        },
        Data(data) {
            return conversorData.MaskDataIso(data)
        },
        Real(valor) {
            return conversoMonetario.MaskReal(valor);
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