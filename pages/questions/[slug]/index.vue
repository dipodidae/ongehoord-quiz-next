<script setup lang="ts">
const { page } = useContent<Question>()
</script>

<template>
  <section v-if="page.answers">
    <QuestionAnswer v-for="answer in page.answers" :key="`answer-${answer.key}`" :answer="answer" />
  </section>
</template>
