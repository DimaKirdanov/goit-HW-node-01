const contacts = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newBook = await contacts.add({ name, email, phone });
      return console.log(newBook);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({
  action: "add",
  name: "Dima Kirdanov",
  email: "umweltscutz@gmail.com",
  phone: "+380958439989",
});
