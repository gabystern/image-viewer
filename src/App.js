import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ImagesContainer from './containers/ImagesContainer'

class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" component={ImagesContainer} />
      </div>
    );
  }
}

export default App;
