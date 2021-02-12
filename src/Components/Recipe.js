import React from 'react';
import { Link } from 'react-router-dom';

function Recipe(props) {
    return (
        <div className = "container">
            <div className = "row">
                    {props.recipes.map((recipe) => {
                        return (
                            <div className = "col-md-4" key = {recipe._id} style = {{marginBottom: "25px"}}>
                                <div className = "recipe__box" >
                                    <img className = "recipe__box-img" src = {recipe.image_url} alt = {recipe.title}/>
                                        <div className = "recipe__text">
                                            <p className = "recipes__title">
                                                {recipe.title.length < 20? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}</p>
                                            <p className = "recipes__subtitle">Publisher: <span>{ recipe.publisher}</span></p>
                                        </div>
                                        <button className = "recipe_buttons">
                                            <Link to = {{pathname: `/recipe/${recipe._id}`,
                                          state: {recipe: recipe.title}}} >View Detail</Link>
                                        </button>
                                </div>
                            </div>
                        )
                    })}
               

            </div>
        </div>
    )
}

export default Recipe
