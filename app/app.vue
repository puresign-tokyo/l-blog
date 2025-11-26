<script setup lang="ts">
defineOgImage({
  props: {
    image: "/logo_black.png",
    title: "えるろだブログ",
    description: "えるろだ開発者ブログ",
  },
});

useSeoMeta({
  ogImage: "/logo_black.png",
  twitterImage: "/logo_black.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtPage />
</template>
