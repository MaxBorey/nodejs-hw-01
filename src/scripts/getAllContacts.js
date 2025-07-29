import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const parseData = await readContacts();
    return parseData;
};

console.log(await getAllContacts());
