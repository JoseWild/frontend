<template>
    <button @click="callback">{{ value }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        value: { type: String },
        callback: { type: Function, default: () => { } }

    },
}
</script>

<style scoped>
Button {
    width: 100%;
    background-color: var(--cor-primaria);
    color: #fff;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

Button:hover {
    background-color: var(--cor-secundaria);
}
</style>