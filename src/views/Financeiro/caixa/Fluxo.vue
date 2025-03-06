<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="sair">Sair</button>
                <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="salvar">Salvar</button>
                <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Produto</h1>
                <hr class="total">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <label for="">ID</label>
                <input v-model="fluxo.flux_id" type="text" class="form-control" disabled>
            </div>
            <div class="col-sm-2">
                <label for="">Data Cadastro</label>
                <input v-model="fluxo.flux_datacad" type="date" class="form-control">
            </div>
            <div class="col-sm-4">
                <Label>Tipo Fluxo</Label><br>
                <select v-model.trim="fluxo.flux_tipo" name="" id="" class="form-control"> 
                    <option value=""></option>
                    <option value="ENTRADA">ENTRADA</option>
                    <option value="SAIDA">SAIDA</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label for="">Lançamentos</label>
                <input v-model.trim="fluxo.flux_categoria" class="form-control" type="text">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label for="">Complemento</label>
                <input v-model.trim="fluxo.flux_complemento" class="form-control" type="text">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <label for="">Valor</label>
                <input v-model.trim="fluxo.flux_valor" class="form-control" type="text">
            </div>
        </div>

    </div>
</template>

<script>
import fluxoControl from '@/controllers/fluxo-control';
import Fluxo from '@/models/fluxo-model';
import conversorData from '@/util/conversorData';

export default {
    name: 'Fluxo',
    data() {
        return {
            fluxo: new Fluxo(),
            cadastro: true
        }    
    },
    mounted() {
        let id = this.$route.params.id
        if (!id) return;

        this.cadastro = false;
        this.obterPorID(id);
    },
    methods: {
        obterPorID(id) {
            fluxoControl.obterPorID(id)
            .then(response => {
                this.fluxo = new Fluxo(response.data)
            })
        },
        cadastrar() {
            if (! this.fluxo.validarCadastro()) {
                alert('Para efetuar o lançamento favor preencher todos os campos, neste formulário, ele são obrigatorio !!!1')
                return 
            }

            fluxoControl.adicionar(this.fluxo)
            .then(() => {
                alert(`${this.fluxo.flux_tipo} lançado com sucesso !!!`)
                this.fluxo = new Fluxo() ;
            })
        },
        alterar() {
            if (! this.fluxo.atualizarFluxo()) {
                alert('Para alterar um lançamento é necessario que todos os campos sejam preenchidos !!!')
                return 
            }


            fluxoControl.alterar(this.fluxo)
            .then(() => {
                alert('Fluxo alterado com sucesso !!!!')
                this.$router.push({name: 'FluxoDeCaixa'})
            }) 
        },
        data(data) {
            return conversorData.MaskDataIso(data)
        },
        sair() {
            this.$router.push({name: 'FluxoDeCaixa'})
        },
        salvar() {
            (this.cadastro) ? this.cadastrar() : this.alterar() ;

        }
    }

}
</script>

<style scoped>

</style>