import './App.css';
import React from 'react';
import Aux from './hoc/Aux';
import $ from 'jquery';
import {BrowserRouter, Link} from 'react-router-dom';
import Dropwdown from './components/bootstrap/Dropwdown'

import data from './Data';

import Sidebar from './components/menu/Sidebar'
import './styles.scss';

class App extends React.Component {


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
    <BrowserRouter>
      <Aux className="app">
        <Sidebar 
        logo={data.common.logo}
        userPhoto={data.common.user}
        quicklinks={data.components.quicklinks}
        mainmenu={data.components.mainmenu}
        />

      </Aux>
    </BrowserRouter>
    );
  }
}

export default App;
