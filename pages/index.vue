<script setup lang="ts">
useHead({
  title: "mindful",
  htmlAttrs: {
    lang: "en",
    dir: "ltr"
  }
})

definePageMeta({
  colorMode: "sunset"
})
</script>

<template>
  <div class="container flex flex-col justify-center max-w-[600px] mx-auto">
    <h1
      class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug">
      be<br />mindful
    </h1>

    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
  </div>
</template>
