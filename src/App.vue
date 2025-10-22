<script setup lang="ts">
import LoadingIndicator from './components/LoadingIndicator.vue'
</script>

<template>
  <LoadingIndicator />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
