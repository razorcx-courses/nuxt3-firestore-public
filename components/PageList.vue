<template>
  <div>
    <div class="section py-4">
      <div class="box p-5">
        <h2 class="subtitle is-3">Pages</h2>
        <template v-for="page in pages" :key="page.id">
          <PageDetail :page="page" @delete="handleDelete" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pages: {},
});

const emits = defineEmits(["delete"]);

const handleDelete = (page) => {
  emits("delete", page);
};
</script>

<style></style>
