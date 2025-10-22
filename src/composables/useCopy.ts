import { ref } from 'vue'

export function useCopy() {
  const copiedIds = ref<Set<string>>(new Set())
  const error = ref<string | null>(null)

  async function copyCodeFromElement(el: HTMLElement) {
    const code = el.closest('p')?.querySelector('code')
    const textToCopy = code?.textContent

    if (!textToCopy) {
      return false
    }

    try {
      await navigator.clipboard.writeText(textToCopy)
      error.value = null

      const id = el.dataset.copyId || textToCopy
      copiedIds.value.add(id)

      setTimeout(() => {
        copiedIds.value.delete(id)
      }, 1000)

      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Błąd kopiowania'
      console.error('Błąd kopiowania:', err)
      return false
    }
  }

  function isCopied(id: string) {
    return copiedIds.value.has(id)
  }

  return {
    copiedIds,
    error,
    copyCodeFromElement,
    isCopied,
  }
}
