<template>
  <div>
    <h1>{{ mensagem }}</h1>
  </div>
</template>

<script>
export default {
    name: 'DashboardView',
    data(){
        return{
            mensagem: 'Estou na tela de Dashboard !!!'
        }
    } 
}
</script>


<style scoped>
 h1 {
  color: red;
 }
</style>