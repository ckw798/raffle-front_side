<script setup>
import { ref } from "vue";
import welcome_url from "~/assets/welcome.png";
import raffle_url from "~/assets/raffle.png";
import raffle_bg_url from "~/assets/raffle-bg.png";
import { InfoFilled } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { get_raffle, startRaffle } from "~/api/raffle";
import { da } from "element-plus/es/locale";

const route = useRoute();
const raffle_id = route.params.id;

const raffle_res = ref(false);
const raffleInfo = ref(await get_raffle(raffle_id));
const userStore = useUserStore();
const router = useRouter();
const myLucky = ref(null);
const width = ref("21rem");
const height = ref("21rem");
const blocks = ref([{ padding: "4.5rem" }]);
const prizes = ref([
  {
    background: "rgb(110,32,231)",
    fonts: [
      {
        text: "岳志邦",
        fontSize: "0.7rem",
        fontColor: "#e9e0ff",
        top: "0.85rem",
      },
    ],
  },
  {
    background: "rgb(233,224,255)",
    fonts: [
      {
        text: "邦邦",
        fontSize: "0.7rem",
        fontColor: "#7021e6",
        top: "0.85rem",
      },
    ],
  },
]);

async function initPrizes() {
  const loading = ElLoading.service({
    fullscreen: true,
    text: "正在获取奖品",
  });
  await getPrizes().then((data) => {
    loading.close();
  });
}

async function getPrizes() {
  prizes.value = raffleInfo.value.prize.map((p, i) => {
    let res;
    if (i % 2 === 0) {
      res = {
        background: "rgb(110,32,231)",
        fonts: [
          {
            text: p.name,
            fontSize: "0.7rem",
            fontColor: "#e9e0ff",
            top: "0.85rem",
          },
        ],
      };
    } else {
      res = {
        background: "rgb(233,224,255)",
        fonts: [
          {
            text: p.name,
            fontSize: "0.7rem",
            fontColor: "#7021e6",
            top: "0.85rem",
          },
        ],
      };
    }
    return res;
  });
}

initPrizes();

const buttons = ref([
  {
    radius: "27.5%",
    background: "rgb(255,254,250)",
    pointer: true,
  },
  { radius: "40%", background: "rgb(255,254,250)" },
  { radius: "35%", background: "rgb(101,70,249)" },
  { radius: "30%", background: "rgb(167,117,254)" },
  {
    radius: "27%",
    background: "rgb(195,190,254)",
    fonts: [{ text: "抽奖", top: "-0.65rem", fontColor: "rgb(250,253,252)" }],
  },
]);

const result = ref({
  name: "谢谢惠顾",
  level: "安慰奖",
  times: raffleInfo.value.times,
});
const msg = () => {
  ElMessageBox.alert(
    "<div>" +
      raffleInfo.value.title +
      "</div>" +
      "<div>" +
      raffleInfo.value.content +
      "</div>" +
      "<div>抽奖开始日期：" +
      raffleInfo.value.datetime +
      "</div>" +
      "<div>抽奖截止日期：" +
      raffleInfo.value.deadline +
      "</div>",
    "抽奖规则",
    {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
      dangerouslyUseHTMLString: true,
      callback: () => {},
    }
  );
};

const startCallback = async (raffle_id) => {
  if (!result.value.times) {
    ElMessageBox.alert("抽奖次数不足，请留意后续活动", "抽奖提示", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
      callback: async () => {
        await get_raffle(raffle_id)
          .then((data) => {
            result.value.times = data.times;
            return data;
          })
          .catch((err) => {
            ElMessageBox.alert("抽奖次数刷新失败", "抽奖提示", {
              // if you want to disable its autofocus
              // autofocus: false,
              confirmButtonText: "OK",
              callback: () => {},
            });
          });
      },
    });
    return 0;
  }
  myLucky.value.play();
  await startRaffle(raffle_id)
    .then((data) => {
      result.value.name = data.name;
      result.value.level = data.level;
      result.value.index = data.index;
      return data;
    })
    .catch((err) => {
      (result.value.name = "谢谢惠顾"), (result.value.level = "安慰奖");
      setTimeout(() => {
        myLucky.value.stop(0.5);
      }, 3000);
      return err;
    })
    .finally(() => {
      setTimeout(() => {
        myLucky.value.stop(result.value.index);
      }, 3000);
    });
};

