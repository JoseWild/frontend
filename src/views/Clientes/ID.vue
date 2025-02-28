<template>
   <h1>{{ UserID }}</h1>
</template>

<script>
export default {
    name: 'ID',
    data() {
        return {
            UserID: null
        }
    },
    mounted: {
        mounted() {
        let id = this.$route.params.id
        //let CPF = this.$route.params.CPF
        alert(id)
        if (!id) return;
        this.cadastro = false;
        this.UserID = id ;
    },
    }
}
</script>

<style>

</style>