<script setup>
import { ref } from 'vue'
import welcome_url from '~/assets/welcome.png'
import raffle_url from '~/assets/raffle.png'


const x = ref(0)
const myLucky = ref(null)
const width = ref('21rem')
const height = ref('21rem')
const blocks = ref([
  { padding: '0.7rem', background: 'rgb(68,63,215)' },
  { padding: '1.5rem', background: 'rgb(90,32,202)' },
  { padding: '0.35rem', background: 'rgb(254,248,79)' },
  { padding: '0.25rem', background: 'rgb(251,136,50)' },
  { padding: '1rem', background: 'rgb(120,29,225)' },
  { padding: '0.7rem', background: 'rgb(118,111,254)', img: { src: welcome_url, width: "1rem", height: "1rem", top: '-10px' } },
  { padding: '0.25rem', background: 'rgb(120,29,225)' }
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

const startCallback = () => {
  myLucky.value.play()
  setTimeout(() => {
    const index = 0
    myLucky.value.stop(index)
  }, 3000)
}

const endCallback = () => {
  alert("hhh");
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
            <ClientOnly>
              <LuckyWheel ref="myLucky" :width="width" :height="height" :prizes="prizes" :blocks="blocks"
                :buttons="buttons" @start="startCallback" @end="endCallback" :default-config="d_config"
                :default-style="d_style" />
            </ClientOnly>
          </div>
        </div>
      </el-main>
      <el-footer class="footer">
        <div class="center-ct confidence" >
          <div>您还剩余 {{ x }} 次抽奖机会</div>
        </div>
        <div class="center-ct">
            <el-button size="large" color="#ffcc4a" >我的奖品</el-button>
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
  padding-bottom: 2rem;
}
</style>