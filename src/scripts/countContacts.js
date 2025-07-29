import { readContacts } from "../utils/readContacts.js";

export const countContacts = async (count) => {
    const parseData = await readContacts();
    for (let i = 0; i < count; i++) {
         return parseData.slice(0, count);
    }
};

console.log(await countContacts(1));
