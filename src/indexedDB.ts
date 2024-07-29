import { openDB } from 'idb';
import { FormData } from './store/types';

const dbPromise = openDB('MyDatabase', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('formStore')) {
      db.createObjectStore('formStore', { keyPath: 'id', autoIncrement: true });
    }
  },
});

export async function addValue(formData: FormData): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction('formStore', 'readwrite');
  const store = tx.objectStore('formStore');
  await store.add(formData);
  await tx.done;
}

export async function getAllValues(): Promise<FormData[]> {
  const db = await dbPromise;
  const tx = db.transaction('formStore', 'readonly');
  const store = tx.objectStore('formStore');
  const allValues = await store.getAll();
  await tx.done;
  return allValues;
}
