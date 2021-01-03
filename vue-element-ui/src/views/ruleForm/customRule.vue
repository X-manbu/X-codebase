<template>
  <div>
    <!-- hide-required-asterisk 关闭必填字段的星号 -->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="right" hide-required-asterisk="false" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass" inline-message="true">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- 数字类型 需要在 v-model 处加上 .number -->
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- submitForm点击事件中传递的是 el-form中的 ref 参数 -->
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {

      let validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      }

      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'))
          }
        }
        callback();
      }

      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass1, trigger: 'blur' } 
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' } 
          ],
          age: [
            { required:true, message:'年龄不能为空', trigger:'blur'},
            { type:'number', message:'年龄必须为数字值', trigger:'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功');
          } else {
            console.log('验证失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        //重置表单
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>