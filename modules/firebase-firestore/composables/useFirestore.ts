export const getFirestoreData = async (col: string) => {
  try {
    const content = useContent();

    const { result } = await $fetch(endpoints.firestore.query(col));
    content.value[col] = result;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const addFirestoreData = async (col: string, doc: {}) => {
  try {
    const { result } = await $fetch(endpoints.firestore.add(col), {
      method: "POST",
      body: doc,
    });

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFirestoreData = async (col: string, id: string) => {
  try {
    const { result } = await $fetch(endpoints.firestore.delete(col, id));

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
