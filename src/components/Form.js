
import React, { useState } from "react";


function Form(props) {
    const [name, setName] = useState('');


    // const btn = document.querySelector('button');

    // btn.addEventListener('click', () => {
    //     alert("hi!");
    // });

    function handleSubmit(e) {
        e.preventDefault();
        alert('Added successfully!');
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask("Say hello!");
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
            />

            <button type="submit" className="btn btn__primary btn__lg" onClick={() => alert("hi!")}>
                Add
            </button>
        </form>
    );
}

export default Form;
