<template>
  <div>
    <nav>
      <Menu v-if="$router.currentRoute.value.name != 'login'"></Menu>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: {
    Menu
  }
}

</script>

<style>
:root {
  --cor-primaria: #2E7D32;
  --cor-secundaria: #66BB6A;
}


* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: nome;
  box-sizing: border-box;
}

hr {
  margin: 0;
}

.container {
  margin-top: 15px;
}

.titulo {
  font-weight: 500;

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

.mr-2 {
  margin: 5px;
}

input, textarea {
  text-transform:uppercase
}
</style>