const endCallback = () => {
  raffle_res.value = true;
};

async function handleClose() {
  await get_raffle(raffle_id)
    .then((data) => {
      result.value.times = data.times;
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("抽奖次数刷新失败", "抽奖提示", {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: "OK",
        callback: () => {},
      });
      return err;
    })
    .finally(() => {
      raffle_res.value = false;
    });
}

//

const d_config = ref({
  accelerationTime: 2000,
  decelerationTime: 2000,
  speed: 8,
});

// 样式

const d_style = ref({
  fontSize: "1rem",
  fontColor: "#000",
});
</script>

<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="info-ct z-10">
          <button class="info-bt z-11" @click="msg">
            <el-icon><InfoFilled /></el-icon>
          </button>
        </div>

        <div class="bt-ct-1 z-10">
          <button @click="router.push('/user/center')" class="z-11">
            <div class="text-white text-xs text font-extrabold">个人中心</div>
          </button>
        </div>

        <div>
          <div class="center-ct" id="h">
            <el-image :src="welcome_url" class="welcome-ct" />
          </div>
          <div class="center-ct" id="g">
            <el-image :src="raffle_url" class="raffle-ct" />
          </div>
        </div>
      </el-header>
      <el-main class="center-ct main">
        <div class="lucky-ct">
          <div class="center-ct">
            <div class="raffle-bg-ct">
              <img :src="raffle_bg_url" />
            </div>
          </div>
          <div class="center-ct wheel-ct">
            <ClientOnly>
              <LuckyWheel
                ref="myLucky"
                :width="width"
                :height="height"
                :prizes="prizes"
                :blocks="blocks"
                :buttons="buttons"
                @start="startCallback(raffle_id)"
                @end="endCallback()"
                :default-config="d_config"
                :default-style="d_style"
                class="lucky"
              />

              <el-dialog v-model="raffle_res" width="80%" :show-close="false">
                <template #header> 抽奖结果 </template>

                <div>恭喜你抽到了</div>
                <div>奖品名称：{{ result.name }}</div>
                <div>奖项：{{ result.level }}</div>

                <template #footer>
                  <ElButton @click="handleClose()">好的</ElButton>
                </template>
              </el-dialog>
            </ClientOnly>
          </div>
        </div>
      </el-main>
      <el-footer class="footer">
        <div class="center-ct confidence">
          <div class="text-xs text-white font-semibold">
            您还剩余 {{ result.times }} 次抽奖机会
          </div>
        </div>
        <div class="center-ct rbt-ct">
          <el-button
            color="#ffcc4a"
            round
            class="rbt"
            @click="router.push('/user/history')"
          >
            <div class="mine text-xl font-semibold">我的奖品</div>
          </el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}

#h {
  padding-bottom: 1.5rem;
  padding-top: 0;
}

#g {
  padding-bottom: 2rem;
}

.lucky-ct {
  padding-top: 3rem;
}

.bt {
  width: 7.5rem;
  height: 2rem;
  padding-left: 0.5rem;
}

.welcome-ct {
  width: 8rem;
}

.raffle-ct {
  width: 15rem;
}

.header {
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

.main {
  padding-top: 2rem;
}

.confidence {
  padding-bottom: 2.4rem;
}
.rbt-ct {
  height: 0.1rem;
  padding-top: 0rem;
  z-index: 10086;
}

.rbt {
  width: 15rem;
  height: 3rem;
  z-index: 10087;
}

.mine {
  color: #3c0d9c;
}

.raffle-bg-ct {
  position: absolute;
  z-index: -10086rem;
  width: 21rem;
  height: 21rem;
  padding-top: 0.3rem;
}

.info-ct {
  position: absolute;
  right: 2.5rem;
  top: 12rem;
  z-index: 10086rem;
}

.info-bt {
  z-index: 10086rem;
}

.bt-ct-1 {
  position: absolute;
  right: 1.5rem;
  top: 3.5rem;
}

.wheel-ct {
  width: 21rem;
  height: 21rem;
}
.lucky {
  position: absolute;
}
</style>

<style>
.el-message-box {
  background-color: rgb(245, 212, 107);
}
</style>
