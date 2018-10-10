import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  // use [e.target.name] to specify state target

  // onSubmit = (dispatch, e) => {

  // Making it Async
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);
    const { name, email, phone } = this.state;

    // Check for error
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is requird" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    // axios
    //   .post("https://jsonplaceholder.typicode.com/users", newContact)
    //   .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    //Adding async method
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // move dispatch inside promise
    // dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      // Wrap eveything in Cosumer to add to Context
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Contact</div>
              <div className="card-body">
                {/* binding submit to dispatch */}
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <div className="form-group"> Moved to TextInputGroup
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Add name"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}
                  {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Add email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div> */}
                  {/* <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Add phone"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>

      //   return (
      //     <div className="card mb-3">
      //     <div className="card-header">Contact</div>
      //     <div className="card-body">
      //       <form onSubmit={this.onSubmit}>
      //         <div className="form-group">
      //           <label htmlFor="name">Name</label>
      //           <input
      //             type="text"
      //             className="form-control form-control-lg"
      //             placeholder="Add name"
      //             name="name"
      //             value={name}
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="email">Email</label>
      //           <input
      //             type="email"
      //             className="form-control form-control-lg"
      //             placeholder="Add email"
      //             name="email"
      //             value={email}
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="phone">Phone</label>
      //           <input
      //             type="text"
      //             className="form-control form-control-lg"
      //             placeholder="Add phone"
      //             name="phone"
      //             value={phone}
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <input
      //           type="submit"
      //           value="Add Contact"
      //           className="btn btn-block btn-dark"
      //         />
      //       </form>
      //     </div>
      //   </div>
      //   )
    );
  }
}

export default AddContact;
