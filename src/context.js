import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        // adding new contact to state using spread operator
        contacts: [action.payload, ...state.contacts]
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {  //Delete default data
      //   id: 1,
      //   name: "Alex",
      //   email: "alex@gmail.com",
      //   phone: "111-111-111"
      // },
      // {
      //   id: 2,
      //   name: "Ira",
      //   email: "ira@gmail.com",
      //   phone: "222-222-222"
      // },
      // {
      //   id: 3,
      //   name: "Barnie",
      //   email: "meow@gmail.com",
      //   phone: "333-333-333"
      // }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // Fetch API
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         contacts: data
  //       })
  //     );
  // }

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => this.setState({ contacts: res.data }));
  // }

  // Async method
  async componentWillMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; // Can export only Context
