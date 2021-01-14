import React, { Component } from 'react';
import Project from './components/Project/Project'
import data from './data'
import './styles.scss';


export default class ProjectPage extends Component {

    render () {

        return (
           <Project 
           data={data}/> 
        )

    }

}