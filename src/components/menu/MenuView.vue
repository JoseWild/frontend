<template>
  <ul class="menu">
    <li><a @click="() => $router.push({path:'/'})">Dashboard</a></li>
    <li><a @click="() => $router.push({path:'/clientes'})">Clientes</a></li>
    <li><a @click="() => $router.push({path:'/produtos'})">Produtos</a></li>
    <li><a @click="() => $router.push({path:'/login'})">Sair</a></li>
  </ul>
</template>


<style scoped>
ul {
    list-style-type: none;
    margin:  0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);
}

li {
    float: left;
}
li:first-child {
    margin-left: 40px;
}
li:last-child {
    float: right;
    margin-right:  10px;
}

ul.menu li a {
    display: block;
    color: #fff;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
}
li a:hover{
    background-color: var(--cor-secundaria);
    cursor: pointer;
}
</style>
