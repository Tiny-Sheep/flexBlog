import React, { Component } from 'react'
import { NavContainer, NavItem } from '../themes'

export default class NavBar extends Component {

  render() {
    return (
      <NavContainer>
        <NavItem to='/' color='	#000000'  >Home</NavItem>
        <NavItem to='/projects' color='	#000000' >Projects</NavItem>
        <NavItem to='/resume' color='	#000000' >Resume</NavItem>
      </NavContainer>

    )
  }
}