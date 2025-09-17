<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <VCard v-if="page" class="mx-auto" max-width="960">
    <VCardText>
      <ContentRenderer :value="page" />
    </VCardText>
  </VCard>
</template>
