import './App.css';
import React from 'react';
import Aux from './hoc/Aux';

//Bootstrap Components
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

//Pipeline Components
import Activity from './components/pipeline/Activity';
import Avatar from './components/pipeline/Avatar';
import AvatarList from './components/pipeline/AvatarList';
import CardList from './components/pipeline/CardList';
import ChatItem from './components/pipeline/ChatItem';
import ChatModule from './components/pipeline/ChatModule';
import Checklist from './components/pipeline/Checklist';
import DatePicker from './components/pipeline/DatePicker';
import Files from './components/pipeline/Files';
import KanbanCard from './components/pipeline/KanbanCard';
import NoteCard from './components/pipeline/NoteCard';
import ProjectCard from './components/pipeline/ProjectCard';
import TaskCard from './components/pipeline/TaskCard';
import TeamCard from './components/pipeline/TeamCard';


class App extends React.Component {

  render() {
    return (
      <Aux className="app">
       {/* <Alert 
        message="Hello world"
        type="danger" //primary, secondary, success, danger, warning, info, light, dark
        />

        <Badge 
        message="Hello World"
        type="danger" //primary, secondary, success, danger, warning, info, light, dark
        />

        <Breadcrumbs />

        <Button 
        message="Hello world"
        type="primary" //primary, secondary, success, danger, warning, info, light, dark, link
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

        <Activity 
        icon="Action Icon"
        author="Krish"
        date="Current Time"
        source="Image source"/>

        <Avatar 
        source="Image Source"
        size="sm" //sm ,lg
        />

        <AvatarList 
        source="Image Source" // multiple sources
        />

        <CardList
        title="Card List Title"
        icon="Card List Dropdown Icon"
        />

        <ChatItem 
        source="Image Source"
        author="Krish"
        date="Current Time"
        message="Chat Body"
        />

        <ChatModule />

        <Checklist />

        <DatePicker />

        <Files />

        <KanbanCard />

        <NoteCard />

        <ProjectCard />

        <TaskCard />

        <TeamCard /> */}

      </Aux>
    );
  }
}

export default App;
