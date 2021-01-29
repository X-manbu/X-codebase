<template>
    <div class='app-container'></div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    async created () {
        await setTimeout(()=>{
        console.log(1)
        },5000);
    },
    async mounted () {
        console.log(2)
    }
}
</script>

<style scoped>
</style>
