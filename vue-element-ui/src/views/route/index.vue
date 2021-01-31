<template>
    <div class='app-container'>
        <h2>Route</h2>
        <input type="button" value="登录" @click="iSubmit"><br>
        <router-link to="/route/user">User</router-link> |
        <router-link to="/table/paination">Paination</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input:''
        }
    },
    methods:{
        toUser(){
            this.$router.push({
                name:'User',
                params: { userId: '123' }
            })
        },
        iSubmit(){
            sessionStorage.setItem('isLogin',true);
        }
    }
}
</script>

<style scoped>
.router-link-active {
    background-color: aquamarine;
}
</style>
