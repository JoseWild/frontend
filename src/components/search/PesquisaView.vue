<template>
  <InputText 
    v-model="searched"
    class="p-inputtext-lg"
    placeholder="Pesquisa ..."
    @keyup="highlightUser"
  />
  <Button
    class="p-button-secondary p-button-lg button-search"
    icon="pi pi-search lg" 
    label="Pesquisar"
    @click="highlightUser"
  />
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue'

const searched = ref('') ;
const emit = defineEmits(['highlight-user']) 

function highlightUser(){
    emit('highlight-user', searched.value)
}

</script>

<style scoped>
.button-search{
   margin-left: 5px;
   border-radius: 5px;
}
</style>