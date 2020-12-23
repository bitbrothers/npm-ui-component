import './App.css';
import React from 'react';
import Alert from './components/bootstrap/Alert/Alert';
import Badge from './components/bootstrap/Badge/Badge';
import Aux from './hoc/Aux'


class App extends React.Component {
  render() {
    return (
      <Aux>
        <Alert />
        <Badge />
      </Aux>
    );
  }
}

export default App;
