import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RecipeListItem extends Component {
    render() {
        const {onFavorited, onClick, recipe, checked} = this.props;

        return (
            <li
                onClick={() => onClick(recipe.id)}
                className="px-2 py-2 pointer border-bottom-dashed"
            >
                <input type="checkbox" checked={checked} onClick={(e) => { e.stopPropagation(); onFavorited(recipe.id); }} />
                <span className="d-inline-block px-2">{recipe.name}</span>-
                <span className="d-inline-block px-2">{recipe.category}</span>

                <Link to={`/recipe/${recipe.id}`} style={{ color: '#007bff'}}>See More</Link>
            </li>
        )
    }
}
