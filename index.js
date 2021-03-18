const yargs = require("yargs").argv;
const pcg = require("./package.json");
const {
  removeContact,
  getContactById,
  addContact,
  listContacts,
} = require("./contacts");
// ===========================
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        listContacts()
        break;
        case 'get':
            getContactById(id)
      break;

    case 'add':
        addContact(name, email, phone)
      break;

    case 'remove':
        removeContact(id)
      break;
  
  
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(yargs);


console.log(yargs);



// ==============================
// yargs.command ({
// command: "add",
// describe: "Add a contact",
// builder: {

//     name: {
//         type: "string",
//         demandOption: true,
//         describe: "contact Name",

//     },
//     email: {
//         type: "string",
//         demandOption: true,
//         describe: "contact Email",
//     },
//     phone: {
//         type: "string",
//         demandOption: true,
//         describe: "contact Phone number contact",
//     }
// },
// handler({name, email, phone}){

//     addContact(name, email, phone)
// }
// });
// yargs.command ({
// command: "read",
// describe: "read a contact",
// handler(){
//     // console.log("read a contact");
//     listContacts()

// }
// });
// yargs.command ({
// command: "remove",
// describe: "remove a contact",
// handler({id}){
//     removeContact(id)

// }
// });
// yargs.command ({
// command: "get",
// describe: "get a contact",

// handler({id}){
//     getContactById(id)

// }
// });

// yargs.parse();

// ===============================

