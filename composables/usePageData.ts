export const getPageContent = (content, route) => {
  if (route.params.name) {
    const pageData = getPageDate(content, route.params?.name[0]);
    return pageData ? pageData : getPageDate(content, "error");
  } else if (route.name) {
    return getPageDate(content, route.name);
  } else {
    return getPageDate(content, "error");
  }
};

export const getPageDate = (content, name) => {
  const data = content.value?.pages?.filter((p) => p.name == name);
  if (data.length) return data[0];
};
