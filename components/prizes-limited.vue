<script setup lang="ts">

import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'


const now = new Date()

const tableData = ref([
  {
    name: '1',
    photo: '/ckw.jpg',
    grade: '1'
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    name: '1',
    photo: '/ckw.jpg',
    grade: '1'
  })
}




const imageUrl = ref('/ckw.jpg')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}


</script>


<template>
  <div>
    <el-table :data="tableData" max-height="550">
      <el-table-column type="selection" width="40" />

      <el-table-column prop="name" label="奖品名称" width="80" />

      <el-table-column prop="photo" label="图片" width="75">

        <template #default="scope">

          <el-upload class="avatar-uploader" action="www.baidu.com" :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>

          </el-upload>

        </template>

      </el-table-column>


      <el-table-column prop="grade" label="奖项" width="75" />

      <el-table-column fixed="right" label="管理" width="80">
        <template #default="scope">
          <el-button link type="info" size="small" @click.prevent="deleteRow(scope.$index)">
            编辑
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-button class="mt-4" @click="onAddItem">
      增加新奖品
    </el-button>

    <el-button class="mt-4">
      删除选中奖品
    </el-button>

    <el-button class="mt-4">
      保存并退出
    </el-button>
  </div>
</template>



<style scoped>
.avatar-uploader .avatar {
  width: 3rem;
  height: 3rem;
  display: block;
}
</style>
