import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { App, Portfolio } from './';


export default class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    )
  }
}