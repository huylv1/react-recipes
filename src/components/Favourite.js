import React, { Component } from 'react'
import RecipeList from './RecipeList';

export default class Favourite extends Component {
  render() {

    const {recipes, favorites, toggleFavorite} = this.props;

    return (
      <div>        
        <RecipeList
            title="Favorites"
            favorites = {favorites}
            recipes = {recipes.filter(recipe => favorites.includes(recipe.id))}            
            style={{ flex: 3 }}
            onFavorited={toggleFavorite}            
          />        
      </div>
    )
  }
}
