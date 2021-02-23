<template>
    <div class='app-container'>
        <div id="contetn">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
}
</script>

<style scoped>
.content{
    width: 100%;
    height: 500px;
    background: cyan;
}

.left{
    height: 500px;
    width: 100%;
    margin-left: -100px;
    background: darkorange;
}
.right{
    height: 500px;
    width: 100px;
    background: darkturquoise;
}
</style>
