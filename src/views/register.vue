<template>
    <div class="register-wrap w750">
        <div class="register-title">
            <h2>新用户注册</h2>    
        </div>
        <div class="input-wrap">
            <el-input v-model="formData.username" placeholder="用户名"></el-input>
        </div>
        <div class="input-wrap">
            <el-input v-model="formData.email" placeholder="邮箱"></el-input>
        </div>
        <div class="input-wrap">
            <el-input v-model="formData.password" placeholder="密码"></el-input>
        </div>
        <div class="register">
            <el-button type="primary" class="register-button">
                注册
            </el-button>  
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData:{
                    username: '',
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .register-wrap {
        padding-top: 30px;
        padding-bottom: 50px;
        width: 750px;
        background: #fff;
        margin: 0 auto;
        margin-top: 100px;
        text-align: center;
        border-radius: 4px;

        .register-title {
            h2{
                color: #333;
                font-weight: 400; 
            }
        }

        .input-wrap {
            width: 390px;
            margin: 30px auto 0;
        }

        .register {
            width: 390px;
            margin: 30px auto 0;
            
            .register-button{
                width: 100%;
            }
        }
    }
</style>