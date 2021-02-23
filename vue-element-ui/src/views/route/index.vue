<template>
    <div class='app-container'>
        <h2>Route</h2>
        <input type="button" value="登录" @click="iSubmit"><br>
        <el-button @click="routeTo('/route/route/foo')">foo</el-button>
        <el-button @click="routeTo('/route/route/bar')">bar</el-button>
        <router-view />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        iSubmit(){
            sessionStorage.setItem('isLogin',true);
        },
        routeTo(path){
            this.$router.push({path:path});
        }
    }
}
</script>

<style scoped>
.router-link-active {
    background-color: aquamarine;
}
</style>
