import React, { Component } from "react";
import Contact from "./Contact";
// import AddContact from "./AddContact";

import { Consumer } from "../../context";

class Contacts extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       contacts: [
  //         {
  //           id: 1,
  //           name: "Alex",
  //           email: "alex@gmail.com",
  //           phone: "111-111-111"
  //         },
  //         {
  //           id: 2,
  //           name: "Ira",
  //           email: "ira@gmail.com",
  //           phone: "222-222-222"
  //         },
  //         {
  //           id: 3,
  //           name: "Barnie",
  //           email: "meow@gmail.com",
  //           phone: "333-333-333"
  //         }
  //       ]
  //     };
  //   }

  // move to context.js in src folder.
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "Alex",
  //       email: "alex@gmail.com",
  //       phone: "111-111-111"
  //     },
  //     {
  //       id: 2,
  //       name: "Ira",
  //       email: "ira@gmail.com",
  //       phone: "222-222-222"
  //     },
  //     {
  //       id: 3,
  //       name: "Barnie",
  //       email: "meow@gmail.com",
  //       phone: "333-333-333"
  //     }
  //   ]
  // };

  // Removing item from child element => Removing as deleting will happen in actions.js
  // deleteContact = id => {
  //   // console.log(id);
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id); //Filter and add contacts where contact.ID is not equal to passed ID
  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    // Need to return consumer and wrap everything inside
    return (
      <Consumer>
        {value => {
          //Value defined in context.js(this case is this.state)
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> list
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)} // Getting props from Contact.js and binding to ID of the object => remove as deleting will happen in actions.js
                />
              ))}
              {/* Possible to nest fragment inside other fragment */}
              {/* <AddContact />  */}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
