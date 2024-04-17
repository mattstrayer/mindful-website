<script setup lang="ts">
import SectionContainer from "~/components/home/sectionContainer.vue";

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
    <div class="container flex flex-col justify-center max-w-[600px] mx-auto h-screen">
      <SectionContainer>
        <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        stay focused on your goals
      </h1>
      <p class="text-zinc-100 text-center text-4xl">plan your day out. just a few simple, achievable, goals that you want to accomplish this day. </p>
      </SectionContainer>

    </div>
    <SectionContainer>
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        new tab, same goals
      </h1>
      <p class="text-zinc-100 text-center text-4xl">mindful appears in every new tab you open. There to remind you of what you want to get done today</p>
    </SectionContainer>
    <SectionContainer>
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        block distractions with a click
      </h1>
      <p class="text-zinc-100 text-center text-4xl">with the mindful shield up, you'll be redirected to the mindful page when you try to access a distracting website</p>
      <p class="text-zinc-100 text-center">don't worry -- if you disable the shield, mindful will restore any tabs that it had blocked</p>
    </SectionContainer>
    <SectionContainer>
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        set intentions
      </h1>
      <p class="text-zinc-100 text-center text-4xl">intentions help you set adjectives about yourself that you wish to be. You'll see them on every mindful page fading in and out.</p>

    </SectionContainer>
    <SectionContainer>
      <h1 class="text-zinc-100 text-6xl text-center font-extrabold mb-4 line leading-snug p-12">
        have a zen moment
      </h1>
      <p class="text-zinc-100 text-center text-4xl">speaking of intentions fading in and out. the animation for intentions doubles as a relaxation breathing excercise.
        as a new intention shows, breathe in.
        once it is fully visible, hold your breathe.
        breathe out as it fades out.

      </p>
      <p class="text-zinc-100 text-center">
        This follows the 4-7-8 breathing pattern, which has been proven to be calming and reduce anxiety.
      </p>

    </SectionContainer>

    <Footer />
  </div>
</template>
