import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove. The db.json file is already empty.');
      return false;
    }
    const removeLastContact = contacts[contacts.length - 1];
    contacts.pop();
    await writeContacts(contacts);
    console.log(
      `Successfully removed the last contact: ${removeLastContact.name}`,
    );
    console.log(`Remaining contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error removing the last contact:', error);
    throw error;
  }
};

removeLastContact();
