<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h2>{{ mensagem }}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <Button :callback="IncluirEmpresa" value="Adicionar"></Button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Razão</th>
                        <th>CNPJ</th>
                        <th>Inscrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <span @click="alterarProduto(item)"><i class="fa-solid fa-pencil icones"></i></span>
                            <span @click="excluirProduto(item)"><i class="fa-regular fa-trash-can icones"></i></span>
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


export default {
    name: 'Empresas',
    data() {
        return {
            mensagem: 'Empresas'
        }
    },
    components: {
        Button
    }

}
</script>

<style>

</style>