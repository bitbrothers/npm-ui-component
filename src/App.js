import './App.css';
import React from 'react';
import Aux from './hoc/Aux'

import Alert from './components/bootstrap/Alert';
import Badge from './components/bootstrap/Badge';
import Breadcrumbs from './components/bootstrap/Breadcrumbs';
import Button from './components/bootstrap/Button';
import Card from './components/bootstrap/Card';
import Dropwdown from './components/bootstrap/Dropwdown';
import Form from './components/bootstrap/Form';
import InputGroup from './components/bootstrap/InputGroup';
import ListGroup from './components/bootstrap/ListGroup';
import Nav from './components/bootstrap/Nav';
import Navbar from './components/bootstrap/Navbar';
import ProgressBar from './components/bootstrap/ProgressBar';
import Toast from './components/bootstrap/Toast';
import Tooltips from './components/bootstrap/Tooltips';



class App extends React.Component {

  render() {
    return (
      <Aux>
        <Alert 
        message="Hello world"
        type="danger"
        />

        <Badge 
        message="Hello World"
        type="danger"
        />

        <Breadcrumbs />

        <Button 
        message="Hello world"
        type="primary"
        />

        <Card 
        title="Card Title"
        message="Hello World"
        link="https://pipeline.mediumra.re/components-bootstrap.html"
        linkText="Click Me!"
        /> 

        <Dropwdown />

        <Form />

        <InputGroup />

        <ListGroup />

        <Nav />

        <Navbar />

        <ProgressBar />

        <Toast />

        <Tooltips />

      </Aux>
    );
  }
}

export default App;
