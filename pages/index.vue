<script setup lang="ts">
const { firstQuestion } = await useQuestions()
</script>

<template>
  <div v-if="firstQuestion">
    <nuxt-link :to="firstQuestion._path">
      Start quiz
    </nuxt-link>
  </div>
</template>
