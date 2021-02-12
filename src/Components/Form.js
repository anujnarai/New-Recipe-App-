import React from 'react'
function Form(props) {
    return (
        <form onSubmit = {props.getRecipe} style = {{marginBottom: "25px"}}>
            <input className = "form__input" type = "text" placeholder = "search" name = "recipename" />
            <button className = "form__button">Search</button>
        </form>
    )
}

export default Form
