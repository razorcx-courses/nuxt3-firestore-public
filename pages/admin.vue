<template>
  <div>
    <TheModal
      :isActive="showModal"
      :page="selectedPage"
      title="Confirm Delete"
      @close="showModal = !showModal"
      @confirm="handleConfirm"
    />
    <NuxtLayout>
      <TheHero :pageContent="pageContent" />
      <div class="container mt-4">
        <AdminTabs @activeTab="handleChangeTab" />
        <TheAdminForm @submitForm="handleSubmit" v-if="showTab === 'add'"/>
        <PageList :pages="content?.pages" @delete="handleDelete" v-if="showTab === 'list'"/>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const content = useContent();
const showModal = ref(false);
const selectedPage = ref();
const showTab = ref("list");

const pageContent = computed(() => {
  return getPageContent(content, route);
});

const handleSubmit = async (formState) => {
  const result = await addFirestoreData("pages", formState);
  document.getElementById("form").reset();
  await getFirestoreData("pages");
};

const handleDelete = (page) => {
  selectedPage.value = page;
  showModal.value = true;
};

const handleConfirm = async () => {
  showModal.value = false;
  await deleteFirestoreData("pages", selectedPage.value.id);
  await getFirestoreData("pages");
};

const handleChangeTab = async (tab) => {
  showTab.value = tab;
};
</script>

<style></style>
