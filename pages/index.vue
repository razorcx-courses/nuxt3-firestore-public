<template>
  <div>
    <NuxtLayout>
      <TheHero :pageContent="pageContent" heroSize="is-fullheight"/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const content = useContent();

const pageContent = computed(() => {
  return getPageContent(content, route);
});
</script>

<style></style>
