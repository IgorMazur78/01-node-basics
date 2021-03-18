const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

const contactPath = path.join(
  path.parse(__filename).dir,
  "db",
  "contacts.json"
);

// console.log(contactPath);

function listContacts() {
  fs.readFile(contactPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const jsonData = JSON.parse(data);
      if (jsonData !== []) {
        console.log(jsonData);
      } else {
        console.log("There is no data");
      }
    }
  });
}
//   listContacts();
function addContact(name, email, phone) {
  fs.readFile(contactPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const jsonData = JSON.parse(data);
      const newObject = {
        id: uniqid(),
        name: name,
        email: email,
        phone: phone,
      };

      const doubleContact = jsonData.find((e) => e.phone === phone);
      if (!doubleContact) {
        jsonData.push(newObject);
        fs.writeFile(contactPath, JSON.stringify(jsonData), (err) => {
          if (err) throw err;
          console.log("додано");
        });
      } else {
        console.log("Contact is already available");
      }
    }
  });
}
//    addContact("natasha", "natasha@gmail.com", "(050)345-78-70");
function getContactById(contactsId) {
  fs.readFile(contactPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const jsonData = JSON.parse(data);
      if (jsonData !== []) {
        const existencId = jsonData.find((e) => e.id === contactsId);
        if (existencId === undefined) {
          console.log("There is no data");
        } else {
          const item = jsonData.filter((e) => e.id === contactsId);
          console.log(item);
        }
      } else {
        console.log("There is no data");
      }
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    const array = JSON.parse(data);
    const existencId = array.find((e) => e.id === contactId);
    if (existencId === undefined) {
      console.log("does not exist");
    } else {
      const result = array.reduce((acc, item) => {
        if (item.id !== contactId) {
          acc.push(item);
        }
        return acc;
      }, []);
      fs.writeFile(contactPath, JSON.stringify(result), (err) => {
        if (err) {
          throw err;
        }
        console.log("видалено");
      });
    }
  });
}


module.exports = {
  contactPath,
  removeContact,
  getContactById,
  addContact,
  listContacts,
};
