import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <div>Home</div>
        <div>Projects</div>
        <div>Resume</div>
      </div>
    )
  }
}