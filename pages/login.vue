<script setup lang="ts">
import logo_url from "~/assets/logo.png"
import username_url from '~/assets/username.png'
import password_url from '~/assets/password.png'
import {login,LoginForm} from '~/api/user'
const loginForm = ref<LoginForm>({
    username:'',
    password:''
})


const rules = ref<Record<keyof LoginForm, any>>({
    username:[{ required: true, message: '用户名不能为空！',trigger:'blur'},
              {max:20,message:'长度不得超过20个字符',trigger:'blur'}
],
    password:[{ required: true, message: '密码不能为空！'},
              {min:8, max:16, message:'密码长度在8-16个字符之间',trigger:'blur'}
]
})
</script>


<template>
    <div class="login-ct" shadow>
        <div class="center-ct">
            <el-avatar :src="logo_url" class="login-logo" />
        </div>
        <ElCard shadow="always">
            <template #header>
                <div class="center-ct">Login</div>
            </template>
            <div class="center-ct">
                <el-form :model="loginForm" :rules="rules">

                    <el-form-item prop="username">
                        <el-image :src='username_url' class="login-img" />
                        <el-input type="text" v-model="loginForm.username" clearable class="el_input"
                            placeholder="请输入账号"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-image :src="password_url" class="login-img" />
                        <el-input type="password" placeholder="请输入密码" class="el_input" clearable show-password required
                            v-model="loginForm.password"></el-input>
                    </el-form-item>

                </el-form>
            </div>
            <div class="center-ct">
                <el-button round color="#ffd150" @click="login(loginForm)" size="large" class="login-bt" >
                    登录
                </el-button>
            </div>

        </ElCard>
    </div>
</template>

<style scoped>
.el_input {
    padding-left: 1rem;
    width: 15rem;
}

.login-img {
    width: 2rem;
    height: 2rem;
}

.login-logo {
    width: 8rem;
    height: 8rem;
    margin-bottom: 2rem;
}


.center-ct {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>