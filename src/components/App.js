import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import Favourite from './Favourite';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

export default class App extends Component {

    state = {
        recipes: [],
        favorites:[]
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
          .then(data => data.json())
          .then(recipes => this.setState({ recipes }));
      }

    toggleFavorite = id => {
        this.setState(({favorites, ...state}) => {
          let favorited = favorites.includes(id);
          if (favorited) {
            return {...state, favorites : favorites.filter(f => f !== id)}  
          } else {
            return {...state, favorites : [...favorites, id]}  
          }      
        });
      }

    render() {
        return (
            <BrowserRouter>
                <main>      
                    <Header />                
                    <Switch>         
                        <Redirect from="/home" to="/"/>               
                        <Route exact path="/" render={() => <Home {...this.state} toggleFavorite={this.toggleFavorite}/>}/>
                        <Route path="/favourite" render={() => <Favourite {...this.state} toggleFavorite={this.toggleFavorite}/>} />
                        <Route path="/recipe/:id" component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}
