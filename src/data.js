import logo from './assets/logo.svg';
import user1 from './assets/avatar-female-2.jpg';
import user2 from './assets/avatar-male-3.jpg';
import user3 from './assets/avatar-male-4.jpg';

const data = {
    common:{
        message: "Hello this is a component!",
        title: "Main Title",
        author: "Krish Vora",
        date: "28th December",
        logo: logo,
        user: user1
    },
    components:{
        mainmenu: [
            {
              title: "Overview", 
              active: true
            },
            { 
              title: "Pages",
              submenu: [
                {
                  title: 'App Pages'
                }, 
                {
                  title:'Utility Pages'
                }, 
                {
                  title:'Layouts'
                }
              ]
            },
            { 
              title: "Components",
              submenu: [
                {
                  title: 'Bootstrap'
                }, 
                {
                  title:'Pipeline'
                }
              ]
            },
            {
              title: "Documentation"
            },
            {
              title: "Changelog"
            }
          ],
        quicklinks:[
          {
            title: 'Team Overview',
            linkto: '/'
          },
          {
            title: 'Project',
            linkto: '/'
          },
          {
            title: 'Single Task',
            linkto: '/'
          },
          {
            title: 'Kanban Board',
            linkto: '/'
          },
        ],
    },
    pages:{
      projectpage:{
        users:[
          {name:'Clarence', src: user1},
          {name:'Matt', src: user2},
          {name:'John', src: user3}
        ],
        nav:[
          {name:'Tasks',active: true},
          {name:'Files'},
          {name:'Activity'}
        ],
        tasks:{},
        files:{},
        activity:{}
      }
    }
}

export default data;
