<script setup lang="ts">
const props = defineProps<{
  answer: QuestionAnswer
}>()
</script>

<template>
  <div @click="$emit('answered', props.answer.key)">
    <span class="key">{{ props.answer.key }}</span>
    <span class="text">{{ props.answer.text }}</span>
  </div>
</template>
