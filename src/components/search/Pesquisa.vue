<template>
  <input-view v-model="searched" class="input-pesq" placeholder="Pesquisa ..." @keyup="highlightUser" />
</template>

<script setup>
import { ref } from 'vue'
import InputView from '../input/Inputview.vue';

const searched = ref('');
const emit = defineEmits(['highlight-user'])

function highlightUser() {
  emit('highlight-user', searched.value)
}

</script>

<style scoped>
.input-pesq {
  display: flex;
}

/*.button-search {
    margin-left: 5px;
    border-radius: 5px;
  } */
</style>