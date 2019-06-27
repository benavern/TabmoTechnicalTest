import React from 'react';
import Header from './components/header';
import List from './components/list';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
