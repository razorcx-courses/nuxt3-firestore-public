<template>
  <div class="section tabs is-toggle py-0 m-0">
    <ul>
      <li
        :class="{ 'is-active': isActive === 'list' }"
        @click="handleChange('list')"
      >
        <a>
          <span class="icon is-small"
            ><i class="fas fa-list" aria-hidden="true"></i
          ></span>
          <span>Page List</span>
        </a>
      </li>
      <li :class="{ 'is-active': isActive === 'add' }" @click="handleChange('add')">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-file" aria-hidden="true"></i
          ></span>
          <span>Add New Page</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const emits = defineEmits(["activeTab"]);
const isActive = ref("list");

const handleChange = (tab) => {
  isActive.value = tab;
  emits("activeTab", tab);
};
</script>

<style></style>
