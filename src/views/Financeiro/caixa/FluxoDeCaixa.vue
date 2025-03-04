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

                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'FluxoDeCaixa',
    data() {
        return {
            Button    
        }
    },
    components: {
        
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