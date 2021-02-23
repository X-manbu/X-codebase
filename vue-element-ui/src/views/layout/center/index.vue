<template>
    <div class='app-container'>
        <div class="box-wrapper">
            <div class="box">你好啊</div>
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
    /* 知道元素宽高 垂直居中 */
    /* .box{
        width: 200px;
        height: 200px;
        background: aquamarine;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -100px;
    } */

    /* 不知道宽高 */
    .box{
        background: aquamarine;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    /* flex布局  需要知道宽高*/
    /* .box-wrapper{
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    /* 行内元素属性 */
    /* .box-wrapper{
        display: inline;
        text-align: center;
        height: 40px;
        line-height: 40px;
    } */
</style>
