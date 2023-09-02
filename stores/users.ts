// 全局 User State 使用 Pinia 进行管理，参见：<https://pinia.vuejs.org/ssr/nuxt.html>

import { defineStore } from 'pinia';
import { login as apiLogin } from '~/api/user';
import type { LoginForm } from '~/api/user';

interface User {
    name: string;
    student_number: string;
    accessToken: string;
    refreshToken: string;
}

export const useUserStore = defineStore(
    'user',
    () => {
        const user = ref<User | null>(null);

        async function login(username: string, password: string): Promise<void>;
        async function login(opts: LoginForm): Promise<void>;
        async function login(
            optsOrUsername: LoginForm | string,
            mayBePassword?: string
        ): Promise<void> {
            let username: string;
            let password: string;
            if (typeof optsOrUsername !== 'string') {
                username = optsOrUsername.username;
                password = optsOrUsername.password;
            } else {
                username = optsOrUsername;
                password = mayBePassword as string;
            }
            const res = await apiLogin({ username, password });
            user.value = { name: res.name, student_number: res.student_number, accessToken: res.access_token, refreshToken: res.refresh_token };
        }

        async function logout() {
            user.value = null;
        }

        return { user, login, logout };
    },
    { persist: true }
);
