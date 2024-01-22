<template>
  <div>
    <h1>{{ mensagem }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ClientesView',
  data(){
     return{
      mensagem: 'Estou na tela de Clientes !!!'
     }
  } 
}
</script>


<style scoped>
 h1 {
  color: red;
 }
</style>