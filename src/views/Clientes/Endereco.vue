<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="sairTela">Sair</button>
            <button class="btn btn-primary float-end bt-sm mr-2" type="button" @click="salvar">Salvar</button>
            <h1 class="titulo">{{ cadastro ? "Adicionar" : "Alterar" }} Endereço</h1>
            <hr class="total">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-3">
            <label for="cep">CEP</label>
            <input type="text" id="cep" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-10">
            <label for="endereco">Endereço</label>
            <input type="text" id="endereco" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-5">
            <label for="bairro">Bairro</label>
            <input type="text" id="bairro" class="form-control">
        </div>

        <div class="col-sm-5">
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-1">
            <label for="estado">UF</label>
            <input type="text" id="estado" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>

            </table>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Endereco',
    data() {
        return {
            cadastro: true
        }
    },
    methods: {
        sairTela() {
            this.$router.push({ name: 'CadastrarCliente'})
        }
    }

}
</script>

<style>

</style>