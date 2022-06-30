import React from "react";

function Form(props) {

    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        alert("hi!");
    });

    function handleSubmit(e) {
        e.preventDefault();
        alert('Hello, world!');
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
            />
            <button type="submit" className="btn btn__primary btn__lg" onClick={() => alert("hi!")}>
                Add
            </button>
        </form>
    );
}

export default Form;
