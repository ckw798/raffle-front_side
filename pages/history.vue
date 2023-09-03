<script setup lang="ts">
import { get_record } from "~/api/record";
import { ElMessage } from "element-plus";

const raffle_s = ref("领 取");

const router = useRouter();

const records = ref(await get_record());

async function initRecord() {
  const loading = ElLoading.service({
    fullscreen: true,
    text: "正在获取抽奖历史",
  });
  loading.close();
}
function msg() {
  ElMessage({
    message: "请联系工作人员进行领取",
    type: "success",
  });
}
</script>

<template>
  <div>
    <el-container>
      <el-header class="mb-6">
        <div
          class="title text-3xl grid place-items-center font-semibold pt-6 mb-8"
        >
          我的抽奖历史
        </div>
      </el-header>

      <el-main class="main">
        <div class="timeline-ct max-h-96">
          <el-timeline v-for="record in records">
            <el-timeline-item
              center
              :timestamp="record.datetime"
              placement="top"
              color="rgb(249,216,109
)"
              size="large"
              type="info"
            >
              <el-card style="background-color: rgb(249, 216, 109)">
                <div
                  class="r-title grid place-items-center font-bold text-xl pb-5"
                >
                  {{ record.prize.id }}
                </div>
                <div
                  class="r-main grid place-items-center font-medium text-base"
                >
                  {{ record.prize.name }}
                </div>
                <div class="button-ct grid place-items-center pt-5">
                  <el-button color="#5d22d0" round @click="">
                    <div
                      class="r-text grid place-items-center font-semibold text-lg"
                    >
                      {{ raffle_s }}
                    </div>
                  </el-button>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-main>

      <div class="bt-ct center-ct">
        <span
          ><el-button
            class="bt"
            color="rgb(249,216,109)"
            dark
            @click="router.push('/')"
            ><div class="bt-text text-base font-medium">
              正在抽奖
            </div></el-button
          ></span
        >
        <span class="px-1.5"
          ><el-button class="bt" color="rgb(249,216,109)" dark
            ><div class="bt-text text-base font-medium">
              抽奖中心
            </div></el-button
          ></span
        >
        <span
          ><el-button
            class="bt"
            color="rgb(249,216,109)"
            dark
            @click="router.push('/user-center')"
            ><div class="bt-text text-base font-medium">
              个人中心
            </div></el-button
          ></span
        >
      </div>
    </el-container>
  </div>
</template>

<style scoped>
.title {
  color: white;
}

.r-text {
  color: rgb(249, 216, 109);
  width: 3rem;
}

.r-title {
  color: #5d22d0;
}

.r-main {
  color: #5d22d0;
}

.bt-ct {
  position: fixed;
  bottom: 14rem;
  padding-left: 0rem;
}

.bt {
  width: 7rem;
  height: 2.5rem;
}

.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bt-text {
  color: #5d22d0;
}
</style>

<style>
.el-timeline-item__wrapper div {
  color: rgb(249, 216, 109);
}
</style>
