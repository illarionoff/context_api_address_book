import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; //Chnaged BrowserRouter to HashRouter
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layouts/Header";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/about";
import Test from "./components/test/Test";
import NotFound from "./components/pages/NotFound";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css"; //npm install bootstrap
import "./App.css";

class App extends Component {
  render() {
    return (
      // Wrap everything in provider
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
