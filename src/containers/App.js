import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  state = {
    persons: [
      { id: "dkfsf1", name: "Ema", age: 23 },
      { id: "fdksd2", name: "Gaetan", age: 24 },
      { id: "fkels3", name: "clara", age: 20 }
    ],
    showPersons: false
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <Aux>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);