<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="handleClose"></div>
    <div class="modal-card p-3">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="handleClose"></button>
      </header>
      <section class="modal-card-body">
        <ClientOnly>
          <pre class="has-background-white">{{ page }}</pre>
        </ClientOnly>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="handleConfirm">
          Confirm Delete
        </button>
        <button class="button" @click="handleClose">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isActive: Boolean,
  page: {},
  title: String
});

const emits = defineEmits(["close", "confirm"]);

const handleClose = () => {
  emits("close");
};

const handleConfirm = () => {
  emits("confirm");
};
</script>

<style></style>
