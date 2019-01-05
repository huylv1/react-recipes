import React, { Component } from 'react';
import RecipeListItem from './RecipeListItem';

export default class RecipeList extends Component {
    

  render() {
    const { recipes, ...props } = this.props;
    return (
      <div style={props.style}>
        <h2 className="px-4 display-4">{props.title} &lt;{recipes.length}&gt;</h2>
        <ul>
          {recipes.map((recipe, i) => (
              <RecipeListItem checked={props.favorites.includes(recipe.id)} key={i} recipe={recipe} {...props}/>            
          ))}
        </ul>
      </div>
    );
  }
}
