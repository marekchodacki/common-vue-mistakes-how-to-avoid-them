<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isVisible = ref(false)
const progress = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function start() {
  isVisible.value = true
  progress.value = 0

  timer = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 5
    }
  }, 120)
}

function finish() {
  if (timer) clearInterval(timer)
  progress.value = 100

  setTimeout(() => {
    isVisible.value = false
    progress.value = 0
  }, 300)
}

onMounted(() => {
  router.beforeEach((_, __, next) => {
    start()
    next()
  })
  router.afterEach(() => {
    finish()
  })
})
</script>

<template>
  <Transition name="fade">
    <div v-if="isVisible" class="loading-indicator" :style="{ width: progress + '%' }"></div>
  </Transition>
</template>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: var(--color-sky-500);
  transition:
    width 0.2s ease,
    opacity 0.3s ease;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
