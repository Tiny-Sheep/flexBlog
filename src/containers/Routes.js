import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { App, Projects, Resume } from '.';


export default class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
      </Switch>
    )
  }
}