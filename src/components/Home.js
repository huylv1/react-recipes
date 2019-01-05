import React, { Component } from 'react';
import Logo from '../static/images/Packt_Logo.png';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

export default class Home extends Component {
  state = {
    currentRecipe: null
  };

  

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(data => data.json())
      .then(recipe => this.setState({ currentRecipe: recipe }));
  };

  

  render() {
    const {currentRecipe} = this.state;
    const {toggleFavorite} = this.props;

    return (      
      <div>        
        <main style={{ display: 'flex' }}>
          <RecipeList
            title="Recipes"
            {...this.props}
            onClick={this.onRecipeClick}
            style={{ flex: 3 }}
            onFavorited={toggleFavorite}            
          />
          <RecipeDetail recipe={currentRecipe} style={{ flex: 8 }} />
        </main>
      </div>
    );
  }
}
