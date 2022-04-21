<template>
  <article class="message" :class="page.background">
    <div class="message-header" @click="isExpanded = !isExpanded">
      <p class="">{{ page.title }}</p>
      <button
        class="delete"
        aria-label="delete"
        @click="handleDelete(page)"
      ></button>
    </div>
    <div class="message-body" v-if="isExpanded">
      <ClientOnly>
        <pre>{{ page }}</pre>
      </ClientOnly>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  page: {},
});

const emits = defineEmits(["delete"]);

const isExpanded = ref(false);

const handleDelete = (page) => {
  emits("delete", page);
};
</script>

<style scoped></style>
