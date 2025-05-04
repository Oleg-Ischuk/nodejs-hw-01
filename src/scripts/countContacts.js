import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return `Total contacts in db.json: ${contacts.length}`;
};

console.log(await countContacts());
