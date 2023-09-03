<script setup lang="ts">
import avatar_url from "~/assets/ckw.jpg";
import { Plus } from "@element-plus/icons-vue";
import { handleTimes } from "~/api/raffle";

const userStore = useUserStore();
userStore.logout();

async function handle_times(
  raffle_id: string,
  student_number: string,
  remaining_times: number
) {
  await handleTimes(raffle_id, student_number, remaining_times)
    .then((data) => {
      ElMessageBox.alert("修改成功", "修改信息提示", {
        confirmButtonText: "好的",
        callback: () => {},
      });
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("更新成失败", "更新信息提示", {
        confirmButtonText: "好的",
        callback: () => {},
      });
    })
    .finally(() => {
      form.value = { raffle_id: "", student_number: "", remaining_times: 0 };
    });
}
const form = ref({ raffle_id: "", student_number: "", remaining_times: 0 });
const router = useRouter();
const adminStore = useAdminStore();
const log_out_status = ref(false);
const times_status = ref(false);
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

        <div class="times-ct grid place-items-center mt-16 mb-20">
          <el-button @click="times_status = true">
            点击修改用户抽奖次数
          </el-button>
          <el-dialog v-model="times_status" width="80%">
            <template #header>修改用户抽奖次数 </template>
            <div>
              <el-form v-model="form">
                <el-form-item>
                  <span class="mr-8">抽奖id</span>
                  <span><el-input v-model="form.raffle_id"></el-input></span>
                </el-form-item>

                <el-form-item>
                  <span class="mr-11">学号</span>
                  <span
                    ><el-input v-model="form.student_number"></el-input
                  ></span>
                </el-form-item>

                <el-form-item>
                  <span class="mr-4">抽奖次数</span>
                  <span
                    ><el-input v-model="form.remaining_times"></el-input
                  ></span>
                </el-form-item>
              </el-form>
            </div>
            <template #footer>
              <el-button
                @click="
                  [
                    (times_status = false),
                    handle_times(
                      form.raffle_id,
                      form.student_number,
                      form.remaining_times
                    ),
                  ]
                "
                >确定</el-button
              >
            </template>
          </el-dialog>
        </div>

        <div class="collapse-ct mt-6" v-if="0">
          <button @click="router.push('/raffle-add')">
            <div
              class="add-ct text-black text-base bg-white flex justify-between items-center pl-4 pr-2"
            >
              <div>新增一个抽奖</div>
              <div>
                <el-icon><Plus /></el-icon>
              </div>
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
            <el-button
              @click="
                [
                  adminStore.logout,
                  (log_out_status = false),
                  router.push('/admin-login'),
                ]
              "
              class="el-bt"
            >
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
