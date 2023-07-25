// 封装了用户相关的api

// 声明登录表单格式

export interface LoginForm {
    username:string,
    password:string
};

// 声明登录返回数据格式

export interface LoginResponseData {
    username:string,
    userId:string,
    accessToken:string,
    refreshToken:string
}


// 封装登录api

export async function login({username,password}:LoginForm) {
    return await $fetch('/login',{
        method:'POST',
        body:{
            username,
            password
        }
    }).then(
        (data) => {
            return data as any as LoginResponseData
        }
    )
}

