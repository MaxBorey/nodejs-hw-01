import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const parseData = await readContacts();
    const newContact = createFakeContact();
    parseData.push(newContact);
    await writeContacts(parseData);
};

addOneContact();
