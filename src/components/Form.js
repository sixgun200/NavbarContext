import React, { useState, useContext } from 'react';
import NavbarContext from '../context/NavbarContext';
import styles from './Form.module.css';

// set the context variable to state
// Create a form with input field to retrieve a person's name
// Store the name in the context/state variable

const Form = () => {
    const {person, setPerson} = useContext(NavbarContext);

    const onChangeHandler = (e) => {
        setPerson(e.target.value);
    }

    return (
        <div className="row">
            <h1 className={"col-3 mt-3 text-right"}>Your Name:</h1>
            <form className="form-row">
                <input className={`form-control-lg mt-4 ${styles.inputBox}`} type="text" name="person" placeholder="Please enter your name" onChange={onChangeHandler} value={person} />
            </form>

        </div>
    );
}

export default Form;
