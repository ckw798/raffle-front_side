<script setup>
const raffle_s = ref("领 取")

const router = useRouter();
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <div class="title text-3xl grid place-items-center  font-semibold pt-10">我的抽奖历史</div>
      </el-header>

      <el-main class="main">
        <div class="timeline-ct pt-10">
          <el-timeline>
            <el-timeline-item center timestamp="2023/4/12" placement="top" color="rgb(249,216,109
)" size="large" type="info">
              <el-card style="background-color:rgb(249,216,109
) ;">
                <div class="r-title grid place-items-center font-bold text-xl pb-5">主 题</div>
                <div class="r-main grid place-items-center font-medium text-base">
                  内 容
                </div>
                <div class="button-ct grid place-items-center pt-5">
                  <el-button color="#5d22d0" round>
                    <div class="r-text grid place-items-center font-semibold text-lg">{{ raffle_s }}</div>
                  </el-button>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>

      </el-main>

        <div class="bt-ct center-ct">
          <span><el-button class="bt" color="rgb(249,216,109)" dark="true" @click="router.push('/')"><div class="bt-text text-base font-medium">正在抽奖</div></el-button></span>
          <span class="px-1.5"><el-button class="bt" color="rgb(249,216,109)" dark="true"><div class="bt-text text-base font-medium">抽奖中心</div></el-button></span>
          <span><el-button class="bt" color="rgb(249,216,109)" dark="true" @click="router.push('/user-center')"><div class="bt-text text-base font-medium">个人中心</div></el-button></span>
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

.bt-ct{
  position:fixed;
  bottom: 14rem;
  padding-left: 0rem;
}

.bt{
  width: 7rem;
  height: 2.5rem;
}

.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bt-text{
  color: #5d22d0;
}
</style>


