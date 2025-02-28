<template>
    <div>
        <label for="">{{ label }}</label>
        <br>
        <input :type="type" :placeholder="placeHolder">
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: { type: String },
        placeHolder: { type: String },
        type: { type: String, default: 'text' }
    },
    data() {
        return {

        }
    }

}
</script>

<style scoped>
input {
    width: 100%;
    display: inline-block;
    padding: 12px 20px;
    margin: 8px 0px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 5px;
    box-sizing: border-box;
}
</style>