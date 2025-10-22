<script setup lang="ts">
import { useCopy } from '@/composables/useCopy'

defineProps<{
  id: string
}>()

const { copyCodeFromElement, isCopied } = useCopy()

async function copy(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  await copyCodeFromElement(target)
}
</script>

<template>
  <span @click="copy" :data-copy-id="id" :class="['btn-copy', { copied: isCopied(id) }]">
    {{ isCopied(id) ? 'Copied!' : 'Copy' }}
  </span>
</template>
