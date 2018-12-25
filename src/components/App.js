import React, { Component } from 'react'
import Logo from '../static/images/Packt_Logo.png'
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

export default class App extends Component {

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`).then(data => data.json()).then(json => console.log(json));
  }

  render() {
    return (
      <div>
        <Header/>
        <main style={{ display : "flex"}}>
          <RecipeList style={{flex: 3}}></RecipeList>
          <RecipeDetail style={{flex: 8}}></RecipeDetail>
        </main>
      </div>
    )
  }
}
