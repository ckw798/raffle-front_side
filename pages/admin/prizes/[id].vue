<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref(true);
const form = ref({
  name: "",
  level: "",
  photo: "",
  num: "",
});

import type { UploadProps } from "element-plus";

const imageUrl = ref("/ckw.jpg");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};
</script>

<template>
  <div>
    <el-dialog v-model="dialogVisible" width="80%" height="100%" draggable>
      <template #header>
        <div>编辑奖品</div>
      </template>

      <div>
        <el-form :model="form">
          <el-form-item>
            <span class="mr-4">奖品名称</span>
            <span>
              <el-input v-model="form.name"></el-input>
            </span>
          </el-form-item>

          <el-form-item>
            <span class="mr-11">奖项</span>
            <span>
              <el-input v-model="form.level"></el-input>
            </span>
          </el-form-item>

          <el-form-item>
            <span class="mr-16">图片</span>

            <span>
              <el-upload
                class="avatar-uploader"
                action="www.baidu.com"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </span>
          </el-form-item>

          <el-form-item>
            <span class="mr-12"> 数量 </span>

            <span>
              <el-input v-model="form.num"></el-input>
            </span>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 6rem;
  height: 6rem;
  display: block;
}
</style>
