<template>
  <client-only>
    <Teleport
      v-show="isTargetPresent"
      :to="currentTarget"
    >
      <slot />
    </Teleport>
  </client-only>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useMutationObserver } from '@vueuse/core'
import { useRoute } from 'vue-router'

const props = defineProps<{
  to: string
}>()

const currentTarget = ref('#teleports')
const isTargetPresent = ref(false)

const checkTargetPresence = () => {
  const target = document.querySelector(props.to)
  isTargetPresent.value = !!target
}

onMounted(() => {
  checkTargetPresence()

  const observer = useMutationObserver(document.body, () => {
    checkTargetPresence()
  }, {
    childList: true,
    subtree: true,
  })

  onUnmounted(() => {
    observer.stop()
  })
})

const route = useRoute()
watch([isTargetPresent, () => route.fullPath], () => {
  currentTarget.value = '#teleports'
  nextTick(() => {
    currentTarget.value = document.querySelector(props.to) ? props.to : '#teleports'
  })
})
</script>
