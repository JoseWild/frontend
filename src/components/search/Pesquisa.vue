<template>
  <Input v-model="searched" class="input-pesq" placeholder="Pesquisa ..." @keyup="highlightUser" />
</template>

<script setup>

import { defineEmits, ref } from 'vue'
import Input from '../Input.vue';

const searched = ref('');
const emit = defineEmits(['highlight-user'])

function highlightUser() {
  emit('highlight-user', searched.value)
}

</script>

<style scoped>
  Input {
    background: white url("../../assets/search-solid.svg") no-repeat 10px center; 
    color: var(--cor-primaria);
  }

/*.button-search {
    margin-left: 5px;
    border-radius: 5px;
  } */
</style>