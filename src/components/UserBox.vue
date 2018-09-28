<template>
    <div class="right-box">
        <div class="login-box" v-if="!usermsg.username">
            <div class="item">
                <input type="text" placeholder="邮箱" v-model="email">
            </div>
            <div class="item">
                <input type="password" placeholder="密码" v-model="password" @keyup.enter="handleLogin">
            </div>
            <div class="item">
                <el-button type="primary" class="_el-btn" @click="handleLogin">登录</el-button>
            </div>
            <div class="item">
                <el-button class="_el-btn" @click="$router.push('/register')">注册</el-button>
            </div>
        </div>
        <div class="user-box" v-else>
            <div class="user-box-item user-icon">
                <img :src="usermsg.avatar" alt="">
            </div>
            <div class="name-item">
                萌新：{{usermsg.username}}
            </div>
            <div class="email-item">
                email：{{usermsg.email}}
            </div>
            <div>
                <el-button type="warning" style="width:100%; margin-top: 10px;" @click="handleLogout">退出登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import cookies from 'js-cookie'

    export default {
        data(){
            return {
                email: '484647110@qq.com',
                password: '954708486',
                usermsg: {
                    username: '',
                    email: '',
                    avatar: ''
                }
            }
        },
        methods: {
            handleLogin (){
                let params = {
                    email : this.email,
                    password: this.password
                }
                console.log(process.env.NODE_ENV);
                let basePath = process.env.NODE_ENV == 'development' ? '/api' : ''

                this.$axios.post('/login', params).then(res => {
                    if(res.data.code == 200){
                        this.usermsg = res.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
    .right-box {
        box-sizing: border-box;
        width: 360px;
        background: #fff;
        border-radius: 4px;
        padding: 21px 30px;
    }

    .item {
        margin-top: 30px;

        ._el-btn {
            width: 100%;
        }

        & > input {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #f1f1f1;
            border-radius: 4px;
            padding: 14px;
            outline: none;
        }
    }

    .user-box {
        padding-top: 30px;
        .user-icon {
            text-align: center;

            img {
                width: 100px;
                height: 100px;
            }
        }

        .name-item,.email-item {
            text-align: center;
            margin-top: 20px;
            font-size: 16px;
            color: #333;
            font-weight: 400;
            line-height: 36px;
        }
    }

    
</style>