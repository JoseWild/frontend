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

    <div class="row row2">
        <div class="col-sm-2">
            <label for="contato">Contato</label>
            <input type="text" id="contato" class="form-control">
        </div>

        <div class="col-sm-2">
            <label for="cargo">Cargo</label>
            <input type="text" id="cargo" class="form-control">
        </div>

        <div class="col-sm-2">
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Contato</th>
                        <th>Cargo</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
            </table>
        </div>    
    </div>
  </div>
</template>

<script>
export default {
    name: 'Contato',
    data() {
        return {
            cadastro: true 
        }
    },
    methods: {
        sairTela() {
            this.$router.push({name: 'CadastrarCliente'})
        }
    }

}
</script>

<style scooped>
.row2 {
    justify-content: center;
}

.col-sm-6 {
    justify-content: center;
}

</style>