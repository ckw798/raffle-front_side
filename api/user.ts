// 封装了用户相关的api

// 声明登录表单格式


export interface UserInfo {
    name: string;
    phone_number: string;
    address: string;
}


export interface LoginForm {
    username: string,
    password: string
};

// 声明登录返回数据格式

export interface LoginResponseData {
    name: string;
    student_number: string;
    access_token: string;
    refresh_token: string;
}


// 封装登录api

export async function login({ username, password }: LoginForm) {
    return await $fetch('/frontpage/token', {
        method: 'POST',
        body: {
            username,
            password
        }
    }).then(
        (data) => {

            return (data as any) as (LoginResponseData);
        }
    )
}



// 封装获取用户信息api

export async function get_user() {
    return await $fetch('/frontpage/user',
        { method: 'GET' })
        .then(
            (data) => {
                return (data as any) as (UserInfo)
            }
        )
}

export async function put_user(phone_number: string, address: string) {
    return await $fetch('/frontpage/user',
        {
            method: 'POST',
            params: {
                phone_number: phone_number,
                address: address
            }
        })
        .then(
            (data) => {
                return data;
            }
        )
}