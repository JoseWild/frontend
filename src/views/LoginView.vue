<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
      <Inputview 
        label="E-mail" 
        placeholder="exemplo@seudominio.com" 
      />
      <Inputview 
        type="password"
        label="Senha" 
        placeholder="123456" 
      />
      <ButtonView 
        value="Entrar" 
        :callback="login" 
      />
    </div>
  </div>
</template>

<script>
import Inputview from '@/components/input/Inputview.vue';
import ButtonView from '@/components/button/ButtonView.vue';

export default {
    name: 'LoginView',
    components: {
        Inputview,
        ButtonView,
    },
    methods: {
        login() {
            this.$router.push({name: 'Dashboard'})
        }
    }
}
</script>

<style scoped>
    .box-login {
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        margin-top: 70px;
        padding: 30px;
    }

    .logo {
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;
    }
</style>