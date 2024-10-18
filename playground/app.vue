<template>
  <!-- Page Navigation -->
  <NavigationButtons />

  <!-- Teleport the "Subject" component to the target CSS selector inside the page -->
  <client-only>
    <Teleport
      v-show="isTargetPresent"
      :to="targetId"
    >
      <ExampleComponent />
    </Teleport>
  </client-only>

  <!-- Page content -->
  <NuxtPage />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useMutationObserver } from '@vueuse/core'

// Default the <Teleport> target to the SSR-friendly '#teleports' element
const targetId = ref('#teleports')
const isTargetPresent = ref(false)

const checkTargetPresence = () => {
  const target = document.querySelector('#target-5')
  isTargetPresent.value = !!target
}

onMounted(() => {
  // Initial check
  checkTargetPresence()

  // Set up mutation observer
  const observer = useMutationObserver(document.body, () => {
    checkTargetPresence()
  }, {
    childList: true,
    subtree: true,
  })

  // Clean up observer on component unmount
  onUnmounted(() => {
    observer.stop()
  })
})

// Watch for changes in target presence and the page route
const route = useRoute()
watch([isTargetPresent, route], () => {
  targetId.value = '#teleports'
  nextTick(() => {
    targetId.value = isTargetPresent.value ? '#target-5' : '#teleports'
  })
})
</script>

<style>
body {
  background: url('/background.jpg') no-repeat center center fixed;
  background-size: cover;
}

h1 {
  font-size: 40px;
  font-family: "PP Neue Montreal", sans-serif;
  display: block;
  width: 100%;
  text-align: center;
  margin: 80px auto 0;
  font-weight: 500;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 600px;
  aspect-ratio: 1;
  margin: 80px auto;
}

.cell {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "JetBrains Mono", monospace;
  user-select: none;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.1) 0 13px 27px -5px, rgba(0, 0, 0, 0.2) 0 8px 16px -8px;
  border-radius: 5px;
}

nav ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 40px;
  left: 40px;
}
</style>
