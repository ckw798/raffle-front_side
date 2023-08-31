<script setup>
import { ref } from 'vue';
import welcome_url from '~/assets/welcome.png';
import raffle_url from '~/assets/raffle.png';
import raffle_bg_url from '~/assets/raffle-bg.png';
import { InfoFilled } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';


const router = useRouter()
const x = ref(0)
const myLucky = ref(null)
const width = ref('21rem')
const height = ref('21rem')
const blocks = ref([
  { padding: '4.5rem' }
])
const prizes = ref([
  { background: 'rgb(110,32,231)', fonts: [{ text: '岳志邦', fontSize: '0.7rem',fontColor: "#e9e0ff",top:"0.85rem"}] },
  { background: 'rgb(233,224,255)', fonts: [{ text: '邦邦', fontSize: '0.7rem',fontColor:"#7021e6",top:"0.85rem"}] },
  { background: 'rgb(110,32,231)', fonts: [{ text: '岳志邦', fontSize: '0.7rem',fontColor: "#e9e0ff",top:"0.85rem"}] },
  { background: 'rgb(233,224,255)', fonts: [{ text: '邦邦', fontSize: '0.7rem',fontColor:"#7021e6",top:"0.85rem"}] },
  { background: 'rgb(110,32,231)', fonts: [{ text: '岳志邦', fontSize: '0.7rem',fontColor: "#e9e0ff",top:"0.85rem"}] },
  { background: 'rgb(233,224,255)', fonts: [{ text: '邦邦', fontSize: '0.7rem',fontColor:"#7021e6",top:"0.85rem"}] },
  { background: 'rgb(110,32,231)', fonts: [{ text: '岳志邦', fontSize: '0.7rem',fontColor: "#e9e0ff",top:"0.85rem"}] },
  { background: 'rgb(233,224,255)', fonts: [{ text: '邦邦', fontSize: '0.7rem',fontColor:"#7021e6",top:"0.85rem"}] },
  { background: 'rgb(110,32,231)', fonts: [{ text: '岳志邦', fontSize: '0.7rem',fontColor: "#e9e0ff",top:"0.85rem"}] },
  { background: 'rgb(233,224,255)', fonts: [{ text: '邦邦', fontSize: '0.7rem',fontColor:"#7021e6",top:"0.85rem"}] },
 
])
const buttons = ref([
  {
    radius: '27.5%', background: 'rgb(255,254,250)',
    pointer: true
  },
  { radius: '40%', background: 'rgb(255,254,250)' },
  { radius: '35%', background: 'rgb(101,70,249)' },
  { radius: '30%', background: 'rgb(167,117,254)' },
  { radius: '27%', background: 'rgb(195,190,254)',
  fonts:[{text:"抽奖",top:"-0.65rem",fontColor:"rgb(250,253,252)"}] },

])


const res = (result) =>{
  ElMessage({
    message:'恭喜你获得了'+result,
    type:'success',
    center:'true',
    duration:'3000',
    offset:'28'

})
}



const msg = () => {
  ElMessageBox.alert('我是天帝', '抽奖规则', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: () => {
    },
  })
}



const startCallback = () => {
  myLucky.value.play()
  setTimeout(() => {
    const index = 0
    myLucky.value.stop(index)
  }, 3000)
}

const endCallback = (result) => {
  res(result);
};



// 

const d_config = ref({
  accelerationTime: 2000,
  decelerationTime: 2000,
  speed: 8
});

// 样式

const d_style = ref({
  fontSize: "1rem",
  fontColor: "#000"
});







</script>


<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="info-ct z-10">
          <button class="info-bt z-11" @click="msg"><el-icon><InfoFilled /></el-icon></button>
          </div>

          <div class="bt-ct-1 z-10">
            <button @click="router.push('/user-center')" class="z-11">
              <div class="text-white text-xs text font-extrabold">个人中心</div>
            </button>
          </div>

        <div>
          <div class="center-ct " id="h">
            <el-image :src='welcome_url' class="welcome-ct" />
          </div>
          <div class="center-ct" id="g">
            <el-image :src='raffle_url' class="raffle-ct"  />
          </div>
         
        </div>
      </el-header>
      <el-main class="center-ct main">
        <div class="lucky-ct">
          <div class="center-ct">
            <div class="raffle-bg-ct">
              <img :src="raffle_bg_url">
            </div>
          </div>
          <div class="center-ct">
            <ClientOnly>
              <LuckyWheel ref="myLucky" :width="width" :height="height" :prizes="prizes" :blocks="blocks"
                :buttons="buttons" @start="startCallback()" @end="endCallback(233)" :default-config="d_config"
                :default-style="d_style" class="lucky" />
            </ClientOnly>
          </div>
        </div>
      </el-main>
      <el-footer class="footer">
        <div class="center-ct confidence" >
          <div class="text-xs text-white font-semibold">您还剩余 {{ x }} 次抽奖机会</div>
        </div>
        <div class="center-ct rbt-ct">
            <el-button color="#ffcc4a" round class="rbt" @click="router.push('/history')">
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

.footer {
  padding-top: 0rem;
}

.welcome-ct{
  width: 8rem;
}

.raffle-ct{
  width: 15rem;
}

.header{
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

.main{
  padding-top: 2rem;
}

.confidence{
  padding-bottom: 2.4rem;
}
.rbt-ct{
  height: 0.1rem;
  padding-top: 0rem;
  z-index: 10086;
}

.rbt{
  width: 15rem;
  height: 3rem;
  z-index: 10087;
}

.mine{
  color: #3c0d9c;
}

.raffle-bg-ct{
  position:absolute;
  z-index: -10086rem;
  width: 21rem;
  height: 21rem;
  padding-top: 0.3rem;
}


.info-ct{
  position: absolute;
  right: 2.5rem;
  top:12rem;
  z-index: 10086rem;
}

.info-bt{
  z-index: 10086rem;
}

.bt-ct-1{
  position: absolute;
  right: 1.5rem;
  top:3.5rem;
}
</style>
