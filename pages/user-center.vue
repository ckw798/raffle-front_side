<script setup lang="ts">
import logo_url from "~/assets/logo.png"
import { Plus } from '@element-plus/icons-vue';


const router = useRouter();

const log_out_status = ref(false);

const add_status = ref(false);

const form = ref({
    name: "",
    phone: "",
    address: ""
});
const edit_status = ref(false);

</script>

<template>
    <div>

        <div class="logo-ct grid place-items-center pt-8 pb-10">
            <el-avatar :src="logo_url" class="logo"></el-avatar>
        </div>

        <div class="text-ct grid place-items-center text-white font-semibold">
            欢迎用户邦邦
        </div>
        <div class="cards-ct">
            <div class="address-cards">
                <el-card class="address-ct my-4">
                    <div class="num mb-3">
                        <span class="ad-text text-sm font-semibold">领取人1</span>
                        <span><button @click="edit_status = true">
                                <div class="ad-text text-xs font-medium">点击可修改</div>
                            </button></span>
                    </div>
                    <div class="total">
                        <span class="name ad-text text-sm font-semibold">邦邦</span>
                        <span class="phone-num mx-4 ad-text text-sm font-semibold">15236786932</span>
                        <span class="address ad-text text-sm font-semibold">哈哈哈哈哈或</span>
                    </div>
                </el-card>
            </div>
            <div class="add">
                <el-card class="add-card">
                    <div class="ad-text flex justify-center">
                        <button @click="add_status = true">
                            <span class="mr-2 font-semibold">
                                新增领取人
                            </span>
                            <span><el-icon>
                                    <Plus />
                                </el-icon></span>
                        </button>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="bt-ct grid place-items-center mt-8">
            <el-button class="a-bt" @click="log_out_status = true">
                <div class="text-red-800 font-semibold text-xl">注 销</div>
            </el-button>
        </div>


        <div class="bts-ct center-ct">
          <span><el-button class="bt" color="rgb(249,216,109)" dark @click="router.push('/')"><div class="bt-text text-base font-medium" style="color:#5d22d0;">正在抽奖</div></el-button></span>
          <span class="px-1.5"><el-button class="bt" color="rgb(249,216,109)" dark><div class="bt-text text-base font-medium" style="color:#5d22d0;">抽奖中心</div></el-button></span>
          <span><el-button class="bt" color="rgb(249,216,109)" dark @click="router.push('/personal')"><div class="bt-text text-base font-medium" style="color:#5d22d0;">个人中心</div></el-button></span>
        </div>


        <ClientOnly>

            <el-dialog v-model="add_status" width="80%" class="add-ct">
                <template #header>
                    <div class="grid place-items-center font-semibold" style="color: rgb(67,32,124);">新增领取人</div>
                </template>
                <el-form :model="form">
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人姓名</span>
                        <span> <el-input v-model="form.name" autocomplete="off" class="el-input" /></span>
                    </el-form-item>
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人电话</span>
                        <span><el-input v-model="form.phone" autocomplete="off" class="el-input" /></span>
                    </el-form-item>
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人地址</span>
                        <span><el-input v-model="form.address" autocomplete="off" class="el-input" /></span>

                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="add_status = false" class="el-bt">
                            <div class="font-semibold" style="color: rgb(67,32,124);">保存并退出</div>
                        </el-button>
                        <el-button @click="add_status = false" class="el-bt">
                            <div class="font-semibold" style="color: rgb(67,32,124);">重置</div>
                        </el-button>
                    </span>
                </template>
            </el-dialog>




            <el-dialog v-model="edit_status" width="80%" class="edit-ct">
                <template #header>
                    <div class="grid place-items-center font-semibold" style="color: rgb(67,32,124);">修改已有领取人</div>
                </template>
                <el-form :model="form">
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人姓名</span>
                        <span> <el-input v-model="form.name" autocomplete="off" class="el-input" /></span>
                    </el-form-item>
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人电话</span>
                        <span><el-input v-model="form.phone" autocomplete="off" class="el-input" /></span>
                    </el-form-item>
                    <el-form-item>
                        <span class="mr-4 font-semibold" style="color: rgb(67,32,124);">领取人地址</span>
                        <span><el-input v-model="form.address" autocomplete="off" class="el-input" /></span>

                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="edit_status = false" class="el-bt">
                            <div class="font-semibold" style="color: rgb(67,32,124);">保存并退出</div>
                        </el-button>
                        <el-button @click="edit_status = false" class="el-bt">
                            <div class="font-semibold" style="color: rgb(67,32,124);">重置</div>
                        </el-button>
                    </span>
                </template>
            </el-dialog>

            <el-dialog class="log-out" v-model="log_out_status" width="80%">
                <template #header>
                    <div>

                    </div>
                </template>

                <div class="grid place-items-center font-semibold">
                    <div class="text-red-800 font-semibold text-xl mb-3">注意！！</div>
                    <div class="text-red-800 font-semibold text-xl">请注意是否注销账号！</div>
                </div>

                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="log_out_status = false" class="el-bt">
                            <div class="font-semibold " style="color: rgb(67,32,124);">否</div>
                        </el-button>
                        <el-button @click="log_out_status = false" class="el-bt">
                            <div class="font-semibold" style="color: rgb(67,32,124);">是</div>
                        </el-button>
                    </span>
                </template>
            </el-dialog>


        </ClientOnly>
    </div>
</template>



<style scoped>
.logo {
    width: 8rem;
    height: 8rem;
}

.num {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.address-ct {
    background-color: rgb(94, 35, 210);
    border: transparent;
}

.ad-text {
    color: white;
}


.add-card {
    background-color: rgb(94, 35, 210);
    border: transparent;
}

.a-bt {
    background-color: rgb(50, 13, 119);
    border: none;
    width: 7rem;
    height: 2.5rem;
}

.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bts-ct{
  position:fixed;
  bottom: 14rem;
  padding-left: 0rem;
}

.bt{
  width: 7rem;
  height: 2.5rem;
}
</style>

<style>

.add-ct{
    background-color: rgb(245, 212, 107);
}

.edit-ct {
    background-color: rgb(245, 212, 107);
}

.el-bt {
    background-color: rgb(188, 162, 77);
    border: none;
}

.el-input__wrapper {
    border: none;
    outline: none;
    background-color: rgb(188, 162, 77);
    ;
    color: rgb(188, 162, 77);
    box-shadow: none;
    border-radius: 0.6rem;
}

.log-out {
    background-color: rgb(245, 212, 107);
}


</style>
