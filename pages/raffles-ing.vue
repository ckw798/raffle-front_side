<script setup lang="ts">
const form = ref({
  theme: "hhh",
  content: "233",
  date_1: "2023.1",
  date_2: "2023.5",
  raffle_num: "50",
});
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <div class="text-xl text-white font-bold text-center mt-3">
          正在进行的抽奖
        </div>
      </el-header>
      <el-main>
        <div class="text-lg text-white font-bold text-center mb-4">
          基本信息
        </div>
        <div class="info-ct grid place-items-center">
          <el-form>
            <el-form-item>
              <span class="mr-4 text-base text-white">抽奖主题：</span>
              <span class="text-base text-white">{{ form.theme }}</span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-base text-white">抽奖说明：</span>
              <span class="text-base text-white">{{ form.content }}</span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-base text-white">起始日期：</span>
              <span class="text-base text-white">{{ form.date_1 }}</span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-base text-white" text-lg text-white
                >截止日期：</span
              >
              <span class="text-base text-white">{{ form.date_2 }}</span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-base text-white" text-lg text-white
                >抽奖次数：</span
              >
              <span class="text-base text-white">{{ form.raffle_num }}</span>
            </el-form-item>
          </el-form>

          <div class="bts-ct mt-8">
            <el-button>修改抽奖</el-button>
            <el-button>奖品余量</el-button>
            <el-button>中奖信息</el-button>
          </div>
          <div class="gird place-items-center">
            <el-button>提前结束本次抽奖</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped></style>
