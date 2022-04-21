export const endpoints = {
  firestore: {
    add: (col?: string) => `/api/firestore/add?col=${col}`,
    delete: (col: string, id: string) => `/api/firestore/delete?col=${col}&id=${id}`,
    query: (col: string) => `/api/firestore/query?col=${col}`,
  },
};
