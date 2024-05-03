<script setup lang="ts">
useHead({
  title: "mindful",
  htmlAttrs: {
    lang: "en",
    dir: "ltr",
  },
});

defineOgImageComponent("NuxtSeo", {
  title: "mindful",
  subtitle: "stay focused on your daily goals ",
  colorMode: "dark",
  theme: "#7582ff",
});

useSeoMeta({
  title: "mindful - stay focused",
  ogTitle: "mindful - stay focused",
  description: "Browser Extension that helps you stay focused on your daily goals.",
  ogDescription: "Browser Extension that helps you stay focused on your daily goals.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <Header />
    <div class="container flex flex-col justify-center max-w-[600px] mx-auto h-screen">
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        support 🤝
      </h1>
    </div>

    <Footer />
  </div>
</template>

<style lang="css"></style>
