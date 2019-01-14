export const localStorageSetItem = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const localStorageGetItem = key => JSON.parse(localStorage.getItem(key));

export const localStorageRemoveItem = key => localStorage.removeItem(key);
