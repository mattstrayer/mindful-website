<template>
  <footer
    class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">about</a>
      <a class="link link-hover">download</a>
      <a class="link link-hover">contact</a>
    </nav>

    <aside>
      <p>
        copyright © {{ new Date().getFullYear() }} | all rights reserved | matt
        strayer
      </p>
    </aside>
  </footer>
</template>
