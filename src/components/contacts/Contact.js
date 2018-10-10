import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  // constructor() {
  //   super();
  //   this.state = {};
  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  onShowClick = e => {
    // console.log(this.state);
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  // onDeleteClick = (id, dispatch) => {
  //   // this.props.deleteClickHandler(); //Adding to props => deleting as delete will happen in actions.js
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  //   // dispatch({ type: "DELETE_CONTACT", payload: id });
  //   // move dispatch inside propmise
  // };

  // Async method
  onDeleteClick = async (id, dispatch) => {
    try {
      // Add try-dispatch to eneble delete from State, as ectual DB doesn't exist
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  // Using function
  // renderElement() {
  //   if (this.state.showContactInfo)
  //     return (
  //       <ul className="list-group">
  //         <li className="list-group-item">Email: {this.props.contact.email}</li>
  //         <li className="list-group-item">Phone: {this.props.contact.phone}</li>
  //       </ul>
  //     );
  //   return null;
  // }

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      // Wrapping everything in Consumer
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {/* <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" /> */}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  // onClick={this.onDeleteClick} //Deleting as delete will happen in actions.js
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />

                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
              {/* When using function */}
              {/* {this.renderElement()} */}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
};

export default Contact;
