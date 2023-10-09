<script setup lang="ts">
import {
  getRaffleById,
  deleteRaffle,
  updateState,
  updateRaffle,
} from "~/api/raffle";
const route = useRoute();
const raffle_id: string = route.params.id as string;
const router = useRouter();
const form = ref({ student_number: "", remaining_times: 0 });
const times_status = ref(false);
const delete_status = ref(false);

async function handle_times(
  raffle_id: string,
  student_number: string,
  remaining_times: number
) {
  await handleTimes(raffle_id, student_number, remaining_times)
    .then((data) => {
      ElMessageBox.alert("修改成功", "修改信息提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("更新成失败", "更新信息提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return err;
    })
    .finally(() => {
      form.value = { student_number: "", remaining_times: 0 };
    });
}

async function delete_raffle(raffle_id: string) {
  await deleteRaffle(raffle_id)
    .then((data) => {
      ElMessageBox.alert("删除成功", "删除提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {
          router.push("/admin/center");
        },
      });
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("删除失败，请刷新后重试", "删除提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return err;
    });
}

async function update_state(state: number, raffle_id: string) {
  await updateState(state, raffle_id)
    .then((data) => {
      ElMessageBox.alert("修改成功", "修改提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("修改失败", "修改提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return err;
    });
}

async function update_raffle(
  raffle_id: string,
  title: string,
  content: string,
  deadline: string,
  times: number
) {
  await updateRaffle(raffle_id, title, content, deadline, times)
    .then((data) => {
      ElMessageBox.alert("修改成功", "修改提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return data;
    })
    .catch((err) => {
      ElMessageBox.alert("修改失败", "修改提示", {
        confirmButtonText: "好的",
        showClose: false,
        callback: () => {},
      });
      return err;
    });
}

const raffle = ref(await getRaffleById(raffle_id));

const options = [
  {
    value: 0,
    label: "未发布",
  },
  {
    value: 1,
    label: "进行中",
  },
  {
    value: 2,
    label: "已截止",
  },
];
</script>

<template>
  <div>
    <el-container>
      <el-header class="mb-1">
        <div
          class="text-white text-2xl font-extrabold grid place-items-center mt-4"
        >
          更改抽奖信息
        </div>
      </el-header>

      <el-main class="mb-1">
        <div class="z-1">
          <el-form :model="raffle">
            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm">截止时间</span>
              <el-col :span="17">
                <client-only>
                  <el-date-picker
                    v-model="raffle.deadline"
                    type="datetime"
                    style="width: 94%"
                    value-format="YYYY-MM-DD HH:mm:ss"
                    popper-class="popperClass"
                  />
                </client-only>
              </el-col>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm"> 抽奖主题 </span>
              <span>
                <el-input v-model="raffle.title" class="input" />
              </span>
            </el-form-item>

            <el-form-item>
              <span class="mr-4 text-white font-bold text-sm"> 抽奖内容</span>
              <span>
                <textarea
                  v-model="raffle.content"
                  rows="5"
                  cols="30"
                  class="content"
                />
              </span>
            </el-form-item>

            <el-form-item>
              <span class="mr-5 text-white font-bold text-sm"
                >每个用户可抽奖的次数</span
              >
              <span><el-input v-model="raffle.times" class="input-2" /></span>
            </el-form-item>

            <el-form-item>
              <span class="mr-5 text-white font-bold text-sm">抽奖状态</span>
              <span>
                <client-only>
                  <el-select
                    v-model="raffle.state"
                    clearable
                    placeholder="请选择"
                    class="select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </client-only>
              </span>
              <span>
                <el-button
                  class="el-bt"
                  color="rgb(188, 162, 77)"
                  font-bold
                  text-base
                  @click="update_state(raffle.state, raffle_id)"
                  >确认</el-button
                >
              </span>
            </el-form-item>

            <el-form-item>
              <div class="text-center">
                <el-button @click="times_status = true"
                  >修改某个用户抽奖次数</el-button
                >
              </div>
            </el-form-item>
          </el-form>

          <div class="times-ct grid place-items-center z-10">
            <client-only
              ><el-dialog v-model="times_status" width="80%">
                <template #header>修改用户抽奖次数 </template>
                <div>
                  <el-form v-model="form">
                    <el-form-item>
                      <span class="mr-11">学号</span>
                      <span
                        ><el-input v-model="form.student_number"></el-input
                      ></span>
                    </el-form-item>

                    <el-form-item>
                      <span class="mr-4">抽奖次数</span>
                      <span
                        ><el-input v-model="form.remaining_times"></el-input
                      ></span>
                    </el-form-item>
                  </el-form>
                </div>
                <template #footer>
                  <el-button
                    @click="
                      [
                        (times_status = false),
                        handle_times(
                          raffle.id,
                          form.student_number,
                          form.remaining_times
                        ),
                      ]
                    "
                    >确定</el-button
                  >
                </template>
              </el-dialog></client-only
            >
          </div>

          <div class="delete-ct grid place-items-center">
            <client-only>
              <el-dialog
                v-model="delete_status"
                width="80%"
                :show-close="false"
              >
                <template #header>
                  <div></div>
                </template>

                <div class="grid place-items-center font-semibold">
                  <div class="text-red-800 font-semibold text-xl mb-3">
                    注意！！
                  </div>
                  <div class="text-red-800 font-semibold text-xl">
                    请注意是否删除抽奖！
                  </div>
                </div>

                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="delete_status = false" class="el-bt">
                      <div
                        class="font-semibold"
                        style="color: rgb(67, 32, 124)"
                      >
                        否
                      </div>
                    </el-button>
                    <el-button
                      @click="
                        [(delete_status = false), delete_raffle(raffle_id)]
                      "
                      class="el-bt"
                    >
                      <div
                        class="font-semibold"
                        style="color: rgb(67, 32, 124)"
                      >
                        是
                      </div>
                    </el-button>
                  </span>
                </template>
              </el-dialog>
            </client-only>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div class="flex justify-center align-middle">
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="
              update_raffle(
                raffle_id,
                raffle.title,
                raffle.content,
                raffle.deadline,
                raffle.times
              )
            "
          >
            <div class="font-bold text-base">保存</div>
          </el-button>
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="delete_status = true"
          >
            <div class="font-bold text-base">删除</div>
          </el-button>
          <el-button
            color="rgb(188, 162, 77)"
            class="bt"
            @click="router.push('/admin/center')"
          >
            <div class="font-bold text-base">返回</div>
          </el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.input {
  width: 14rem;
}

.input-1 {
  width: 14rem;
  height: 6rem;
}

.input-2 {
  width: 3rem;
}

.bt {
  width: 6rem;
  height: 2.5rem;
  color: #3c0d9c;
}

.content {
  background-color: rgb(142, 84, 255);
}

.select {
  width: 5.7rem;
  margin-right: 2rem;
}

.el-bt {
  color: #3c0d9c;
}
</style>
