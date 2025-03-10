<template>
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li class="menu-drop"><a href="#">Cadastro</a>
                <div class="drop">
                    <router-link to="/empresas">Empresas</router-link>
                    <router-link to="/clientes">Clientes</router-link>
                    <router-link to="#">Fornecedores</router-link>
                    <router-link to="/produtos">Produtos</router-link>
                    <router-link to="#">Desejos</router-link>
                </div>
            </li>
            <li class="menu-drop"><a href="#">O.S</a>
                <div class="drop">
                    <router-link to="/os">Entrada</router-link>
                    <router-link to="/os">Entrada</router-link>
                    <router-link to="/os">Entrada</router-link>
                    <router-link to="/os">Entrada</router-link>
                </div>
            </li>
            <li class="menu-drop"><a href="#">Financeiro</a>
                <div class="drop">
                    <router-link to="#">Entradas</router-link>
                    <router-link to="#">Saidas</router-link>
                    <router-link to="/fluxodecaixa">Fluxo</router-link>
                </div>
            </li>
            <li><router-link to="/">Sair</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style scoped>
ul {
    display: flex;
    background-color: var(--cor-primaria);
    align-items: center;
    justify-content: center;

}

li {
    float: left;
}

li:first-child {
    margin-left: 40px;
}

li:last-child {
    float: right;
    margin-right: 10px;
}

ul li a {
    display: block;
    color: #fff;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
    transition: .5s;
}

ul li a:hover {
    background-color: var(--cor-secundaria);
}

ul {
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-drop {
    position: relative;
}

.menu-drop .drop {
    position: absolute;
    background-color: var(--cor-primaria);
    width: 100%;
    height: 0;
    overflow: hidden;
}

.menu-drop:hover .drop {
    height: auto;
}

ul li:last-child {
    float: right;
    margin-right: 10px;
}
</style>