import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const addOneContact = async (contact) => {
    const parseData = await readContacts();
    parseData.push(contact);
    await writeContacts(parseData);
};


addOneContact({
  id: "test",
  name: "Max Borey",
  phone: "+380983443400",
  email: "maxborey@gmail.com",
  job: "Fulstack developer"
});
