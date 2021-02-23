<template>
    <div class='app-container'>
        <span class="close" @click="close"></span>
    </div>
</template>

<script>
export default {
    name: 'CloseBtn',
    data () {
        return {

        }
    },
    methods:{
        // 关闭当前页面
        close() {
            this.$router.push({ path: "/" });
        }
    }
}
</script>

<style scoped>
.app-container{
    position: relative;
    width: 300px;
    height: 300px;
    border: 2px solid lightgreen;
}
.close {
    color: #1e272e;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    font-size: 14px;
    top: 20px;
    right: 20px;
    position: absolute;
}
/* use cross as close button */
.close::before {
    content: "\2716";
}
</style>
