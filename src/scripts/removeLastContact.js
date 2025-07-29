import { readContacts } from "../utils/readContacts.js";
import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeLastContact = async () => {
    const parseData = await readContacts();
    const lastElem = parseData.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2), 'utf-8');
};

removeLastContact();
