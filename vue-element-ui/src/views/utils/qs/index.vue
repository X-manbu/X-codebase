<template>
    <div>
        <div class="container">
            <el-input v-model="obj.name" style="width:200px;" placeholder="请输入名字"></el-input>
            <el-input v-model="obj.age" style="width:200px;" placeholder="请输入年龄"></el-input>
            <el-button type="primary" @click="btnClick">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{
                name:'',
                age:''
            },
            arrObj:{
                arr:['100','101','102']
            }
        }
    },
    methods:{
        btnClick(){
            let qsString = this.$qs.stringify(this.obj);
            let qsParse = this.$qs.parse(this.obj);
            console.log('--- 对象 ---');
            console.log(qsString);
            console.log(qsParse);
            let arrString = this.$qs.stringify(this.arrObj);
            let arrParse = this.$qs.parse(this.arrObj);
            console.log('--- 数组 ---');
            console.log(arrString);
            console.log(arrParse);

        }
    }
}
</script>

<style scoped>
    .container{
        margin: 20px;
    }
</style>