// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const { program } = require("commander");
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
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const removeByID = await contacts.removeContact(id);
      return console.log(removeByID);

    case "update":
      const updateContact = await contacts.updateByID(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Dima Kirdanov",
//   email: "umweltscutz@gmail.com",
//   phone: "+380958439989",
// });
// invokeAction({
//   id: "rsKkOQUi80UsgVPCcLZZW",
//   action: "update",
//   name: "Ivan Ivanov",
//   email: "IvanIvanov@gmail.com",
//   phone: "5738579",
// });
// invokeAction({
//   id: "wLIaWRAM3oJfsWfKvyw5A",
//   action: "remove",
// });

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");
program.parse();
const options = program.opts();
invokeAction(options);
