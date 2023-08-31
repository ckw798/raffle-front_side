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
    <div class="login-ct" >
        <div class="center-ct">
            <el-avatar :src="logo_url" class="login-logo" />
        </div>
        <div class="card-ct">
            <div class="center-ct">
                <el-form :model="loginForm" :rules="rules">

                    <el-form-item prop="username">
                        <el-image :src='username_url' class="login-img" />
                        <el-input type="text" v-model="loginForm.username" clearable class="el_input"
                            ></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-image :src="password_url" class="login-img" />
                        <el-input type="password"  class="el_input" clearable show-password required
                            v-model="loginForm.password"></el-input>
                    </el-form-item>

                </el-form>
            </div>
            <div class="center-ct pt-5">s
                <el-button round color="#ffd150" @click="login(loginForm)" size="large" class="login-bt" >
                    <div class="text-xl login-text font-semibold">登   陆</div>
                </el-button>
            </div>
    </div>
    </div>
</template>

<style scoped>
.el_input {
    padding-left: 2rem;
    width: 16.5rem;
    border:0;
    outline: 0;
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


.login-ct{
padding-top: 7rem;
}

.login-text{
    color: #3c0d9c;
}

.login-bt{
    width: 7rem;
    height: 2.5rem;
}

</style>

<style>
.el-input__wrapper{
    border: none;
    outline: none;
    background-color: #8e54ff;
    color: #8e54ff;
    border-radius:0.8rem;
    box-shadow: none;
}


</style>

