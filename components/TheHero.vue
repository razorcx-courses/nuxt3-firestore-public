<template>
  <section class="hero" :class="[pageContent?.background, heroSize]">
    <div class="hero-body is-flex-direction-column is-justify-content-center">
      <p class="title">{{ pageContent?.title }}</p>
      <p class="subtitle">{{ pageContent?.description }}</p>
      <NuxtLink
        :to="pageContent?.link"
        v-if="pageContent?.link"
        class="button is-primary has-text-dark"
        >{{ pageContent?.linkText }}</NuxtLink
      >
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  pageContent: Object,
  heroSize: String,
});
</script>

<style></style>
