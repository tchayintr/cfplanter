import React from 'react';
import { createBrowserHistory } from 'history'
import './App.css';

import * as Constants from './constants/App';
import Header from './components/header';
import Navigation from './components/navigation';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: createBrowserHistory(),
    };  
  }

  shouldComponentUpdate = () => {
    return false;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation history={this.state.history} />
        <div id="version">{ Constants.VERSION }</div>
      </div>
      
    );
  }
}


export default App;