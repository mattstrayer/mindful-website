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
      mindful
    </h1>

    <h3 class="prose">coming soon</h3>
    <div class="mockup-browser border bg-base-300">
      <div class="mockup-browser-toolbar">
        <div class="input" />
      </div>
      <div class="flex justify-center bg-base-200">
        <img src="/img/extension_preview.png" alt="mindful-extension-preview" />
      </div>
    </div>
  </div>

  <Footer />
</template>
