import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import './App.css';
// import './album.css';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/product/:id' component={ProductPage} />
        </Switch>
        <Footer />      
      </div>
    );
  }
}

export default App;