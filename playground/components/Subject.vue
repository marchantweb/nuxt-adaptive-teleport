<script setup lang="ts">
const isMounted: Ref<boolean> = ref(false)
const countdown: Ref<number> = ref(5)

const startCountdown = () => {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      isMounted.value = true
    }
  }, 1000)
}

onMounted(() => {
  startCountdown()
})
</script>

<template>
  <div :class="{ 'subject': true, 'subject--mounted': isMounted }">
    <span v-if="isMounted">Mounted</span>
    <span v-else>Mounting ({{ countdown }}s)</span>
  </div>
</template>

<style scoped>
.subject {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#dc0033, #880020);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  border-radius: 5px;
  color: white;

  &.subject--mounted {
    background: linear-gradient(#00dc7a, #01ac5f);
  }
}
</style>
