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
    background-size: contain;
}

.center-ct {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer{
    padding-top: 0;
    margin-top: 0;
}

</style>