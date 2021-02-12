import React, { Component } from 'react'
import './App.css';
import Form from './Components/Form';
import Recipe from './Components/Recipe';

 class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async(e) => {
    const recipeName = e.target.elements.recipename.value;
    console.log(recipeName)
    e.preventDefault()
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}&count=10`);
    const data = await api_call.json();
    //console.log(data.recipes[0].recipe_id);
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
   }
   // to get the items from the local storage 
   componentDidMount = () =>{
     const json = localStorage.getItem("recipes");
     const recipes = JSON.parse(json);
     this.setState({recipes})
   }


//used the local storage to strore the data 
   componentDidUpdate = ()=>{
     const recipes = JSON.stringify(this.state.recipes);
     localStorage.setItem("recipes", recipes);
   }
 
  render() {
    return (
        <div className = "App">
          <header className = "App-header">
          <h1 className = "App-title">Recipe App</h1>
          </header>
        <Form getRecipe = {this.getRecipe}></Form>
        <Recipe recipes = {this.state.recipes}></Recipe>
        
        </div>
    )
  }
}

export default App
