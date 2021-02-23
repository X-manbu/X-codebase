<template>
  <div class="app-container">
      <h1>调试</h1>
      <el-divider></el-divider>
  </div>
</template>

<script>
export default {
    data(){
        return{
          
        }
    },
    created(){
        // console.log(process.env.VUE_APP_BASE_API);
        console.log(this.$root.foo);
    },
    mounted(){
        
    },
    methods:{
       
    }
}
</script>

<style>
   
</style>