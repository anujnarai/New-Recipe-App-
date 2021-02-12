import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeDetail extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async() => {
            const title = this.props.location.state.recipe;
            const req = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${ title }`);
            const response = await req.json();
            //console.log(data.recipes[0].recipe_id);
            //console.log(response)
           this.setState({activeRecipe: response.recipes[0] })
           console.log(this.state.activeRecipe)

    }



    render(){
        const recipe = this.state.activeRecipe;
        console.log("$$$$$$$$")
        console.log(this.props)
        return(
            <div className = "container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className = "active-recipe__img">
                        <img className = "active-recipe" src = {recipe.image_url} alt = {recipe.title} />
                        <h3 className = "active-recipe__title ">{recipe.title}</h3>
                        <h4 className = "active-recipe__publisher ">Publisher: {recipe.publisher}</h4>
                        <p className = ".active-recipe__website">Website: <span><a href = {recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                        <button className = "active-recipe__button ">
                           <Link to = "/">Back</Link> 
                        </button>
                    </div>
                }
                
            </div>
        );
    }

}

export default RecipeDetail;