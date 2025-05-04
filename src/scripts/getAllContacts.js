import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts found.');
    } else {
      console.log(`Found ${contacts.length} contacts in db.json.`);
    }
    return contacts;
  } catch (error) {
    console.log('Error getting all contacts', error);
    throw error;
  }
};

console.log(await getAllContacts());
