import React, { Component } from 'react'

export default class RecipeList extends Component {

    

    render() {
        const {recipes} = this.props;
        return (            
            <div style={this.props.style}>
                <h2>Recipes &lt;{recipes.length}&gt;</h2>
                <ul>
                    {recipes.map((recipe, i) => 
                        <li key={i} onClick={() => this.props.onClick(recipe.id)} className="px-2 py-2 pointer border-bottom-dashed">
                            <span>{recipe.name}</span>
                            <span>{recipe.category}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
