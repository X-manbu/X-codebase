<template>
    <div class='app-container'>
        <h1>Hello router!</h1>
        <p>
            <router-link to="/foo">Go to Foo</router-link> |
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    created(){
        this.getNum().then(res=>{
            console.log(res);
        })
    },
    methods:{
        async getNum(){
            return "你好！"
        }
    }
}
</script>

<style scoped>
</style>
