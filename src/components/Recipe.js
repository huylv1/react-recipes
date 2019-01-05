import React, { Component } from 'react'
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types'
export default class Recipe extends Component {

  state = {
    recipe : null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({
        recipe
      }));
  }

  render() {
    return (
      <div>
        <RecipeDetail recipe={this.state.recipe} style={{ flex: 8 }}/>
      </div>
    )
  }
}

PropTypes.Recipe = {
  'match' : PropTypes.object,
}
