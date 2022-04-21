export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    await getFirestoreData("pages");
  } catch (error) {
    console.log(error.message);
  }
});
