import React from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";

const person = props => {
  return (
    <Aux>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

// Person.PropTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number
// };
export default withClass(person, classes.Person);
