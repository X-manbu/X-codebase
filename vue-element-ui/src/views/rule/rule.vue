<template>
  <div>
    <el-form :model="formParams" :rules="paramsRules" ref="ruleCreate">
      <el-form-item label="类型" prop="type">
          <el-input v-model="formParams.type"></el-input>
      </el-form-item>

      <el-form-item label="型号" prop="num">
          <el-input v-model="formParams.num"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submit_form('ruleCreate')">提交表单</el-button>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data(){
    return {
      // 产品参数
      formParams: {
        type: '',
        num:'',
      },
      // 产品参数 验证规则
      paramsRules: {
        type: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
        ],
        num: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submit_form(formName){
      this.$refs[formName].validate((valid) => {
         if (valid) {
           alert('提交成功');
           console.log('提交成功');
         } else {
           console.log('提交失败');
           return false;
         }
       });
    }
  }
}
</script>
