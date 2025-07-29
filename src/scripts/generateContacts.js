import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export async function generateContacts(number) {
    const parseData = await readContacts();

    for (let index = 0; index < number; index++) {
            const newRec = createFakeContact();
            parseData.push(newRec);
        }
        await fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2), 'utf-8');
}



generateContacts(5);
