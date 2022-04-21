<template>
  <div>
    <div class="section py-4">
      <form @submit.prevent="handleSubmit" id="form" class="card p-5">
        <h2 class="subtitle is-3">Add page</h2>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name (ex. 'help')"
              v-model="formState.name"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Title (ex. 'Help Page')"
              v-model="formState.title"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Description"
              v-model="formState.description"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Background</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Background (eg. 'is-primary')"
              v-model="formState.background"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Hero Link</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Hero link (ex. 'help')"
              v-model="formState.link"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Hero link text</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Hero link text (eg. 'Click me')"
              v-model="formState.linkText"
            />
          </div>
        </div>

        <div class="field is-grouped mt-5">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formState = ref({
  name: "",
  title: "",
  description: "",
  background: "",
  link: "",
  linkText: "",
});

const emits = defineEmits(["submitForm"])

const handleSubmit = async () => {
  emits("submitForm", formState.value)
};
</script>

<style></style>
