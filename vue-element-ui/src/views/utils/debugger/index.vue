<template>
  <div class="app-container">
      <el-input v-model="input" placeholder=""></el-input>
      <div class="bg bg1"></div>
      <div>300</div>
      <div class="bg bg2"></div>
      <div>600</div>
      <div class="bg bg3"></div>
      <div>900</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            input:''
        }
    },
    watch:{
        input(val){
            console.log('监听的数据');
            console.log(val);
        },
    }
}
</script>

<style>
    .bg{
        height: 300px;
        width: 100%;
    }
    .bg1{
        background-color: aquamarine;
    }
    .bg2{
        background-color:bisque;
    }
    .bg3{
        background-color: saddlebrown;
    }
</style>