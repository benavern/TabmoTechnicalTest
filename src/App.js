import React from 'react';
import Header from './components/header/Header';
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import ShopDetail from './components/pages/ShopDetail'
import Basket from './components/pages/Basket'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />

          <main>
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/shop" exact component={Shop} />
                <Route path="/shop/:pokemonName" component={ShopDetail} />

                <Route path="/basket" exact component={Basket} />

                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
