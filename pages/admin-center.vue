<script setup lang="ts">
import avatar_url from "~/assets/ckw.jpg";
import { Plus } from '@element-plus/icons-vue';
const router = useRouter();
const log_out_status = ref(false);
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <div class="grid place-items-center mt-3 text-white text-2xl font-bold">
          后台中心
        </div>
      </el-header>

      <el-main>
        <div class="avatar-ct grid place-items-center mt-1">
          <el-avatar :src="avatar_url" class="avatar" />
        </div>

        <div class="collapse-ct mt-6">
          <button @click="router.push('/raffle-add')">
            <div
              class="add-ct text-black text-base bg-white flex justify-between items-center pl-4 pr-2">
              <div>新增一个抽奖</div>
              <div> <el-icon><Plus /></el-icon></div>
             
            </div>
          </button>

          <el-collapse accordion>
            <el-collapse-item>
              <template #title>
                <div class="text-base ml-4 w-full">正在进行的抽奖</div>
              </template>

              <div
                class="raffles-ing-ct grid place-items-center my-2 border-violet-950 border-y-2"
              >
                <button>
                  <div class="text-base">迎新抽奖 2023.1-2023.6</div>
                </button>
              </div>

              <div
                class="raffles-ing-ct grid place-items-center border-violet-950 border-y-2"
              >
                <button>
                  <div class="text-base">原神抽奖</div>
                </button>
              </div>
            </el-collapse-item>

            <el-collapse-item>
              <template #title>
                <div class="text-base ml-4 w-full">已结束的抽奖</div>
              </template>

              <div
                class="raffles-ed-ct grid place-items-center border-violet-950 border-y-2"
              >
                <button>
                  <div class="text-base">原神抽奖</div>
                </button>
              </div>
            </el-collapse-item>

            <el-collapse-item>
              <template #title>
                <div class="text-base ml-4 w-full">其他</div>
              </template>

              <div
                class="raffles-ed-ct grid place-items-center border-violet-950 border-y-2"
              >
                <button class="text-base">原神抽奖</button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-main>

      <el-footer>
        <div class="grid place-items-center">
          <el-button size="large">
            <div
              class="text-lg text-red-700 font-bold"
              @click="log_out_status = true"
            >
              注销
            </div>
          </el-button>
        </div>
      </el-footer>
    </el-container>

    <ClientOnly>
      <el-dialog class="log-out" v-model="log_out_status" width="80%">
        <template #header>
          <div></div>
        </template>

        <div class="grid place-items-center font-semibold">
          <div class="text-red-800 font-semibold text-xl mb-3">注意！！</div>
          <div class="text-red-800 font-semibold text-xl">
            请注意是否注销账号！
          </div>
        </div>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="log_out_status = false" class="el-bt">
              <div class="font-semibold" style="color: rgb(67, 32, 124)">
                否
              </div>
            </el-button>
            <el-button @click="log_out_status = false" class="el-bt">
              <div class="font-semibold" style="color: rgb(67, 32, 124)">
                是
              </div>
            </el-button>
          </span>
        </template>
      </el-dialog>
    </ClientOnly>
  </div>
</template>

<style scoped>
.avatar {
  width: 7rem;
  height: 7rem;
}

.add-ct {
  width: 19.4rem;
  height: 3rem;
}
</style>
