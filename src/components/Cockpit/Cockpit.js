import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  let assignedClasses = [];
  let btnClass = "";
  if (props.shoPersons) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> hi, I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;
