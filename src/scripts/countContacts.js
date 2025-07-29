import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const parseData = await readContacts();
    return parseData.length;
};

console.log(await countContacts());
