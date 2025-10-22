import { ref, type Ref } from 'vue'

export function useRefresh<T>(initialValue: T[]) {
  const items = ref([...initialValue]) as Ref<T[]>
  const original = [...initialValue]
  const refreshKey = ref(0)

  function refresh() {
    items.value = [...original]
    refreshKey.value++
  }

  return {
    items,
    refreshKey,
    refresh,
  }
}
