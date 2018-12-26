import React, { Component } from 'react'
import Logo from '../static/images/Packt_Logo.png'
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

export default class App extends Component {

  state = {
    recipes: [],
    currentRecipe : null
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(data => data.json())
      .then(recipes => this.setState({ recipes }));
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(data => data.json())
      .then(recipe => this.setState({ currentRecipe :  recipe}));
  }

  render() {
    return (
      <div>
        <Header />
        <main style={{ display: "flex" }}>
          <RecipeList {...this.state} onClick={this.onRecipeClick} style={{ flex: 3 }}></RecipeList>
          <RecipeDetail recipe={this.state.currentRecipe} style={{ flex: 8 }}></RecipeDetail>
        </main>
      </div>
    )
  }
}
