<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4">
      <NuxtLink class="link link-hover" to="/about">about</NuxtLink>
      <NuxtLink class="link link-hover" to="/download">download</NuxtLink>
      <NuxtLink class="link link-hover" to="/support">support</NuxtLink>
    </nav>

    <aside>
      <p>copyright © {{ new Date().getFullYear() }} | all rights reserved | matt strayer</p>
    </aside>
  </footer>
</template>

<script setup lang="ts">
// 100% privacy-first analytics

useHead({
  noscript: [
    {
      innerHTML:
        '<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />',
    },
  ],
  script: [{ src: "https://scripts.simpleanalyticscdn.com/latest.js", async: true, defer: true }],
});
</script>
