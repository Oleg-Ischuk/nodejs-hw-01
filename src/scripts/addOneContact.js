import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
    console.log(`Successfully added a new contact: ${newContact.name}`);
    console.log(`Total contacts: ${updatedContacts.length}`);

    return newContact;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

addOneContact();
