<template>
  <div>
    <NuxtLayout :name="layout">
      <TheHero :pageContent="pageContent" :heroSize="heroSize" />
    </NuxtLayout>
  </div>
</template>

<script setup>
const meta = definePageMeta({
  layout: false,  //turn off automatic "default.vue" layout
});
const route = useRoute();
const content = useContent();
const layout = ref("default");

const pageContent = computed(() => {
  return getPageContent(content, route);
});

const heroSize = computed(() => {
  const isErrorPage = pageContent.value.name === "error" ? true : false;
  layout.value = isErrorPage ? "error" : "default";
  return isErrorPage ? "is-fullheight" : "is-medium";
});
</script>

<style></style>
