<script setup lang="ts">
import { ref } from "vue";
const route = useRoute();
const raffle_id: string = route.params.id as string;
import { getPrizes, addPrize } from "~/api/prizes";
import { getRaffleById } from "~/api/raffle";
const router = useRouter();
const status = ref(true);
const addStatus = ref(false);
const now = new Date();
const raffle = ref(await getRaffleById(raffle_id));
const tableData = ref(await getPrizes(raffle_id));
const prize = ref({
  file: "",
  name: "",
  level: "",
  amount: 1,
  number_probability: true,
});
//上传文件
import type { UploadInstance } from "element-plus";

const uploadRef = ref<UploadInstance>();

function handleBeforeUpload(file: any) {
  prize.value.file = file;
  return false;
}

function handleFile(file: any) {
  prize.value.file = file.file;
}
async function add_prize(
  raffle_id: string,
  file: string,
  name: string,
  level: string,
  amount: number,
  number_probability: boolean
) {
  uploadRef.value!.submit();
  await addPrize(name, level, file, amount, number_probability, raffle_id).then(
    (data) => {
      console.log("成功");
    }
  );
}
</script>

<template>
  <div>
    <el-container>
      <el-header class="mb-12">
        <div
          class="text-white text-2xl font-extrabold grid place-items-center mt-4"
        >
          编辑奖品信息
        </div>
        <div class="text-center text-white text-lg my-4">
          {{ raffle.title }}
        </div>
      </el-header>

      <div class="table-ct">
        <el-table :data="tableData" max-height="300" offset="5">
          <el-table-column type="selection" width="40" />

          <el-table-column prop="name" label="奖品名称" width="80">
            <template #default="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>

          <el-table-column prop="image" label="图片" width="75">
            <template #default="scope">
              <el-image :src="scope.row.image"></el-image>
            </template>
          </el-table-column>

          <el-table-column prop="level" label="奖项" width="75">
            <template #default="scope">
              {{ scope.row.level }}
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="管理" width="80">
            <template #default="scope">
              <el-button
                link
                type="info"
                size="small"
                @click="console.log(scope.row.id)"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-container>
    <div class="dialog-ct">
      <client-only>
        <el-dialog width="80%" v-model="addStatus">
          <div class="text-center text-lg mb-3">添加奖品</div>

          <div>
            <el-form :model="prize">
              <el-form-item>
                <span class="mr-4 font-bold text-sm">奖品名称</span>
                <span
                  ><el-input v-model="prize.name" class="name-input"></el-input
                ></span>
              </el-form-item>
              <el-form-item>
                <span class="mr-4 font-bold text-sm">奖品等级</span>
                <span
                  ><el-input v-model="prize.level" class="name-input"></el-input
                ></span>
              </el-form-item>
              <el-form-item v-if="prize.number_probability">
                <span class="mr-4 font-bold text-sm">奖品数量</span>
                <span
                  ><el-input
                    v-model="prize.amount"
                    class="name-input"
                  ></el-input
                ></span>
              </el-form-item>
              <el-form-item v-if="!prize.number_probability">
                <span class="mr-4 font-bold text-sm">奖品概率</span>
                <span
                  ><el-input
                    v-model="prize.amount"
                    class="name-input"
                  ></el-input
                  >%
                </span>
              </el-form-item>
              <el-form-item>
                <el-input type="file" v-model="prize.file"></el-input>
              </el-form-item>
            </el-form>
            <el-upload
              ref="uploadRef"
              class="uploader"
              action="#"
              :auto-upload="false"
              :limit="1"
            >
              <template #trigger>
                <el-button type="primary">select file</el-button>
              </template>

              <el-button
                class="ml-3"
                type="success"
                @click="
                  add_prize(
                    raffle_id,
                    prize.file,
                    prize.name,
                    prize.level,
                    prize.amount,
                    prize.number_probability
                  )
                "
              >
                upload to server
              </el-button>
            </el-upload>
          </div>
        </el-dialog>
      </client-only>
    </div>
    <div class="bts-ct">
      <el-button class="mt-4" @click="addStatus = true"> 增加新奖品 </el-button>

      <el-button class="mt-4"> 删除选中奖品 </el-button>

      <el-button class="mt-4" @click="router.push('/admin/center')">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.name-input {
  width: 8rem;
}
</style>
