<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["dialogOpen"]);
const emit = defineEmits(["update:dialogOpen"]);

const status = ref(true);

const now = new Date();

const tableData = ref([
  {
    name: "可达鸭",
    photo: "/ckw.jpg",
    level: "特等奖",
    num: "1",
  },
]);

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1);
};

const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  tableData.value.push({
    name: "可达鸭",
    photo: "/ckw.jpg",
    level: "特等奖",
    num: "1",
  });
};
</script>

<template>
  <div>
    <el-dialog
      :model-value="props.dialogOpen"
      @update:model-value="emit('update:dialogOpen')"
      width="100%"
    >
      <template #header> 编辑奖品信息 </template>
      <div class="table-ct">
        <el-table :data="tableData" max-height="300" offset="5">
          <el-table-column type="selection" width="40" />

          <el-table-column prop="name" label="奖品名称" width="80">
            <template #default="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>

          <el-table-column prop="photo" label="图片" width="75">
            <template #default="scope">
              <el-image :src="scope.row.photo"></el-image>
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
                @click.prevent="deleteRow(scope.$index)"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <template #footer>
        <el-button class="mt-4" @click="onAddItem"> 增加新奖品 </el-button>

        <el-button class="mt-4"> 删除选中奖品 </el-button>

        <el-button class="mt-4"> 保存并退出 </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
