import formData from '../form-data-light.json';
export let storageData;
export const savedFields = formData.flat(1).filter(f => f.save).map(f => f.key);

const profileStorageKey = 'PROF';
const profileStorageVersion = 1;
function updateSavedData(storedData, from) {
  if (!storedData || !storedData.version) {
    return null;
  }
  if (storedData.version !== profileStorageVersion) {
    return null;
  }
  return storedData;
}
export function getSavedData() {
  let storedData = localStorage.getItem(profileStorageKey);
  if (!storedData) {
    storageData = null;
  }
  storedData = JSON.parse(storedData);
  storedData = updateSavedData(storedData);
  storageData = storedData;
}
export function saveData(data) {
  if (!data) {
    localStorage.removeItem(profileStorageKey);
    storageData = null;
  } else {
    data = getDataToSave(data);
    data.version = profileStorageVersion;
    storageData = data;
    data = JSON.stringify(data);
    localStorage.setItem(profileStorageKey, data);
  }
}

function getDataToSave(src) {
  const result = {};
  for (const key of savedFields) {
    result[key] = src[key];
  }
  return result;
}
