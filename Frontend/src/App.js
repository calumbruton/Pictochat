import React, { Component } from 'react';
import HomePage from './javascript/pages/homePage'
import LandingPage from './javascript/pages/landingPage'
import AppRouter from './javascript/routes/appRouter'
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;
