import { Bundle } from './defs';

export const getBundles = async () => {
  const localStorageValue = await localStorage.getItem('forms');
  return localStorageValue ? JSON.parse(atob(localStorageValue)) : [];
};

export const saveBundle = async (newBundle: Bundle) => {
  const bundles = await getBundles();
  localStorage.setItem('forms', btoa(JSON.stringify([...bundles, newBundle])));
};
