<script setup lang="ts">
import { addRaffle } from "~/api/raffle";

const router = useRouter();

async function add_raffle(
  title: string,
  content: string,
  deadline: string,
  times: string
) {
  const loading = ElLoading.service({
    fullscreen: true,
    text: "正在新建抽奖",
  });
  await addRaffle(title, content, deadline, times)
    .then((data) => {
      ElMessageBox.alert("新建抽奖成功", "新建抽奖提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {
          router.push("/admin/raffle/" + data.id);
        },
      });
      raffle_id;
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("新建抽奖失败", "新建抽奖提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return err;
    })
    .finally(() => {
      loading.close();
    });
}

function resetRaffle() {
  form.value.content = "";
  form.value.deadline = "";
  form.value.limit = false;
  form.value.times = "";
  form.value.title = "";
}
const limited = ref(false);
const unlimited = ref(false);

const form = ref({
  title: "",
  deadline: "",
  content: "",
  limit: false,
  times: "",
});

const raffle_id = ref(1);
</script>

<template>
  <div>
    <el-container>
      <el-header class="mb-8">
        <div
          class="text-white text-2xl font-extrabold grid place-items-center mt-4"
        >
          新建抽奖
        </div>
        <div class="z-8">
          <limited-prizes
            v-model:dialog-open="limited"
            class="z-10"
          ></limited-prizes>
          <unlimited-prizes v-if="unlimited" class="z-10"></unlimited-prizes>
        </div>
      </el-header>

      <el-main class="mb-14">
        <div class="z-1">
          <el-form :model="form">
            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm">截止时间</span>
              <el-col :span="17">
                <client-only>
                  <el-date-picker
                    v-model="form.deadline"
                    type="datetime"
                    style="width: 94%"
                    value-format="YYYY-MM-DD HH:mm:ss"
                    popper-class="popperClass"
                  />
                </client-only>
              </el-col>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm"> 抽奖主题 </span>
              <span>
                <el-input v-model="form.title" class="input" />
              </span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm"> 抽奖内容</span>
              <span>
                <textarea
                  v-model="form.content"
                  rows="5"
                  cols="30"
                  class="content"
                />
              </span>
            </el-form-item>

            <el-form-item>
              <span class="mr-5 text-white font-bold text-sm"
                >每个用户可抽奖的次数</span
              >
              <span><el-input v-model="form.times" class="input-2" /></span>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <div class="flex justify-center align-middle">
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="
              add_raffle(form.title, form.content, form.deadline, form.times)
            "
          >
            <div class="font-bold text-base">保存</div>
          </el-button>
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="resetRaffle()"
          >
            <div class="font-bold text-base">重置</div>
          </el-button>
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="router.push('/admin/center')"
          >
            <div class="font-bold text-base">返回</div>
          </el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.input {
  width: 14rem;
}

.input-1 {
  width: 14rem;
  height: 6rem;
}

.input-2 {
  width: 3rem;
}

.bt {
  width: 6rem;
  height: 2.5rem;
  color: #3c0d9c;
}

.content {
  background-color: rgb(142, 84, 255);
}
</style>
