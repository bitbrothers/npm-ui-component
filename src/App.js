import React from 'react';
import './styles.scss';

import Aux from './components/hoc/Aux';
import Project from './components/Project/Project'
import {BrowserRouter} from 'react-router-dom';
//Server Data
import data from './data'


class App extends React.Component {

  render() {

    return (
    <BrowserRouter>
      <Aux className="app">
        <Project 
        data={data}
        />
      </Aux>
    </BrowserRouter>
    );
  }
}

export default App;
