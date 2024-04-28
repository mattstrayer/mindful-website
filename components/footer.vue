<template>
  <footer
    class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4">
      <NuxtLink class="link link-hover" to="/about">about</NuxtLink>
      <NuxtLink class="link link-hover" to="/download">download</NuxtLink>
      <NuxtLink class="link link-hover"to="/support" >support</NuxtLink>
    </nav>

    <aside>
      <p>
        copyright © {{ new Date().getFullYear() }} | all rights reserved | matt
        strayer
      </p>
    </aside>
  </footer>
</template>
