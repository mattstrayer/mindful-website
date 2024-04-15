<script setup lang="ts">
useHead({
  title: "mindful",
  htmlAttrs: {
    lang: "en",
    dir: "ltr",
  },
});

definePageMeta({
  colorMode: "sunset",
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
  description:
    "Browser Extension that helps you stay focused on your daily goals.",
  ogDescription:
    "Browser Extension that helps you stay focused on your daily goals.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <Header />
    <div class="container flex flex-col justify-center max-w-[600px] mx-auto h-screen">
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        coming soon
      </h1>
      <div class="mockup-browser border bg-base-300">
        <div class="mockup-browser-toolbar">
          <div class="input" />
        </div>
        <div class="flex justify-center bg-base-200">
          <img
            src="/img/extension_preview.png"
            alt="mindful-extension-preview" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
