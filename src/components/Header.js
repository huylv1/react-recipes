import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const HeaderLink = ({children, ...props}) => {
  return (
    <NavLink exact className="mx-2 px-3" activeClassName="bg-secondary text-white" {...props}>
        {children}
    </NavLink>
  )
}

HeaderLink.propTypes = {

}

export default class Header extends Component {
  render() {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="px-4">My Recipe</h1>
        <nav>
            <HeaderLink to="/">
                Home
            </HeaderLink>
            <HeaderLink to="/favourite">
                Favourite
            </HeaderLink>            
        </nav>
      </header>
    );
  }
}
