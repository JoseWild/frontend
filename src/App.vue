<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">About</router-link>
  </nav> -->
  <div id="app">
    <MenuView v-if="this.$route.name != 'Login'"></MenuView>
    <router-view/>
  </div>
</template>

<script>
import MenuView from '@/components/menu/MenuView.vue';

export default {
    components: {
        MenuView
    }  
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  :root{
    --cor-primaria: #388E3C;
    --cor-secundaria: #A5D6A7;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  .container{
    margin-top: 15px;
  }

  hr {
    margin: 0;
  }

  .sub-container {
    margin-top: 15px;
  }

  .titulo {
    font-weight: 600;
    color: var(--cor-primaria);
    font-size: 25px;
    
  }

  .btn-primary,
  .btn-primary :active,
  .btn-primary :focus,
  .btn-primary :focus-visible,
  .btn-primary :visited,
  .btn-primary :not(:disabled):not(.disable) :active {
    color: #fff;
    background-color: var(--cor-primaria);
    border: var(--cor-primaria);
    outline: none;
    box-shadow: none;
  }

  .btn-primary:hover {
      color: #fff;
      background-color: var(--cor-secundaria);
      border-color: var(--cor-secundaria);
  }
  
</style>