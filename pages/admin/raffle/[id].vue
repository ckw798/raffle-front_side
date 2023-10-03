<template>
  <div>
    {{ raffle_id }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const raffle_id = route.params.id;
</script>

<style scoped></style>
