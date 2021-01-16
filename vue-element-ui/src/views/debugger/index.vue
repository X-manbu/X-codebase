<template>
  <div>
      <button @click="btn('你好啊')">Hi</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        btn(value){
            for (let i = 0; i < 10; i++) {
                console.log(i);
            }
        },
    }
}
</script>

<style>

</style>