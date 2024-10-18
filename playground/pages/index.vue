<template>
  <div>
    <h1>Page A</h1>

    <div class="grid">
      <div
        id="target-1"
        class="cell"
      >
        1
      </div>
      <div
        id="target-2"
        class="cell"
      >
        2
      </div>
      <div
        id="target-3"
        class="cell"
      >
        3
      </div>
      <div
        id="target-4"
        class="cell"
      >
        4
      </div>
      <div
        id="target-5"
        class="cell"
      >
        5
      </div>
      <div
        id="target-6"
        class="cell"
      >
        6
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
