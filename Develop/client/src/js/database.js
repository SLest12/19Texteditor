import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Database and version
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  // Get all request
  const request = store.getAll();
  const result = await request;
  console.log("🚀 - data read from database", result);
  return result.value;
};

initdb();