<script setup>
import bg_url from '~/assets/background.png'
</script>

<template>
<el-container class="ct">
    <el-main>
        <slot />

    </el-main>
</el-container>
</template>


<style >
html{
    min-height: 100%;
    background-image:url('~/assets/background.png');
    background-size: 100% 100%;
    zoom: 100%;
}

.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>