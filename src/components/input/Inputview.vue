<template>
  <div>
    <label for="">{{ label }}</label>
    <br>
    <input 
      :type="type" 
      :placeholder="placeHolder"
    >
  </div>
</template>

<script>
export default {
    name: 'InputView',
    props: {
        label: { type: String, require, default: "" },
        placeHolder: {type: String, default: ""},
        type: {type: String, default: 'text'},
    },
    data(){
        return{
        }
    }    
}
</script>

<style scoped>
    label {
        display:inline-flex;
        text-align: left;
    }
    input {
        width:  100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ddd;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>
