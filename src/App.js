import './App.css';
import React from 'react';
import Aux from './hoc/Aux';
import $ from 'jquery';

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
import logo from './assets/avatar-male-3.jpg';
import logo1 from './assets/avatar-male-4.jpg';
import logo2 from './assets/avatar-female-2.jpg';
import logo3 from './assets/logo.svg';

import Sidebar from './components/menu/Sidebar'
import './styles.scss';

class App extends React.Component {

  state = {
    common:{
      message: "Hello World, this is a component!",
      type: "primary",
      title:"Main Title"
    },
    people:{
      url:[logo,logo1,logo2]
    }
  }

  componentDidMount(){
    this.sidebarCollapse();
    this.menu();
    this.dropdown();
    this.carousel('.js-carousel-item-pages','.js-carousel-first', 3000);
    this.carousel('.js-carousel-item-component-left','.js-carousel-second', 3000);
    this.carousel('.js-carousel-item-component-right','.js-carousel-third', 4000);
  }

  sidebarCollapse(){
    $('.js-btn-collaspe').on('click', function(){
      $('.js-sidebar-collapse').toggleClass('left-sidebar__collapse--visible');
  
      $('.overlay-mobile').fadeToggle('200');
  
      $('.overlay-mobile').on('click', function(){         
        $('.js-sidebar-collapse').removeClass('left-sidebar__collapse--visible');
        $(this).fadeOut();
      });
    })
  }
 
  //Menu 
  menu(){
    $('.js-menu-item').each(function () {
      $(this).children('.js-menulink').on('click', function () {
        var menuItem = $(this).parent('.js-menu-item');
        if(menuItem.hasClass('main-menu__item--active')) {
          menuItem.children('.js-submenu').slideUp(250);
          menuItem.removeClass('main-menu__item--active');
        }
  
        else {
          menuItem.children('.js-submenu').slideDown(250);
          menuItem.addClass('main-menu__item--active');
        }
      })
    })
  }

  //dropdown
  dropdown(){
    $('.js-dropdown-toggle').on('click', function(){
      var dropdown = $(this).parent('.js-dropdown');
      var droplist =  dropdown.children('.js-dropdown-list');
      $('.js-dropdown-list').not(droplist).fadeOut(250);
      droplist.fadeToggle(250);
    })
  
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.js-dropdown').length) {
          $(".js-dropdown-list").fadeOut(250);
      }
    });
  }
 
  //carousel 
  carousel(item, element, time){
    $(item + ':gt(0)').hide();

    setInterval(function(){
      $(item+ ':first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(element);
    }, time);
  }

  render() {
    return (
      <Aux className="app">
        <Sidebar 
        logo={logo3}
        userPhoto={logo}/>

{/*
        <Activity 
        icon=""
        author="Krish"
        date="Current Time"
        source={logo} />

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
