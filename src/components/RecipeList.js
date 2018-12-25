import React, { Component } from 'react'

export default class RecipeList extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Recipe Title</span>                
                <span>Recipe Description</span>                
            </li>
            <li>
                <span>Recipe Title</span>                
                <span>Recipe Description</span>                
            </li>
            <li>
                <span>Recipe Title</span>                
                <span>Recipe Description</span>                
            </li>
        </ul>
      </div>
    )
  }
}
