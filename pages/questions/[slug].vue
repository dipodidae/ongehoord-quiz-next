<script setup lang="ts">
const { page } = useContent<Question>()
</script>

<template>
  <section>
    <header>
      <h1>
        {{ page.title }}
      </h1>
    </header>
    <main>
      <NuxtPage />
    </main>
  </section>
</template>
