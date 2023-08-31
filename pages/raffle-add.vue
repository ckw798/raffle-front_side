<script setup lang="ts">



const form = ref({
    theme: '',
    date1: '',
    time1: '',
    date2: '',
    time2: '',
    limit: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>


<template>
    <div>
        <el-container>
            <el-header>
                <div class="text-white text-2xl font-extrabold grid place-items-center mt-4 ">新建抽奖</div>
            </el-header>

            <el-main>
                <div>
                    <el-form :model="form">
                        <el-form-item>
                            <span class="mr-2">
                                抽奖主题
                            </span>
                            <span>
                                <el-input v-model="form.theme" class="input" />
                            </span>
                        </el-form-item>

                        <el-form-item>
                            <span class="mr-2">起始时间</span>
                            <el-col :span="10">
                                <el-date-picker v-model="form.date1" type="date" style="width: 94%" />
                            </el-col>

                            <el-col :span="1">
                                <span class="text-white font-extrabold text-xl">-</span>
                            </el-col>

                            <el-col :span="8">
                                <el-time-picker v-model="form.time1" style="width: 97%" />
                            </el-col>

                        </el-form-item>


                        <el-form-item>
                            <span class="mr-2">截止时间</span>
                            <el-col :span="10">
                                <el-date-picker v-model="form.date2" type="date" style="width:94%" />
                            </el-col>

                            <el-col :span="1">
                                <span class="text-white font-extrabold text-xl">-</span>
                            </el-col>

                            <el-col :span="8">
                                <el-time-picker v-model="form.time2" style="width: 97%" />
                            </el-col>

                        </el-form-item>

                        <el-form-item>
                            <span class="mr-4">
                                请选择奖品是否无限
                            </span>
                            <el-switch v-model="form.limit" />
                        </el-form-item>

                        <el-form-item >
                            <el-button>点击编辑奖品</el-button>
                        </el-form-item>

                        <el-form-item>

                            <span class="mr-5">每个用户可抽奖的次数</span>
                            <span><el-input v-model="form.desc" class="input-2" /></span>

                        </el-form-item>
                    </el-form>
                </div>
            </el-main>
            <el-footer>
                <div class="flex justify-between align-middle ">
                    <el-button>保存</el-button>
                    <el-button>应用</el-button>
                </div>
                
                <div class="grid place-items-center pt-4">
                                <el-button class="z-15">
                                重置
                            </el-button>
                            </div>
            </el-footer>
            
        </el-container>
    </div>
</template>



<style scoped>
.input {
    width: 12rem;
}

.input-2 {
    width: 3rem;
}
</style>