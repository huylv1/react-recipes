import React, { Component } from 'react';

export default class RecipeDetail extends Component {
  render() {
    const { recipe } = this.props;

    if (!recipe) {
      return (
        <p style={this.props.style}>
          Please select a recipe to see the detail.
        </p>
      );
    }

    return (
      <div style={this.props.style}>
        <h2 className="display-4">{recipe.name}</h2>
        <img src={recipe.image} height={500} />
      </div>
    );
  }
}
