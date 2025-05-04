import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const NewContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...existingContacts, ...NewContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Successfully added ${number} new contacts. Total contacts: ${updatedContacts.length}`,
    );
    return updatedContacts;
  } catch (error) {
    console.error('Error generating contacts:', error);
    throw error;
  }
};

generateContacts(3);
