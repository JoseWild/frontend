<template>
    <div class="box-login">
        <div class="logo">
            <h2>{{ mensagem }}</h2>
        </div>
        <Input label="E-mail" placeHolder="exemplo@gmail.com"></Input>
        <Input label="Senha" placeHolder="12345" type="password"></Input>
        <Button value="Entrar" :callback="login"></Button>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
    name: 'Login',
    components: {
        Input,
        Button
    },
    data() {
        return {
            mensagem: 'Login'
        }
    },
    methods: {
        login() {
            this.$router.push({ name: 'Home' })
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
    border-radius: 5px;
}

.logo {
    text-align: center;
    color: var(--cor-primaria);
    padding-bottom: 30px;
    font-size: 25px;
}
</style>