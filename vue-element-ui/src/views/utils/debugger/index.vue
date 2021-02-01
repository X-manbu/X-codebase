<template>
  <div class="app-container">
      <!-- <div>{{ counter.count }}</div> -->
      <!-- <button @click="de()">-</button>
      <button @click="add()">+</button> -->
      <el-input v-model="input" placeholder=""></el-input>
  </div>
</template>

<script>
import { store } from '@/store/myStore'
export default {
    data(){
        return{
            counter:store.state,
            input:''
        }
    },
    watch:{
        input(val){
            console.log('监听的数据');
            console.log(val);
        },
    },
    methods:{
        add(){
            store.addCountAction();
        },
        de(){
            store.downCountAction();
        }
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