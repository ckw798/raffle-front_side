// 全局 Admin State 使用 Pinia 进行管理，参见：<https://pinia.vuejs.org/ssr/nuxt.html>

import { defineStore } from 'pinia';
import { login as apiLogin } from '~/api/admin';
import type { LoginForm } from '~/api/admin';

interface Admin {
    accessToken: string;
}

export const useAdminStore = defineStore(
    'admin',
    () => {
        const admin = ref<Admin | null>(null);

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
            admin.value = { accessToken: res.access_token };
        }

        async function logout() {
            admin.value = null;
        }

        return { admin, login, logout };
    },
    { persist: true }
);
