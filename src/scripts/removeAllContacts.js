import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    const count = currentContacts.length;
    if (count === 0) {
      console.log('No contacts to remove.');
      return;
    }
    await writeContacts([]);
    console.log(
      `Successfully removed all contacts. ${count} contacts were deleted.`,
    );
    return true;
  } catch (error) {
    console.error('Error removing all contacts:', error);
    throw error;
  }
};

removeAllContacts();
